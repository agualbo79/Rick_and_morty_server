export const validate = (userData) => {
    const errors = {};
  
    // Validar email
    if (!userData.email) {
      errors.email = 'El email es obligatorio';
    } else if (userData.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
      errors.email = 'El email no es válido';
    }
  
    // Validar contraseña
    if (!/\d/.test(userData.password)) {
      errors.password = 'La contraseña debe tener al menos un número';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
  
    return errors;
  };
  