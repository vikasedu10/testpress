from django.urls import path, include
from . import views

urlpatterns = [
    path('staff/', views.dashboard, name='dashboard'),
    path('submit-quiz/', views.submitted_quiz, name='submitquiz'),
    path('quiz/<int:id>', views.startquiz, name='quiz'),
]