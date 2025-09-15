const persona = {
  nombre: 'Alberto',
  apellido: 'Sánchez',
  edad: 23
};
console.log(persona);

persona.edad = 24;
console.log(persona);

// -------------------------

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

console.log(persona1); // { nombre: 'Fernando', vehiculos: { coche: 'Opel', moto: 'Yamaha' } }
console.log(persona2); // { nombre: 'Álex', vehiculos: { coche: 'Opel', moto: 'Yamaha' } }