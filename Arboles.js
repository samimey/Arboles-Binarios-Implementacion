class Nodo{
    constructor(dato){
        this.value = dato
        this.izquierda = null
        this.derecha=null
    }
}
class Arbol{
    constructor(){
        this.raiz=null
    }
    insert(value){
       let nodo=new Nodo(value)
        if(!this.raiz){
            this.raiz=nodo
        }else{
            this.agregar(this.raiz,nodo )
        }
    }
    agregar(raiz,nodo){
        "se evalua si el valor es menor o mayor que la raiz"
        if(nodo.value<raiz.value){
            "revisar si al lado izquierdo esta vacio"
            if(!raiz.izquierda){
                raiz.izquierda=nodo
            }else{
                "en el caso contrario sigue analizando mas a la izquierda" 
                this.agregar(raiz.izquierda,nodo)
            }
        }else{
            "se revisara por el lado derecho"
            if(!raiz.derecha){
                raiz.derecha=nodo
            }else {
                this.agregar(raiz.derecha,nodo)
            } 
        }    
    }

    Raiz(){
        "devolver la raiz"
        return this.raiz;
    }
    "se busca la existencia del dato y si tiene datos a la derecha y izquierda se mostrara"
    Buscar(dato,raiz){
        if(!raiz) return false
        else if (raiz.value==dato) return raiz
        else if(dato<raiz.value) return this.Buscar(dato,raiz.izquierda)
        else if(dato>raiz.value) return this.Buscar(dato,raiz.derecha) 
        
        

    }
    BuscarMenor(raiz){
        if(raiz==null) return null
        else if(raiz.izquierda==null)return raiz
        else return this.BuscarMenor(raiz.izquierda)
    }
    BuscarMayor(raiz){
        if(raiz==null) return null
        else if(raiz.derecha==null)return raiz
        else return this.BuscarMayor(raiz.derecha)
    }
    
    EliminarPredecesor(dato,nodo){
        let temporal
        if (dato<nodo.value)
            this.EliminarPredecesor(dato,nodo.izquierda)
        else if(dato>nodo.value)
            this.EliminarPredecesor(dato,nodo.derecha)
        else if(nodo.izquierda && nodo.derecha){
            let mayor = this.BuscarMayor(nodo.izquierda)
            nodo.value=mayor.value
            this.EliminarPredecesor(mayor.value,nodo.izquierda)
        }else{
            temporal=nodo
            if(nodo.izquierda==null) nodo= nodo.derecha
            else if(nodo.derecha==null) nodo=nodo.izquierda
            delete temporal.value
        }
         
    }
    EliminarSucesor(dato,nodo){
        let temporal
        if (dato<nodo.value)
            this.EliminarSucesor(dato,nodo.izquierda)
        else if(dato>nodo.value)
            this.EliminarSucesor(dato,nodo.derecha)
        else if(nodo.izquierda && nodo.derecha){
            let menor = this.BuscarMenor(nodo.derecha)
            nodo.value=menor.value
            this.EliminarSucesor(menor.value,nodo.derecha)
        }else{
            temporal=nodo
            if(nodo.izquierda==null) nodo= nodo.derecha
            else if(nodo.derecha==null) nodo=nodo.izquierda
            delete temporal.value
        }
        
         
    }
    preOrden(raiz){
        if(raiz){
            console.log(raiz.value)
            this.preOrden(raiz.izquierda)
            this.preOrden(raiz.derecha)
            
        }
    }
    inOrden(raiz){
        if(raiz){
            this.inOrden(raiz.izquierda)
            console.log(raiz.value)
            this.inOrden(raiz.derecha)
        }   
    }
    
    postOrden(raiz){
        if(raiz){
            this.postOrden(raiz.izquierda)
            this.postOrden(raiz.derecha)
            console.log(raiz.value)
        }
    }
    
}

let sal=new Arbol()
sal.insert(5)
sal.insert(3)
sal.insert(2)
sal.insert(7)
sal.insert(10)
sal.insert(6)
sal.insert(4)



sal.inOrden(sal.Raiz())
sal.preOrden(sal.Raiz())
sal.postOrden(sal.Raiz())
console.log(sal.Buscar(3,sal.Raiz()))
console.log(sal)
console.log(sal.BuscarMenor(sal.Raiz()))
/* sal.EliminarPredecesor(5,sal.Raiz())
console.log(sal) */ 