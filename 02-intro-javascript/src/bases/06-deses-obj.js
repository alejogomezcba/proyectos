
const persona = {
    nombre: "Alejo",
    apellido: "Gomez",
    usuario: "quetim",
    edad: 36,
  };
  
  const persona2 = {
    nombre: "Alejo",
    apellido: "Gomez",
    usuario: "quetim",
    edad: 36,
    rango: "capitan"
  };
  
  const { nombre, apellido, usuario, edad, rango } = persona;
  
  const retornaPersona = (usuario) => {
    const { nombre, apellido } = usuario;
    console.log(nombre, apellido);
  };
  
  const retornaPersona2 = ({ nombre, rango }) => {
    console.log(nombre, rango);
  };
  
  const retornaPersona3 = ({ nombre, apellido, rango = "soldado" }) => {
    console.log(nombre, apellido, rango);
  };
  retornaPersona(persona);
  retornaPersona2(persona2);
  retornaPersona3(persona);
  
  const returnUser = ({ usuario, nombre, apellido, edad, notas }) => {
    return {
      getUsuario: usuario,
      getEdad: edad,
      notas: {
          matematica: 10,
          ingles: 10,
          lengua: 8,
          geografia: 7,
        },
    };
  };
  const getUser = returnUser(persona2);
  console.log(getUser);
  
  const { getUsuario, getEdad, notas: {matematica, ingles} } = getUser;
  console.log(`Usuario: ${getUsuario}, Edad: ${getEdad}, Nota matematica: ${matematica}, Nota ingles:${ingles}`);
  