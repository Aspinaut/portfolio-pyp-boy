from django.db import models

# Create your models here.

# class User(models.Model):
#     name = models.CharField(max_length=20, blank=False)
#
#     def __str__(self):
#         return "{}".format(self.name)

class ToDoList(models.Model):
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name

class Item(models.Model):
    todolist = models.ForeignKey(ToDoList, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
    complete =  models.BooleanField()

    def __str__(self):
        return self.text
