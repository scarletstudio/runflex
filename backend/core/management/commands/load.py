import gpxpy
import os
from django.core.management.base import BaseCommand
from core.models import Runner, Run, Track


DATA_PATH = "../data/runs"
RUNNER_ID = "133497"
RUNNER_NAME = "Vinesh Kannan"


class Command(BaseCommand):
    help = """
    Loads data into database.
    """

    def clear_tables(self):
        self.stdout.write("Clearing existing tables...", ending="")
        Runner.objects.all().delete()
        Run.objects.all().delete()
        Track.objects.all().delete()
        self.stdout.flush()
        self.stdout.write(self.style.SUCCESS(" OK"))

    def handle_data(self, run_id, data):
        # Add Runner
        runner_id = RUNNER_ID
        runner_name = RUNNER_NAME
        runner = {
            "id": runner_id,
            "name": runner_name,
        }
        Runner(**runner).save()
        # Add Run
        run = {
            "id": run_id,
            "runner": runner_id,
            "location": data.tracks[0].name,
            "start_time": data.time
        }
        Run(**run).save()
        # Add Tracks
        points = data.tracks[0].segments[0].points
        n = len(points)
        last_time = data.time
        for i, point in enumerate(points):
            if i % 10 == 0:
                msg = f"\r Progress: {i}/{n}..."
                self.stdout.write(msg, ending="")
                self.stdout.flush()
            track_id = f"{i}".zfill(4)
            time = point.time if point.time else last_time
            track = {
                "id": f"{run_id}-{track_id}",
                "run": run_id,
                "runner": runner_id,
                "index": i,
                "time": time,
                "latitude": point.latitude,
                "longitude": point.longitude,
                "elevation": point.elevation,
            }
            last_time = time
            Track(**track).save()
        msg = f"\r Progress: {i}/{n}..."
        self.stdout.write(msg, ending="")
        self.stdout.flush()

    def handle(self, *args, **options):
        self.clear_tables()
        files = os.listdir(DATA_PATH)
        for i, filename in enumerate(files):
            file_path = f"{DATA_PATH}/{filename}"
            self.stdout.write(f"Reading {i + 1}/{len(files)}: {file_path}")
            with open(file_path, "r") as file:
                data = gpxpy.parse(file)
                run_id = filename.split("_")[1].split(".")[0]
                self.handle_data(run_id, data)
                self.stdout.write(self.style.SUCCESS(" OK"))
        self.stdout.write(self.style.SUCCESS("Done."))
