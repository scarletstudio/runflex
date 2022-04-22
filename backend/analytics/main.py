from typing import List

from core.models import Run, Track
from analytics.types import RunMetricResult
from analytics.metrics.distance import get_distance
from analytics.metrics.duration import get_duration
from analytics.metrics.elevation import get_elevation_gain
from analytics.metrics.heart import get_target_heart_rate_time


# This config defines all the metrics we display for each run.
RUN_METRICS = [
  {
    "title": "Total Distance",
    "units": "mi",
    "compute": get_distance,
  },
  {
    "title": "Total Duration",
    "units": "mins",
    "compute": get_duration,
  },
  {
    "title": "Total Elevation Gain",
    "units": "ft",
    "compute": get_elevation_gain,
  },
  {
    "title": "% Time in Target Heart Rate Zone",
    "units": "%",
    "compute": get_target_heart_rate_time,
  },
]


def get_run_metrics(run: Run, tracks: List[Track]) -> List[RunMetricResult]:
  """
  Returns metrics for a run.
  """
  return [
    {
      "title": metric["title"],
      "units": metric["units"],
      "value": metric["compute"](run, tracks),
    }
    for metric in RUN_METRICS
  ]
