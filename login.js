document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const enteredCode = document.getElementById('code').value;
    const correctCode = '1н2пкшшзЗЩЫВШАЗЩльЗУГшй0Ы9АГ029кш019кшЗЩЦОА2ещзо;LKDPOI0D9IE-0-09-0eikfpofjiohejIOHR38ryhiufhdsfjkgHLKEJEWR392P[posf[pdkgoj3OIOIQFIOq[fo[pof[pgopog[pqwofpoi3opqoiJFDSKLgjLKGJLKsjgKLGJSDLKGJDSLGKJeklgjew3ioru3ORIEWufijokewgjEWDGLKJdslGNDLKGJGELKWGJLEW32OIUSPOGIEWPOGIWPOGJDSGLDSKGDSKLGJgk;lsdjgDSHEWKJHewjkrhJRHKJ32HRKL32jhrKJHTK3JLHRL32KJThKJWDHwlkjhwekjrHKJRH3iuyh2kjhkJ3H2kjhKJHwkjghEWKJGHkljsdfklsdjfelkH;KLJR3lkjr2KLRJlkhKJWFsdjfhSDJKFHSDFKLjshfkjSGHkjghejwkh3k;lrjLKRJ2LJ2LKR3Jlkrjkl3jlkjLKJLDKFJlkjLKJLKJljklsjflkJLKJFSLDKJFSDLKJjdlfjfdlkj32jeifoj'; // Замените 'your_secret_code' на ваш секретный код

    if (enteredCode === correctCode) {
        localStorage.setItem('accessCode', enteredCode); // Сохранение кода доступа в localStorage
        window.location.href = 'osn.html'; // Перенаправление на главную страницу после успешного ввода кода
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
