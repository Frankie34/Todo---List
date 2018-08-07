from django.contrib.auth.models import User, Group
from models import Todo
from rest_framework import serializers

class TodoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Todo
		fields = ('user', 'title', 'flag', 'priority', 'pubtime')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')