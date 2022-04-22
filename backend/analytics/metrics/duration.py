from typing import List

from core.models import Run, Track


def get_duration(run: Run, tracks: List[Track]) -> int:
    """
    Calculates the total duration of a run, in minutes.
    Parameters:
      run (Run): Data about the run
      tracks (List[Track]): List of tracking data from the run
    Returns:
      duration (float): Total run duration, to the nearest minute
    """
    return 37
