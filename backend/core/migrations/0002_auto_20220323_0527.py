# Generated by Django 3.2.8 on 2022-03-23 05:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='run',
            name='location',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='run',
            name='runner',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AddField(
            model_name='run',
            name='start_time',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='track',
            name='elevation',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='track',
            name='index',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='track',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='track',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='track',
            name='time',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='track',
            name='run',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='track',
            name='runner',
            field=models.CharField(max_length=30),
        ),
    ]