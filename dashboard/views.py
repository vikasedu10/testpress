from django.contrib import messages
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
import urllib.request, json
# Create your views here.
from dashboard.models import NewQuiz, QuizAttempted


def startquiz(request, id=None):
    get_object = NewQuiz.objects.get(id=id)

    with urllib.request.urlopen(get_object.url) as url:
        data = json.loads(url.read().decode())
        for x in data['results']:
            print(x['question'])



    params = {
        'title': get_object.title,
        'ques': data,
        'description': get_object.description,
        'url': get_object.url,
    }
    return render(request, 'teacher/startquiz.html', params)

def submitted_quiz(request):
    if request.method == 'GET':
        title = request.GET['title']
        correct = request.GET['correct_form']
        incorrect = request.GET['incorrect_form']
        user = User.objects.get(username=request.user.username)
        quiz_attempted = QuizAttempted(title=title, correct=correct, incorrect=incorrect, user=user)
        quiz_attempted.save()
        messages.success(request, 'Thankyou for taking up the quiz.')
        return redirect('homepage')


def dashboard(request):
    params = {}
    if request.user.is_staff:
        if request.method == 'POST':
            title = request.POST['title']
            url = request.POST['url']
            description = request.POST['description']
            user = User.objects.get(username=request.user.username)

            if len(request.FILES):
                thumbnail = request.FILES['thumbnail']
                newquiz = NewQuiz(thumbnail=thumbnail, user=user, title=title, url=url, description=description)
            else:
                newquiz = NewQuiz(user=user, title=title, url=url, description=description)
            newquiz.save()
            messages.success(request, 'New quiz have been added to the database sucessfully.')
            return redirect('dashboard')

        # If staff has come with a get request.
        get_quiz_res = QuizAttempted.objects.all()
        params.update({
            'result': get_quiz_res
        })

    else:
        messages.success(request, 'You are not an authorized person to visit this page. Please contact administrator')
        return redirect('homepage')

    return render(request, 'teacher/dashboard.html', params)