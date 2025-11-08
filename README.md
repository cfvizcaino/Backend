# Talleres de Backend

Este proyecto contiene una serie de talleres implementados como una aplicación Express.js.
Cada taller tiene su propio conjunto de funciones y rutas correspondientes para manejar solicitudes HTTP.

## Estructura del Proyecto

```
├─ src
│  ├─ app.js                  # Punto de entrada de la aplicación
│  ├─ routes                  # Contiene los archivos de rutas de cada taller
│  │  ├─ taller1.routes.js    # Rutas del Taller 1
│  │  ├─ taller2.routes.js    # Rutas del Taller 2
│  │  └─ taller3.routes.js    # Rutas del Taller 3
│  └─ workshops               # Contiene los archivos de funciones de los talleres
│      ├─ taller1.js          # Funciones del Taller 1
│      ├─ taller2.js          # Funciones del Taller 2
│      └─ taller3.js          # Funciones del Taller 3
├─ package.json              # Archivo de configuración de NPM
└─ README.md                 # Documentación del proyecto
```

## Instrucciones de Configuración

1. **Clonar el repositorio:**
   ```
   git clone <url-del-repositorio>
   cd backend-workshops
   ```

2. **Instalar dependencias:**
   ```
   npm install
   ```

3. **Ejecutar la aplicación:**
   ```
   npm start
   ```

## Guía de Uso

- Cada taller se puede acceder mediante sus respectivos endpoints POST definidos en los archivos de rutas.
- El cuerpo (body) de la solicitud debe contener los parámetros necesarios para cada función, tal como se especifica en los archivos de rutas.