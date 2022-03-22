from django.db import models


class Runner(models.Model):
  id = models.CharField(max_length=30, primary_key=True)
  name = models.CharField(max_length=255)

  
class Run(models.Model):
  id = models.CharField(max_length=30, primary_key=True)


class Track(models.Model):
  id = models.CharField(max_length=30, primary_key=True)
  run = models.ForeignKey(Run, on_delete=models.CASCADE)
  runner = models.ForeignKey(Runner, on_delete=models.CASCADE)

