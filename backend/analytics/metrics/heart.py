from typing import List

from core.models import Run, Track


def get_target_heart_rate_time(run: Run, tracks: List[Track]) -> int:
  """
  Calculates percentage of time spent in target heart rate zone during a run.
  Parameters:
    run (Run): Data about the run
    tracks (List[Track]): List of tracking data from the run
  Returns:
    target_heart_rate_time (int): Percentage of duration, to the nearest point
  """
  return 70
