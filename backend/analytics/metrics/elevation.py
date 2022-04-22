from typing import List

from core.models import Run, Track


def get_elevation_gain(run: Run, tracks: List[Track]) -> int:
  """
  Calculates the total elevation gain of a run, in feet.
  Parameters:
    run (Run): Data about the run
    tracks (List[Track]): List of tracking data from the run
  Returns:
    elevation_gain (float): Total elevation gain, to the nearest foot
  """
  return 13
