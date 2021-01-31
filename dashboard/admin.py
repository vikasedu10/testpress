from django.contrib import admin
from dashboard.models import NewQuiz, QuizAttempted

admin.site.register((NewQuiz, QuizAttempted))
