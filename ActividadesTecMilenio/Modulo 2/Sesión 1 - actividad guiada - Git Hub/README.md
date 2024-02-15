# Creación de un repositorio en GitHub - Parte 1

En el Módulo 1 del Diplomado de Desarrollo Web, creamos un repositorio en GitHub como parte de nuestras actividades. Este repositorio se llama "miperfil" y contiene un archivo README.md que usamos para practicar el lenguaje de marcado Markdown.

El proceso que seguimos fue el siguiente:

1. Creamos un nuevo repositorio en GitHub llamado "miperfil".

2. Clonamos el repositorio de forma local en nuestra máquina. Para hacer esto, abrimos la terminal de Git y ejecutamos los siguientes comandos:

   ```bash
   mkdir proyectos
   cd proyectos
   git clone https://github.com/Dramzii23/miperfil.git
   cd miperfil
   ```

3. Modificamos el archivo README.md con información personal, incluyendo una tabla de habilidades, una lista de intereses y una lista de nuestras comidas favoritas. Para abrir el archivo en Visual Studio Code, usamos el comando:

   ```bash
   code .
   ```

4. Hicimos un commit de nuestros cambios y los subimos al repositorio en GitHub con los siguientes comandos:

   ```bash
   git status
   git add .
   git commit -m "Modificación del archivo README"
   git push origin main
   ```

Puedes ver el repositorio aquí: [https://github.com/Dramzii23/miperfil.git](https://github.com/Dramzii23/miperfil.git)

---

# Creación de un repositorio en GitHub - Parte 2

En esta parte de la actividad guiada, modificamos el archivo README.md de nuestro repositorio "miperfil" para convertirlo en un Curriculum Vitae.

## Parte 1. Creación de CV (60 minutos)

1. Abrimos en VSCode el archivo README.md del proyecto miperfil.
2. Lo modificamos para que contenga toda la información importante de un CV:
   1. Nombre.
   2. Grado académico.
   3. Enlaces a redes sociales o portafolios de trabajos.
   4. Experiencia profesional.
   5. Voluntariado (si aplica).
   6. Conferencias públicas (si aplica).
   7. Certificaciones (si aplica).
   8. Lenguajes.
   9. Educación.
   10. Información adicional.

## Parte 2. Push a repositorio (10 minutos)

1. Guardamos los cambios en nuestro documento.
2. Añadimos el archivo al stage con el siguiente comando:

   ```bash
   git add .
   ```

3. Añadimos un commit descriptivo con el siguiente comando:

   ```bash
   git commit -m "Modificación del archivo README para convertirlo en CV"
   ```

4. Realizamos un push a nuestro repositorio con el siguiente comando:

   ```bash
   git push origin main
   ```

Creamos un nuevo repositorio llamado "CV-MarkDown" basado en el de "miperfil". Puedes ver el repositorio aquí: [https://github.com/Dramzii23/CV-MarkDown](https://github.com/Dramzii23/CV-MarkDown)

## Consideraciones

Markdown es un lenguaje de etiquetado que está diseñado para adaptarse y ser flexible. Se utiliza en general para todo tipo de publicaciones, por lo que es un estándar para mostrar información sobre los desarrollos almacenados en repositorios. Su uso, al igual que el de un software de control de versiones, es parte del día a día del desarrollador.
