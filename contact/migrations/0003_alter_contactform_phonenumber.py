# Generated by Django 4.2.15 on 2024-08-27 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_alter_contactform_phonenumber'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactform',
            name='phonenumber',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]
