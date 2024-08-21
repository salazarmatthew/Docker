#!/bin/bash

# Derribar los contenedores actuales
docker-compose down

# Eliminar las imágenes antiguas de los microservicios
docker rmi $(docker images -q proyecto1-msvc-cursos) -f
docker rmi $(docker images -q proyecto1-msvc-usuarios) -f
docker rmi $(docker images -q proyecto1-frontend) -f


# Reconstruir las imágenes de los microservicios
docker-compose build

# Levantar los contenedores
docker-compose up