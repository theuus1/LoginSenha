let usuario = [];

let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let confSenha = document.querySelector('#confirmasenha');

document.querySelector("button").addEventListener(
    "click", (e) => {
        e.preventDefault();//BLOQUEAR O CARREGAMENTO DA PÁGINA
        if (email.value === "" || senha.value === "" || confSenha.value === "") {
            alert("Preencha os campos");
        } else if (senha.value !== confSenha.value) {
            alert("senhas diferentes");
        } else {
            //CRIAR OBJET 
            let user = {
                email: email.value,
                senha: senha.value 
            }
            
            usuario = dadosLocal();
            usuario.push(user)
            //COLOCOU NO LOCALSTORANGE
            localStorage.setItem("chaves", JSON.stringify(usuario));
            alert("conta criada com sucesso!")
            alert("Redirecionando para login");
            //FUNCAO DO DOM DE REDIRECIONAMENTO
            window.location.href = "index.html"
        }

    }

);

//CRIAR UMA FUNÇAO PRA VERIFICAR SE O MEU LOCALSTORANGE ESTA VAZIO
 const dadosLocal = () => {
    //ESTOU TRAZENDO DADOS DO LOCALSTORANGE  MAS CONVERTENDO EM UMA OBJETO DO TIPO VETOR
    let dados =  JSON.parse(localStorage.getItem("chaves") || '[]');
    return dados;
 }

