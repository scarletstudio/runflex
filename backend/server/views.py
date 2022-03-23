from django.forms.models import model_to_dict
from django.http import JsonResponse
from core.models import Runner, Run, Track


# Parameters for rendering JSON responses
dumps_params = {
  "indent": 2,
}


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


def runner_view(request, id: str):
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


def shallow_track(track):
  """
  Returns only the fields of a track needed for the run view.
  """
  return {
    "index": track.index,
    "time": track.time,
    "latitude": track.latitude,
    "longitude": track.longitude,
    "elevation": track.elevation,
  }


def run_view(request, id: str):
  """
  Returns data about a run by ID.
  """
  run = Run.objects.filter(id=id).get()
  tracks = Track.objects.filter(run=id).all()
  return JsonResponse(
    {
      "success": True,
      **model_to_dict(run),
      "tracks": [shallow_track(t) for t in tracks],
    },
    json_dumps_params=dumps_params
  )
