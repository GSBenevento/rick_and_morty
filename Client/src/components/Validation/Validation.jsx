const validation = (userData) => {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)/;

  if (!emailRegex.test(userData.email)) {
    errors.email = 'El email no es valido';
  }
  if (!userData.email) {
    errors.email = 'Debe ingresar un email';
  }
  if (userData.email.length > 35) {
    errors.email = 'El email no debe superar los 35 caracteres';
  }
  if (passwordRegex.test(userData)) {
    errors.password = 'La contraseña debe tener al menos un numero';
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      'La contraseña debe tener un tamaño entre 6 a 10 caracteres';
  }

  return errors;
};

export default validation;
