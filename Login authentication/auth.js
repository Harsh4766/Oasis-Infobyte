document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const secureContainer = document.getElementById('secure-container');
    const authContainer = document.getElementById('auth-container');
    const logoutBtn = document.getElementById('logout-btn');
    const toggleLoginBtn = document.getElementById('toggle-login-btn');

    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');

    toggleLoginBtn.addEventListener('click', function() {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
        toggleLoginBtn.style.display = 'none'; 
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById('reg-username').value="";
        document.getElementById('reg-password').value="";
        registerContainer.style.display='none';
        loginContainer.style.display='block';
        toggleLoginBtn.style.display='none';
        alert('Registration successful. You can now log in.');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        document.getElementById('login-username').value="";
        document.getElementById('login-password').value="";

        if (username === storedUsername && password === storedPassword) {
            authContainer.style.display = 'none';
            secureContainer.style.display = 'block';
        } else {
            alert('Invalid username or password.');
        }
    });

    logoutBtn.addEventListener('click', function() {
        authContainer.style.display = 'block';
        secureContainer.style.display = 'none';
        registerContainer.style.display = 'block';
        loginContainer.style.display = 'none';
        toggleLoginBtn.style.display = 'block';
    });
});
