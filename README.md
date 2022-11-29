# Arboles-Binarios-Implementacion
Codigo diseñado de manera practica mediante documentación fácil de entender
Travesías de Arboles Binarios


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

![image](https://user-images.githubusercontent.com/112268583/204567322-8f65b85f-0740-46e4-ad33-b728b714ff5a.png)

![image](https://user-images.githubusercontent.com/112268583/204567973-fbc2a122-b19f-4469-9512-2b2d473f2f81.png)

![image](https://user-images.githubusercontent.com/112268583/204568101-4ec64660-2dd5-4923-b008-d54f4fbd99f3.png)
