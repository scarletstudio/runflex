from django.test import SimpleTestCase

from analytics.metrics.duration import get_duration
from core.models import Run, Track


class DistanceMetricTestCase(SimpleTestCase):
    def test_placeholder(self):
        run = Run()
        tracks = [Track() for _ in range(10)]
        actual = get_duration(run, tracks)
        expected = 37
        assert actual == expected
