function logar(){

    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if(login == "admin" && senha == "admin"){
        alert('sucesso');
        location.href = "home.html";
    }
    else{
        alert('Usuario ou senha incorreta')
    }
}