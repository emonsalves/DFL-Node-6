![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
![NPM ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?logo=postgresql&logoColor=white&style=for-the-badge)
![Bootstrap](	https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)	

#  Desafío - Soft Jobs

###  Descripción

La empresa Soft Jobs ha iniciado el desarrollo de una plataforma que busca apoyar a la comunidad de desarrolladores juniors a conseguir trabajos cortos y sencillos para acumular experiencia laboral y mejorar sus oportunidades. 

En este desafío serás backend developer de la empresa y deberás crear un servidor para la autenticación y autorización de usuarios usando JWT.
Deberás descargar el material de apoyo en el que encontrarás una aplicación cliente desarrollada con React preparada para consumir las rutas de tu servidor.

A continuación te mostramos imágenes de la aplicación cliente disponible en el material de apoyo.

![image](https://user-images.githubusercontent.com/26279310/213804280-4a7e3f80-ed1a-45d1-aeb0-1c948c19b390.png)

![image](https://user-images.githubusercontent.com/26279310/213804323-4736993e-27e1-4282-900a-3f4da67f29d1.png)

![image](https://user-images.githubusercontent.com/26279310/213805125-68e46007-a2fe-40a9-b73f-c892b06db8cb.png)

![image](https://user-images.githubusercontent.com/26279310/213805147-8208ffcd-de58-4d23-9691-301eba54b30f.png)

Para realizar este desafío necesitarás ejecutar el siguiente script sql en tu terminal psql para
crear la base de datos y la tabla que utilizaremos:

```
CREATE DATABASE softjobs;
```

```
CREATE TABLE usuarios 
( id SERIAL, email VARCHAR(50) NOT NULL, password VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );
```

## Tu servidor debe:

- Permitir el registro de nuevos usuarios a través de una ruta POST /usuarios

- Ofrecer la ruta POST /login que reciba las credenciales de un usuario y devuelva un token generado con JWT. Se debe incluir el payload del token el email del usuario
registrado.

- Disponibilizar una ruta GET /usuarios para devolver los datos de un usuario en caso de que esté autenticado, para esto:

  - Extraiga un token disponible en la propiedad Authorization de las cabeceras
  - Verifique la validez del token usando la misma llave secreta usada en su firma
  - Decodifique el token para obtener el email del usuario a buscar en su payload
  - Obtenga y devuelva el registro del usuario

## Requerimientos

- Registrar y obtener usuarios de la base de datos
- Usar middlewares para :
  - Verificar la existencia de credenciales en la ruta que corresponda
  - Validar el token recibido en las cabeceras en la ruta que corresponda
  - Reportar por la terminal las consultas recibidas en el servidor
- Firmar, verificar y decodificar tokens JWT
- Capturar y devolver los posibles errores que ocurran en el servidor
- Encriptar las contraseñas al momento de registrar nuevos usuarios

## Configuracion ENV
```
PORT="Ur Port"
HOST="Ur Host"
USER="Ur User"
PASSWORD="Ur Password"
DATABASE="Ur Database"
DOMAIN="Ur Domain"
JWT_SECRET="Ur Secret Key"
```
## Instalación
```$npm install
$npm install
```
## Levantar Server
```$npm run dev
$npm run dev
```
## Sitio Web Server
```
http://localhost:3000/
```