from django.db import models

# Create your models here.
class studentDB(models.Model):
    studentID=models.AutoField(primary_key=True)
    studentName=models.CharField(max_length=100)
    age=models.IntegerField()
    place=models.CharField(max_length=100)
