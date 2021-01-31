from django.shortcuts import render

from dashboard.models import NewQuiz


def homepage(request):
    quiz = NewQuiz.objects.all()
    params = {
        'quiz': quiz
              }
    return render(request, 'homepage/homepage.html', params)