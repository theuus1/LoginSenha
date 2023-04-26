let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
 let listUser = [];

document.querySelector('button').addEventListener("click",(e) => {
    e.preventDefault();
    let valid = {
        login: " ",
        senha: " "
    }
    listUser = JSON.parse(localStorage.getItem("chaves"));
    
    listUser.forEach(element => {
        if (email.value === element.email && senha.value === element.senha) {
            valid = {
                login: element.email,
                senha: element.senha
            }
            alert('REDIRECIONANDO...');
            window.location.href = "dash.html"
        }
    });
})



//const dadosLocal = (email, senha) => {
    //ESTOU TRAZENDO DADOS DO LOCALSTORANGE  MAS CONVERTENDO EM UMA OBJETO DO TIPO VETOR
   // let dados =  JSON.parse(localStorage.getItem("chaves"));
//  let i = 0;
//   while (dados.length > i) {
//        if (dados[i].email === email.value && dados[i].senha === senha.value){
  //          window.location.href = "dash.html"
    //            
      ///  }
        //i++;
    // }
    
 //}
