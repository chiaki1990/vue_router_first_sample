from django.db import models

# Create your models here.



class MyModel(models.Model):

    name = models.CharField(max_length=80)
    pice = models.IntegerField()

    def __str__(self):
        return self.name