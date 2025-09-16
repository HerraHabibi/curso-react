interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: {
    codigoPostal: string;
    calle: string;
  }
};

const persona1: Persona = {
  nombre: 'Alberto',
  apellido: 'Sánchez',
  edad: 23,
  direccion: {
    codigoPostal: '1234',
    calle: 'Calle Tulipán'
  }
};

const persona2: Persona = {
  nombre: 'Marta',
  apellido: 'Pérez',
  edad: 51,
  direccion: {
    codigoPostal: '5678',
    calle: 'Calle Amapola'
  }
};