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

# Ambiente de produccion (Configuracion para instancia de EC2 con imagen de ubuntu 18.04)

Para subir a produccion es importante en el archivo que se encuentra en ./forecast-server/.env eliminar la variable NODE_ENV=dev

Desde nuestro local copiamos la carpeta con el los archivos del servidor

`$ scp -i  key.pem -r /tu/path/del/proyecto ubuntu@*ip de la instancia*:/home/ubuntu/`

Conectarse a traves de ssh

`$ ssh -i key.pem ubuntu@*ip de la instancia*`

Hacer update

`$ sudo apt update`

Instalar nginx

`$ sudo apt install nginx`

Eliminar el archivo HTML por default que se crea en /var/www/html

`$ sudo rm /var/www/html/index.nginx-debian.html`

Eliminar la configuracion por default que se crea en /etc/nginx/sites-enable

`$ sudo rm /etc/nginx/sites-enable/default`

Copiar la configuracion que se encuentra en el root del proyecto como 'default' en '/etc/nginx/sites-enable'
Estando en /home/ubuntu

`$ sudo cp default /etc/nginx/sites-enable/`

Reiniciar  nginx

`$ sudo service nginx restart`

Le damos permiso a la carpeta en 'html' en '/var/www'

`$ sudo chmod 777 /var/www/html`

Dentro de tu local
Crear el build de react dentro de la carpeta 'forecast-front' correr

`$ npm run build`

Copiar a la instancia el build

`$ scp -i key.pem -r /tu/path/forecast-front/build/* ubuntu@*ip de la instancia*:/var/www/html/`

Dentro de la maquina virtual 

Instalar redis

`$ sudo apt install redis`

Instalar nodejs

`$ sudo apt install nodejs`

Instalar npm

`$ sudo apt install npm`

Dentro de /home/ubuntu instalamos las dependencias

`$ npm i --silent`

Correr script para iniciar el servidor

`./start.sh`

Done!

Si se quiere parar el servidor con `./stop.sh` es suficiente

En caso de querer cambiar el API KEY para hacer los request a Dark Sky el link se encuentra en duro en ./forecast-server/.env como API_URL=https://api.darksky.net/forecast/*insertar aqui api key*/
