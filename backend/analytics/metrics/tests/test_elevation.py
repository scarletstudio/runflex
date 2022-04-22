from django.test import SimpleTestCase

from analytics.metrics.elevation import get_elevation_gain
from core.models import Run, Track


class ElevationMetricTestCase(SimpleTestCase):
  def test_placeholder(self):
    run = Run()
    tracks = [Track() for _ in range(10)]
    actual = get_elevation_gain(run, tracks)
    expected = 13
    assert actual == expected

  def test_placeholder(self):
    run = Run()
    tracks = [
      Track(elevation=140),
      Track(elevation=160),
      Track(elevation=160),
      Track(elevation=165),
      Track(elevation=165),
    ]
    actual = get_elevation_gain(run, tracks)
    # What should be the output value?
    expected = 13
    assert actual == expected
