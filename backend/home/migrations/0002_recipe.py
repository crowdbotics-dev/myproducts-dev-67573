# Generated by Django 2.2.28 on 2023-03-04 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('prep_time', models.IntegerField()),
                ('cook_time', models.IntegerField()),
                ('instructions', models.TextField()),
                ('image', models.CharField(max_length=256)),
            ],
        ),
    ]
