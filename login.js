document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const enteredCode = document.getElementById('code').value;
    const correctCode = '1234'; // Замените 'your_secret_code' на ваш секретный код

    if (enteredCode === correctCode) {
        localStorage.setItem('accessCode', enteredCode); // Сохранение кода доступа в localStorage
        window.location.href = 'osn.html'; // Перенаправление на главную страницу после успешного ввода кода
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
