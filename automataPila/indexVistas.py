from django.http import HttpResponse 
#from automata.pda.dpda import DPDA
#from automata.pda.stack import PDAStack
from pyformlang.cfg import Terminal, Variable, Production, CFG
from pyformlang.pda import PDA, StackSymbol, transition_function, State
from django.template import Template, Context
from django.views.decorators.csrf import csrf_exempt
from automata.base.exceptions import RejectionException

class CrearGrafo:
    @csrf_exempt
    def grafo(request):
        docExterno=open("C://Users/user/Downloads/automataPila/automataPila/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context()
        documento=plt.render(ctx)
        return HttpResponse(documento)
    
    @csrf_exempt
    def Palindromo(request):

        # Definimos los símbolos que se utilizarán en la pila        libreria pyformlang
        stack_symbols = {StackSymbol("S"), StackSymbol("#")}

        # Definimos los estados
        p = State("p")
        q = State("q")
        r = State("r")

        transitions = [
            (p, Terminal("a"), StackSymbol("#"), p, [StackSymbol("a"), StackSymbol("#")]),
            (p, Terminal("b"), StackSymbol("#"), p, [StackSymbol("b"), StackSymbol("#")]),
            (p, Terminal("a"), StackSymbol("a"), p, [StackSymbol("a"), StackSymbol("a")]),
            (p, Terminal("b"), StackSymbol("b"), p, [StackSymbol("b"), StackSymbol("b")]),
            (p, Terminal("a"), StackSymbol("b"), q, []),
            (p, Terminal("b"), StackSymbol("a"), q, []),
            (q, Terminal("a"), StackSymbol("b"), q, []),
            (q, Terminal("b"), StackSymbol("a"), q, []),
            (r, Terminal(""), StackSymbol("#"), r, []),
        ]
        # Definimos el autómata de pila
        pda = PDA(
            {p, q, r},
            {Terminal("a"), Terminal("b"), Terminal("r")},
            stack_symbols,
            transitions,
            p,
            StackSymbol("#"),
            {r},
        )
        stack=StackSymbol("#")
        palabra = request.POST.get('palabra', '')
        resultados = []
        
        try:
            # Procesar la entrada en el DPDA
            pda.read_input(palabra, stack)
            # Verificar si la pila está vacía al final del procesamiento
            if stack.is_empty():
                resultados.append(f'La cadena "{palabra}" es un palíndromo.')
            else:
                resultados.append(f'La cadena "{palabra}" no es un palíndromo.')
        except RejectionException:
            resultados.append(f'La cadena "{palabra}" no es válida para el autómata.')

        return HttpResponse(resultados)


#        # Crear el DPDA         libreria automatalib
#        dpda = DPDA(
#            # Definir los estados
#            states={'p', 'q', 'r', 'f'},
#            # Definir los símbolos de entrada
#            input_symbols={'a', 'b', '$'},
#            # Definir los símbolos de la pila
#            stack_symbols={'#', 'a', 'b'},
#            # Definir las transiciones
#             transitions={
#                'p': {
#                    'a': {'#': ('p', ('a','#'))},
#                    'b': {'a': ('p', ('b','a'))}, 
#                    'b': {'b': ('p', ('b','b'))}
#                },
#                'q': {
#                    'b': {'a': ('q', '$')},
#                    'a': {'a': ('q', '$')}
#                },
#                'r': {
#                    '$': {'#': ('r', '#')}
#                }
#            },
#            
#            # Definir el estado inicial
#            initial_state='p',
#            # Definir el símbolo inicial de la pila
#            initial_stack_symbol='#',
#            # Definir los estados finales
#            final_states={'f'},
#            # Definir el modo de aceptación
#            acceptance_mode='final_state'
#        )
#
#        # Obtener la palabra del usuario
#        palabra = request.POST.get('palabra', '')
#        resultados = []
#
#        # Definir la pila inicial
#        stack = PDAStack(['#'])
#
#        try:
#            # Procesar la entrada en el DPDA
#            dpda.read_input(palabra, stack)
#            # Verificar si la pila está vacía al final del procesamiento
#            if stack.is_empty():
#                resultados.append(f'La cadena "{palabra}" es un palíndromo.')
#            else:
#                resultados.append(f'La cadena "{palabra}" no es un palíndromo.')
#        except RejectionException:
#            resultados.append(f'La cadena "{palabra}" no es válida para el autómata.')
#
#        return HttpResponse(resultados)
 


#        Historial(palabrasIngresadas=palabra,estadoDelaPalabra=resultados[0]).save()
#        docExterno=open("C:/Users/user/Downloads/automataPila/automataPila/vista/static/grafo.html")
#        plt=Template(docExterno.read())
#        docExterno.close()
#        ctx=Context({'resultados': resultados, 'palabra': palabra, 'dpda': dpda})
#        documento=plt.render(ctx)
#        return HttpResponse(documento)
    
#    def historial(request):
#        historial_Palabras = Historial.objects.all()
#        docExterno=open("C://Users/user/Downloads/automataPila/automataPila/vista/static/grafo.html")
#        plt=Template(docExterno.read())
#        docExterno.close()
#        ctx=Context({'historial': historial_Palabras})
#        documento=plt.render(ctx)
#        return HttpResponse(documento) 