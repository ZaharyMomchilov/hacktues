# Generated by Django 3.1 on 2020-08-21 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wave2', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='technologies',
            field=models.ManyToManyField(blank=True, to='wave2.Technologie'),
        ),
    ]