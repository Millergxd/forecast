# Ambiente de Desarrollo(Ubuntu)

Hacer update antes que todo

`$ sudo apt update`

Instalar docker

`$ sudo apt install docker`

Instalar docker-comopose

`$ sudo apt install docker-compose`

En el root del directorio ./forecast  correr

`$ docker-compose up`

Se crearan 3 containers, back, front y redis.

# Ambiente de produccion (Maquina virtual de ubuntu)

Hacer update

`$ sudo apt update`

Instalar nginx

`$ sudo apt install nginx`

Eliminar el archivo HTML por default que se crea en /var/www/html

Eliminar la configuracion por default que se crea en /etc/nginx/sites-enable

Copiar la configuracion que se encuentra en el root del directorio como 'default' en '/etc/nginx/sites-enable'

Reiniciar  nginx

`$ sudo service nginx restart`

Crear el build dentro dela carpeta de 'forecast-front'

`$ npm run build`

Copiar en la maquina virtual en '/var/www/html' esa es la ruta del nginx

Luego copiar la carpeta forecast-server en la maquina virtual

Dentro de la maquina virtual 

Instalar redis

`$ sudo apt install redis`

Instalar nodejs

`$ sudo apt install nodejs`

Instalar npm

`$ sudo apt install npm`

Instalar dependencias

`$ npm i --silent`

Correr script para iniciar el servidor

`./start.sh`

Done!