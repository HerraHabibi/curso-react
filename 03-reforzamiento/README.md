# Sección 03: Reforzamiento JavaScript/TypeScript

Es importante tener una buena base de JavaScript y TypeScript para poder programar en React, por eso esta primera sección será un refuerzo de estos lenguajes orientado a la programación en React

<br>

<div align="center">
  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://i.imgur.com/HV1ElY3.png" height="100">
  </a>
  <a target="_blank" href="https://www.typescriptlang.org/docs">
    <img src="https://i.imgur.com/5xxcxzk.png" height="100">
  </a>
</div>

<br>

<details>
<summary><strong>Índice</strong></summary>

- [Creación de un nuevo proyecto](#creación-de-un-nuevo-proyecto)
- [Estructura de directorios](#estructura-de-directorios)
- [Variables y constantes](#variables-y-constantes)
- [Template String](#template-string)
- [Objetos literales](#objetos-literales)

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
7. Ejecutamos el proyecto en modo desarrollo:
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

# Variables y constantes

Existen dos formas de declarar variables en JavaScript/TypeScript:
- ``let``
- ``const``

Además de estas dos formas, también existe ``var`` pero **NUNCA** debemos utilizarla.

### let

Las variables ``let`` pueden cambiar de valor.

```ts
let x;

x = 1;
console.log(x); // 1

x = 2;
console.log(x); // 2
```

### const

Las variables ``const`` no pueden cambiar de valor.

```ts
const x = 1;
console.log(x); // 1

x = 2; // Uncaught TypeError: Assignment to constant variable.
```

Las variables ``const``, al asignarle un valor que sea tipo string, TypeScript entenderá que su tipo será su valor. Esto lo podemos comprobar haciendo hover sobre la variable. Sin embargo, al comprobar su ``typeof`` veremos que su tipo es ``string``.

```ts
const nombre = 'HerraHabibi'; // Al hacer hover su tipo es 'HerraHabibi'
console.log(typeof nombre); // 'string'
```

Si queremos que siempre muestre que su tipo es ``string`` podemos definir su tipo antes de asignarle un valor.

```ts
const nombre: string = 'HerraHabibi'; // Al hacer hover su tipo es 'string'
console.log(typeof nombre); // 'string'
```

### Tipado fuerte

En TypeScript no podemos cambiar el tipo de una variable.

```ts
let edad = 1;
console.log(x); // 1

edad = 'Hola!'; // Type 'string' is not assignable to type 'number'.
```

# Template String

Si queremos concatenar cadenas de texto que incluyan variables, podemos usar ``template strings`` y así no tendremos que concatenar con ``+``. Para ello, tenemos que usar backticks (`` ` ``) y para las variables usaremos un símbolo de dolar y entre llaves el nombre de la variable.

```ts
const nombre = 'HerraHabibi';
const oficio = 'programador';

console.log(`Me llamo ${nombre} y soy ${oficio}`); // Me llamo HerraHabibi y soy programador
```

# Objetos literales

Si definimos un objeto como ``const`` podemos cambiar los valores de sus propiedades

```ts
const persona = {
  nombre: 'HerraHabibi',
  oficio: 'programador'
};
console.log(persona); // { nombre: 'HerraHabibi', oficio: 'programador' }

persona.oficio = 'desarrollador';
console.log(persona); // { nombre: 'HerraHabibi', oficio: 'desarrollador' }
```

Esto se debe a que lo que es constante es el objeto al que apunta en memoria, no el objeto que contiene las propiedades.

```ts
const persona = {
  nombre: 'HerraHabibi',
  oficio: 'programador'
};

persona = {
  nombre: 'HerraHabibi',
  oficio: 'desarrollador'
}; // Uncaught TypeError: Assignment to constant variable.
```

### Clones de objetos

Uno de los errores más comunes a la hora de hacer un clon es hacer lo siguiente:

```ts
const persona1 = {
  nombre: 'Fernando',
  edad: 31
};

const persona2 = persona1;

persona2.nombre = 'Álex';
persona2.edad = 21;

console.log(persona1); // { nombre: 'Álex', edad: 21 }
console.log(persona2); // { nombre: 'Álex', edad: 21 }
```

Esto hará que ambos objetos apunten a la misma memoria, lo cual es un error y los valores de ambos objetos serán los mismos por mucho que los cambiemos.

<br>

Para evitar esto podemos hacer lo siguiente:

```ts
const persona1 = {
  nombre: 'Fernando',
  edad: 31
};

const persona2 = {...persona1};

persona2.nombre = 'Álex';
persona2.edad = 21;

console.log(persona1); // { nombre: 'Fernando', edad: 31 }
console.log(persona2); // { nombre: 'Álex', edad: 21 }
```

Esta solución tiene un problema y es que en caso de que si el objeto tiene propiedades que son objetos, no se podrán clonar.

```ts
const persona1 = {
  nombre: 'Fernando',
  vehiculos: {
    coche: 'Mazda',
    moto: 'Honda'
  }
};

const persona2 = {...persona1};

persona2.nombre = 'Álex';
persona2.vehiculos.coche = 'Opel';
persona2.vehiculos.moto = 'Yamaha';

console.log(persona1); // { nombre: 'Fernando', vehiculos: { coche: 'Opel', moto: 'Yamaha' } }
console.log(persona2); // { nombre: 'Fernando', vehiculos: { coche: 'Opel', moto: 'Yamaha' } }
```

<br>

Finalmente, para hacer un clon y evitar que todos estos problemas ocurran podemos hacer lo siguiente:

```ts
const persona1 = {
  nombre: 'Fernando',
  vehiculos: {
    coche: 'Mazda',
    moto: 'Honda'
  }
};

const persona2 = structuredClone(persona1);

persona2.nombre = 'Álex';
persona2.vehiculos.coche = 'Opel';
persona2.vehiculos.moto = 'Yamaha';

console.log(persona1); // { nombre: 'Fernando', vehiculos: { coche: 'Mazda', moto: 'Honda' } }
console.log(persona2); // { nombre: 'Álex', vehiculos: { coche: 'Opel', moto: 'Yamaha' } }
```