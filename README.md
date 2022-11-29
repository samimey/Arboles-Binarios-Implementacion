# Arboles-Binarios-Implementacion
Codigo diseñado de manera practica mediante documentación fácil de entender
Travesías de Arboles Binarios
En inglés este algoritmo se conoce como Binary Tree Traversal. Traversal significa travesía. Existen alternativas de este algoritmo según el órden en que se visite el nodo, entendido como el procesamiento de los datos que contiene el mismo. Si señalamos con :

L si seguimos el hijo isquierdo
R si seguimos el hijo derecho
D si procesamos los datos del nodo
deben considerarse las siguientes alternativas :
LDR ----> Inorder
LRD ----> Postorder
DLR ----> Preorder

Travesia En Orden ( Inorder Traversal )

INORDER(T)
Empezar
Si T no es iguál a cero ...
Llamar INORDER ( LCHILD(T) )
Llamar DATA ( T )
Llamar INORDER ( RCHILD(T) )
Terminar
Travesia Pre Orden ( Preorder Traversal )

PREORDER(T)
Empezar
Si T no es iguál a cero ...
Llamar DATA ( T )
Llamar PREORDER ( LCHILD(T) )
Llamar PREORDER ( RCHILD(T) )
Terminar
Travesia Post Orden ( Postorder Traversal )

POSTORDER(T)
Empezar
Si T no es iguál a cero ...
Llamar POSTORDER ( LCHILD(T) )
Llamar POSTORDER ( RCHILD(T) )
Llamar DATA ( T )
Terminar
Ejemplos

                    *---*
                    | + |
                    *---*
                     | |
              +------+ +------+
              |               |
            *---*           *---*
            | * |           | E |        Inorder   ----> A / B ** C * D + E
            *---*           *---*
             | |
          +--+ +--+
          |       |
        *---*   *---*
        | / |   | D |                    Preorder  ----> + * / A ** B C D E
        *---*   *---*
         | |
      +--+ +--+
      |       |
    *---*   *---*
    | A |   | **|                        Postorder ----> A B C ** / D * E +
    *---*   *---*
             | |
          +--+ +--+
          |       |
        *---*   *---*
        | B |   | C |
        *---*   *---*
