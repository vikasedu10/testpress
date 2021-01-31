from django.contrib.auth.models import User
from django.db import models


def image_location(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'Quiz Thumbnail/{0}/{1}'.format(instance.title, filename)


class NewQuiz(models.Model):
    timestamp = models.DateField(auto_now_add=True, blank=True)
    thumbnail = models.ImageField(upload_to=image_location, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(default=None, max_length=300, null=True, blank=True)
    description = models.TextField(default=None, null=True, blank=True)
    url = models.CharField(default=None, max_length=300, null=True, blank=True)

    def __str__(self):
        return self.title


class QuizAttempted(models.Model):
    timestamp = models.DateField(auto_now_add=True, blank=True)
    title = models.CharField(default=None, max_length=300, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    correct = models.IntegerField(default=None, null=True, blank=True)
    incorrect = models.IntegerField(default=None, null=True, blank=True)


    def __str__(self):
        return self.title