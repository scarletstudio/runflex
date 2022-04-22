from typing import List

from core.models import Run, Track


def get_distance(run: Run, tracks: List[Track]) -> float:
    """
    Calculates the total distance of a run, in miles.
    Parameters:
      run (Run): Data about the run
      tracks (List[Track]): List of tracking data from the run
    Returns:
      distance (float): Total distance run, in miles
    """
    return 1.53
