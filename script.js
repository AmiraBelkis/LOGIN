/*--------------Swap Tabs--------------------*/
function swap(referTo) {
    if (referTo.getAttribute('data-tab') == 'login') {
        document.getElementById('form-body').classList.remove('active');
        referTo.parentNode.classList.remove('signup');
        document.getElementsByClassName('singup-tab')[0].style = " background: whitesmoke;";
        document.getElementsByClassName('login-tab')[0].style = " background: transparent;";
        document.title = "LOGIN";
    } else {
        document.getElementById('form-body').classList.add('active');
        referTo.parentNode.classList.add('signup');
        document.getElementsByClassName('singup-tab')[0].style = " background: transparent;";
        document.getElementsByClassName('login-tab')[0].style = " background: whitesmoke ;";
        document.title = "SINGUP";
    }
}