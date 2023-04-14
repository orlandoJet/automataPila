from django.http import HttpResponse 
from automata.fa.nfa import NFA
from django.template import Template, Context
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def grafo(request):
    docExterno=open("C:/Users/ADMIN/Desktop/grabaciones y clases unimag/SEMESTRE 9/COMPILADORES/tareas/automataPila/automataPila/vista/static/grafo.html")
    plt=Template(docExterno.read())
    docExterno.close()
    ctx=Context()
    documento=plt.render(ctx)
    return HttpResponse(documento)