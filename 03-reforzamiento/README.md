# Sección 03: Reforzamiento JavaScript/TypeScript

Es importante tener una buena base de JavaScript y TypeScript para poder programar en React, por eso esta primera sección será un refuerzo de estos lenguajes orientado a la programación en React

<br>

<div align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://i.imgur.com/HV1ElY3.png" height="100">
  </a>
  <a href="https://www.typescriptlang.org/docs">
    <img src="https://i.imgur.com/5xxcxzk.png" height="100">
  </a>
</div>

<br>

<details>
<summary><strong>Índice</strong></summary>

- [Sección 03: Reforzamiento JavaScript/TypeScript](#sección-03-reforzamiento-javascripttypescript)
- [Creación de un nuevo proyecto](#creación-de-un-nuevo-proyecto)
- [Estructura de directorios](#estructura-de-directorios)
    - [index.html](#indexhtml)
    - [src/](#src)
    - [.gitignore](#gitignore)
    - [tsconfig.json](#tsconfigjson)
    - [package.json](#packagejson)
    - [pnpm-lock.yaml](#pnpm-lockyaml)
    - [node\_modules/](#node_modules)

</details>


<details>
<summary><strong>¿Que aprenderemos?</strong></summary>

- Manejar correctamente const, let y var
- Construir textos usando template strings
- Definir y utilizar interfaces en TypeScript
- Manipular arrays y recorrerlos
- Crear funciones sencillas y complejas
- Devolver varios valores desde funciones
- Desestructurar objetos y arrays
- Emplear enums para valores fijos
- Importar y exportar módulos
- Trabajar con promesas
- Hacer solicitudes con Fetch API
- Usar la API de Giphy para obtener GIFs
- Mejorar el código aplicando buenas prácticas
- Programar código asincrónico con async/await
- Realizar ejercicios prácticos guiados

</details>

<hr>

# Creación de un nuevo proyecto

Utilizaremos Vite para crear nuestro primer proyecto, para ello:

1. Creamos un nuevo proyecto de Vite:
```sh
pnpm create vite@latest
```
2. Seleccionamos el nombre del proyecto
3. Seleccionamos el framework que vamos a utilizar
4. Seleccionamos el lenguaje que vamos a utilizar
5. Entramos a la carpeta del proyecto
```sh
cd <nombre-proyecto>
```
6. Instalamos las dependencias:
```sh
pnpm i
```
1. Ejecutamos el proyecto en modo desarrollo:
```sh
pnpm run dev
```

# Estructura de directorios

### index.html

El archivo **[index.html](index.html)** es el punto de entrada de nuestra aplicación, donde se renderizan los componentes de React, todo lo que programemos se inyectará en este archivo, en el div ``#app``.

### src/

En la carpeta **[src](src/)** almacenaremos todo el código de nuestra aplicación que creemos.

### .gitignore

El archivo **[.gitignore](.gitignore)** nos ayuda a ignorar ciertos archivos y carpetas a la hora de subir nuestro proyecto a un repositorio, es muy útil para archivos como ``.env`` o carpetas como ``node_modules``.

### tsconfig.json

El archivo **[tsconfig.json](tsconfig.json)** define las opciones de configuración para el compilador de TypeScript, como la versión de TypeScript, las opciones de compilación, etc.

### package.json

El archivo **[package.json](package.json)** indica datos sobre el proyecto como el nombre, la versión, las dependencias, etc. Además también se definen los scripts como puede ser el ``pnpm run dev`` o ``pnpm run build``.

### pnpm-lock.yaml

El archivo **[pnpm-lock.yaml](pnpm-lock.yaml)** indica cómo fue construido nuestros modulos de Node.js y se utiliza para recrear el proyecto de una forma sencilla.

### node_modules/

En la carpeta ``node_modules`` encontraremos todas las dependencias instaladas en nuestro proyecto, pero no todas nos harán falta a la hora de publicar nuestra aplicación.

El archivo **[package.json](package.json)** nos puede ayudar a identificar qué dependencias son de desarrollo y cuáles son de producción de la siguiente manera:

```json
"devDependencies": {
  "typescript": "~5.8.3",
  "vite": "^7.1.2"
}
```

```json
"dependencies": {
  "axios": "^1.6.8",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
}
```

Las ``devDependencies`` solo las utilizaremos a la hora de desarrollar el proyecto, mientras que las ``dependencies`` sí que llegarán al producto final de la aplicación.