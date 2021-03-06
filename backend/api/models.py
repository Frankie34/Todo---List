from django.db import models

# Create your models here.

from django.contrib.auth.models import User


class Todo(models.Model):
    user = models.ForeignKey(User)
    title = models.CharField(max_length=200)
    flag = models.CharField(max_length=2)
    priority = models.CharField(max_length=2)
    pubtime = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return u'%d %s %s' % (self.id, self.title, self.flag)

    class Meta:
        ordering = ['flag', 'priority', 'pubtime']


