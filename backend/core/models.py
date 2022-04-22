from django.db import models
from django.utils.timezone import utc, now


class Runner(models.Model):
  id = models.CharField(max_length=30, primary_key=True)
  name = models.CharField(max_length=255)

  
class Run(models.Model):
  id = models.CharField(max_length=30, primary_key=True)
  runner = models.CharField(max_length=30, default="")
  location = models.CharField(max_length=60, blank=True, null=True)
  start_time = models.DateTimeField(default=now, blank=True)


class Track(models.Model):
  id = models.CharField(max_length=30, primary_key=True)
  run = models.CharField(max_length=30)
  runner = models.CharField(max_length=30)
  index = models.IntegerField(default=0)
  time = models.DateTimeField(default=now, blank=True)
  latitude = models.FloatField(blank=True, null=True)
  longitude = models.FloatField(blank=True, null=True)
  elevation = models.FloatField(blank=True, null=True)
