const form = document.getElementById("signInForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Имя: ${username}`);
    console.log(`Пароль: ${password}`);
})