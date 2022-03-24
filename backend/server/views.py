from django.forms.models import model_to_dict
from django.http import JsonResponse
from core.models import Runner, Run, Track


# Parameters for rendering JSON responses
dumps_params = {
  "indent": 2,
}
# Subset of track columns to return in run view
track_run_columns = [
  "index",
  "time",
  "latitude",
  "longitude",
]


def hello(request):
  """
  Returns a friendly welcome message.
  """
  return JsonResponse(
    {
      "success": True,
      "message": "Hello! The backend is up and running.",
    },
    json_dumps_params=dumps_params
  )


def all_runners_view(request):
  """
  Returns all runners, up to a limit.
  """
  runners = Runner.objects.all()[:100]
  return JsonResponse(
    {
      "success": True,
      "runners": [model_to_dict(r) for r in runners],
    },
    json_dumps_params=dumps_params
  )


def all_runs_view(request, runner_id: str):
  """
  Returns all runs for a runner, up to a limit.
  """
  runs = Run.objects.filter(runner=runner_id).all()[:100]
  return JsonResponse(
    {
      "success": True,
      "runs": [model_to_dict(r) for r in runs],
    },
    json_dumps_params=dumps_params
  )


def runners_view(request, id: str):
  """
  Returns data about a runner by ID.
  """
  runner = Runner.objects.filter(id=id).get()
  return JsonResponse(
    {
      "success": True,
      **model_to_dict(runner)
    },
    json_dumps_params=dumps_params
  )


def get_run_metrics():
  """
  Returns metrics for a run.
  """
  return [
    {
      "title": "Total Distance",
      "value": "1.53",
      "units": "mi",
    },
    {
      "title": "Total Duration",
      "value": "37",
      "units": "mins"
    },
    {
      "title": "Total Elevation Gain",
      "value": "13",
      "units": "ft",
    },
    {
      "title": "% Time in Target Heart Rate Zone",
      "value": "70",
      "units": "%",
    },
  ]


def runs_view(request, id: str):
  """
  Returns data about a run by ID.
  """
  run = Run.objects.filter(id=id).get()
  tracks = (
    Track
      .objects
      .filter(run=id)
      .values(*track_run_columns)
      .all()
  )
  return JsonResponse(
    {
      "success": True,
      **model_to_dict(run),
      "metrics": get_run_metrics(),
      "tracks": list(tracks),
    },
    json_dumps_params=dumps_params
  )
