Pokedex — PokeAPI v2

Proyecto de Pokedex desarrollado como parte de un Reto de IA parte 2 de la prueba tecnica, cuyo objetivo es validar la capacidad de generar un proyecto funcional completo utilizando un solo prompt hacia una IA.

La aplicación consume la PokeAPI v2 y permite:

Listar Pokémon con paginación

Ver el detalle básico de cada Pokémon

Objetivo del Proyecto

Construir una Pokedex sencilla que cumpla con los siguientes requisitos mínimos:

Consumir la PokeAPI v2

Listar Pokémon usando paginación (limit y offset)

Mostrar el detalle de un Pokémon usando su name o id

Mantener una implementación simple, clara y funcional

Funcionalidades
Listado de Pokémon

Consume el endpoint:

GET https://pokeapi.co/api/v2/pokemon?limit=XX&offset=YY


Muestra:

Nombre del Pokémon

Opción para ver el detalle

Incluye paginación (siguiente / anterior)

Detalle de Pokémon

Consume el endpoint:

GET https://pokeapi.co/api/v2/pokemon/{name}


o

GET https://pokeapi.co/api/v2/pokemon/{id}


Muestra información básica:

Nombre

Imagen

Altura

Peso

Tipos

Tecnologías Utilizadas

HTML

CSS

JavaScript

PokeAPI v2
https://pokeapi.co/

No se utilizan frameworks ni configuraciones complejas.

📂 Estructura del Proyecto
<img width="466" height="218" alt="image" src="https://github.com/user-attachments/assets/6ea98043-bac6-4bc0-9da1-a770e6fd85b1" />


Cómo Ejecutar el Proyecto
Opción 1: Ejecutar localmente (recomendado)

Clona el repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git


Ingresa a la carpeta del proyecto:

cd pokedex

Abre el archivo index.html:

Doble clic sobre el archivo
o

Ábrelo desde tu navegador (Chrome, Firefox, Edge)

No se requiere instalación adicional ni servidor local


Reto IA — Un Solo Prompt

Este proyecto fue generado utilizando un único prompt enviado a una IA, cumpliendo con la regla del reto.

El prompt exacto utilizado se encuentra en el archivo:

promt.txt

No se utilizaron mensajes adicionales ni iteraciones

El objetivo del reto es evaluar:

Claridad del prompt

Alcance de las instrucciones

Capacidad de dirección hacia un resultado funcional

constancia de uso de un solo prompt:
https://github.com/user-attachments/assets/445fd010-9563-4d44-a9f6-94bbdf91f6a4
