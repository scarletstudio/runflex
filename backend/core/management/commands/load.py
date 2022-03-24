import json
import os
from datetime import datetime
from django.core.management.base import BaseCommand
from django.utils.timezone import make_aware
from core.models import Runner, Run, Track


MS = 1000
DATA_PATH = "../data/runs"


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
        runner_id = data["runner_id"]
        runner = {
            "id": runner_id,
            "name": data["runner_name"]
        }
        Runner(**runner).save()
        # Add Run
        timestamp = data["start_timestamp"]
        dt = make_aware(datetime.fromtimestamp(timestamp / MS))
        run = {
            "id": run_id,
            "runner": runner_id,
            "location": data["run_location"],
            "start_time": dt
        }
        Run(**run).save()
        # Add Tracks
        n = len(data["path"])
        for i, point in enumerate(data["path"]):
            if i % 10 == 0:
                msg = f"\r Progress: {i}/{n}..."
                self.stdout.write(msg, ending="")
                self.stdout.flush()
            track_id = f"{i}".zfill(4)
            track = {
                "id": f"{run_id}-{track_id}",
                "run": run_id,
                "runner": runner_id,
                "index": i,
                "time": dt,
                "latitude": point["lat"],
                "longitude": point["lon"],
                "elevation": point["elevation"]
            }
            Track(**track).save()

    def handle(self, *args, **options):
        self.clear_tables()
        files = os.listdir(DATA_PATH)
        for i, filename in enumerate(files):
            self.stdout.write(f"Reading file {i + 1}/{len(files)}.")
            file_path = f"{DATA_PATH}/{filename}"
            with open(file_path, "r") as file:
                data = json.load(file)
                run_id = filename.split(".")[0]
                self.handle_data(run_id, data)
                self.stdout.write(self.style.SUCCESS(" OK"))
        self.stdout.write(self.style.SUCCESS("Done."))
