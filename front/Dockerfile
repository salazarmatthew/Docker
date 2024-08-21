# Usa una imagen base de Node.js
FROM node:18 AS build

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY package*.json ./
RUN npm install
COPY . .

# Construye el proyecto Angular
RUN npm run build -- --configuration production

# Usa una imagen base para servir el contenido
FROM nginx:alpine

# Copia el archivo de configuración personalizado
COPY nginx.conf /etc/nginx/nginx.conf

# Copia el contenido de la aplicación al directorio de Nginx
COPY --from=build /app/dist/front/browser /usr/share/nginx/html

# Expón el puerto en el que Nginx está escuchando
EXPOSE 80
