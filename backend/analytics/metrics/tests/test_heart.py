from django.test import SimpleTestCase

from analytics.metrics.heart import get_target_heart_rate_time
from core.models import Run, Track


class HeartRateMetricTestCase(SimpleTestCase):
    def test_placeholder(self):
        run = Run()
        tracks = [Track() for _ in range(10)]
        actual = get_target_heart_rate_time(run, tracks)
        expected = 70
        assert actual == expected
