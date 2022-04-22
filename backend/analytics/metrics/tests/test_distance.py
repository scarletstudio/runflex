from django.test import SimpleTestCase

from analytics.metrics.distance import get_distance
from core.models import Run, Track


class DistanceMetricTestCase(SimpleTestCase):
    def test_placeholder(self):
        run = Run()
        tracks = [Track() for _ in range(10)]
        actual = get_distance(run, tracks)
        expected = 1.53
        assert actual == expected
