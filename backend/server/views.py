from django.http import JsonResponse

import json


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


def run_view(request, id: str):
  """
  Returns data about a run by ID.
  """
  return JsonResponse(
    {
      "success": True,
      "id": id,
      "data": {},
    },
    json_dumps_params=dumps_params
  )


def runner_view(request, id: str):
  """
  Returns data about a runner by ID.
  """
  return JsonResponse(
    {
      "success": True,
      "id": id,
      "data": {},
    },
    json_dumps_params=dumps_params
  )
