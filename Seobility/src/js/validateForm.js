
export function validatePhone(phone, error) {
  const phoneRegex = /^(\+375 \(\d{2}\) \d{3}-\d{2}-\d{2})$/;
    const phoneInput = phone.value.trim();
    if (!phoneRegex.test(phoneInput)) {
      phone.style.borderColor = 'red';
      error.textContent = 'Некорректный номер';
      return false;
    } else {
      phone.style.borderColor = '';
      error.textContent = '';
      return true;
    }
}

export function validateName(name, error) {
    const nameInput = name.value.trim();
    if (nameInput === '') {
      name.style.borderColor = 'red';
      error.textContent = 'Имя не заполнено';
      return false
    } else {
      name.style.borderColor = '';
      error.textContent = '';
      return true
    }
}

export function validateEmail(email, error) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = email.value.trim();
    if (!emailRegex.test(emailInput)) {
      email.style.borderColor = 'red';
      error.textContent = 'Некорректный email';
      return false
    } else {
      email.style.borderColor = '';
      error.textContent = '';
      return true
    }
}

export function validateMessage(mess, error) {
    const messInput = mess.value.trim();
    if (messInput === '') {
      mess.style.borderColor = 'red';
      error.textContent = 'Ваш отзыв очень важен';
      return false
    } else {
      mess.style.borderColor = '';
      error.textContent = '';
      return true
    }
}


