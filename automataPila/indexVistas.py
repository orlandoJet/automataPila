from django.http import HttpResponse 
from automata.pda.dpda import DPDA
from automata.pda.stack import symbolstack
from django.template import Template, Context
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
class CrearGrafo:
    def grafo(request):
        docExterno=open("C://Users/user/Downloads/automataPila/automataPila/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context()
        documento=plt.render(ctx)
        return HttpResponse(documento)

    def CrearLogicaPIla(self):
        #Se definen los estados
        self.p = 'p'
        self.q = 'q'
        self.r = 'r'
        self.aceptar_estado = {self.r}

        #se define el alfabeto del automata
        self.alfabetoAutomata = {'a','b'}

        #se define el alfabeto de la pila
        self.alfabetoPila = {'a','b','#','$'} #"$" va repreentar lamda 

        #se define la función de transiciones del automata 
        self.transiciones = {
            (self.p, 'a', '#'): (self.p, '#a'),
            (self.p, 'b', 'a'): (self.p, 'ab'),
            (self.p, 'b', 'b'): (self.p, 'bb'),
            (self.q, 'b', 'b'): (self.q, '$'),
            (self.q, 'b', 'b'): (self.q, '$'),
            (self.q, 'a', 'a'): (self.q, '$'),
            (self.r, '$', '#'): (self.r, '#')
        }
        #se define la pila inicial
        self.stack = SymbolStack(['#'])
