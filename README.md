# Api-NodeJs

Herramientas necesarias:

Descargar Docker -> https://nodejs.org/en](https://docs.docker.com/get-docker/

MongoDB -> https://www.mongodb.com/docs/manual/installation/

(En caso de que NO se Incluya en Docker Desktop de tu S.O.)

Descargar Docker.Compose -> [https://www.docker.com/products/docker-desktop/](https://docs.docker.com/compose/install/

Pasos para Iniciar en este proyecto:

Desde la Terminal o CLI

Clonar el repositorio mediante el siguiente comando.
git clone https://github.com/Diegoferpo/Api-NodeJs.git

Crear un Archivo .env con lo siguiente:

MONGO_URI=mongodb://host.docker.internal:27017/SoldOut REDIS_URL=redis://redis:6379 PORT=8085

BASE DE DATOS:

Si MongoDB ya está instalado en tu máquina local, asegúrate de que esté corriendo en el puerto predeterminado 27017.

La URI de conexión en el archivo .env debe ser mongodb://host.docker.internal:27017/SoldOut, ya que los contenedores Docker se conectarán al MongoDB que está ejecutándose en tu localhost físico.

Crea la base de datos SoldOut y la colección Stock usando MongoDB Compass o MongoDB Shell:

mongo use SoldOut db.createCollection('Stock')

Crea registros para probar las fucnionalidades de la API:

db.Stock.insertMany([ { name: "Nike Air Max", style: "Deportivo", lastArrival: new Date("2023-12-01"), price: 99.99, color: "Negro" }, { name: "Adidas Ultraboost", style: "Running", lastArrival: new Date("2023-11-20"), price: 129.99, color: "Blanco" }, { name: "Puma RS-X", style: "Casual", lastArrival: new Date("2023-10-15"), price: 89.99, color: "Rojo" }, { name: "Reebok Classic", style: "Casual", lastArrival: new Date("2023-09-10"), price: 79.99, color: "Azul" }, { name: "Converse Chuck Taylor", style: "Casual", lastArrival: new Date("2023-08-25"), price: 59.99, color: "Blanco"

} ])

EJECUCIÓN DE LA API

Para ejecutar la API junto con Redis y MongoDB en contenedores, ejecuta el siguiente comando:

docker-compose up --build

USO DE SWAGGER Y TESTEO

La API también incluye documentación y una interfaz para probar los endpoints utilizando Swagger. Para acceder a Swagger, abre el siguiente enlace en tu navegador:

http://localhost:8085/api-docs

Repositorio para evaluación de Sistemas Distribuidos. By Diego Fernando Portillo Bibiano