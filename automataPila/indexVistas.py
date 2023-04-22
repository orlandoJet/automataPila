from django.http import HttpResponse 
from django.template import Template, Context
from django.views.decorators.csrf import csrf_exempt
from .models import Historial
from django.shortcuts import redirect
from .models import Historial
from django.shortcuts import redirect

class CrearGrafo:
    @csrf_exempt
    def grafo(request):
        docExterno=open("C:/Users/user/Downloads/automataPila/automataPila/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context()
        documento=plt.render(ctx)
        return HttpResponse(documento)
    
    @csrf_exempt
    def Palindromo(request):
        # Obtener la palabra del usuario
        palabra = request.POST.get('palabra', '')
        pila = []
        resultados = []
        palabraVal=True
        
        for letra in palabra:
            if letra==" ":
                palabraVal=False
                break
            if letra=="a" or letra=="b":
                pila.append(letra)
            else:
                palabraVal=False
                break   
        palabra_invertida = ""
        if palabraVal==True:
            while len(pila) > 0:
                palabra_invertida += pila.pop()
            if len(pila)==1 or len(pila)%2!=0:
                palabra_invertida=""
            if palabra == palabra_invertida:
                resultados.append(f'La cadena "{palabra}" es un palíndromo.')
            else:
                resultados.append(f'La cadena "{palabra}" no es un palíndromo.')
        else:
            resultados.append(f'La cadena "{palabra}" tiene simbolos que no pertenecen al alfabeto.')

        Historial(palabrasIngresadas=palabra, estadoDelaPalabra=resultados[0]).save()
        docExterno=open("C:/Users/user/Downloads/automataPila/automataPila/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context({'resultados': resultados, 'palabra': palabra})
        documento=plt.render(ctx)
        return HttpResponse(documento)

    @csrf_exempt
    def historial(request):
        historial_Palabras = Historial.objects.all()
        docExterno=open("C:/Users/user/Downloads/automataPila/automataPila/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context({'historial': historial_Palabras})
        documento=plt.render(ctx)
        return HttpResponse(documento) 
    
    @csrf_exempt
    def borrar_historial(request):
        Historial.objects.all().delete()
        return redirect('historial')