function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if (!email.includes('@')) alert('Нет символа @');
    else if (!email.includes('.')) alert('Нет символа .');
    else alert('Пасяба за регистрацию!😄');
}