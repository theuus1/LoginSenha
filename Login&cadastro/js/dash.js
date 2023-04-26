const voltar = document.getElementById("sair");

voltar.addEventListener("click", function() {
	window.location.href = "index.html";
});
const salvarBotao = document.getElementById('salvar');
const tabela = document.querySelector('table tbody');

salvarBotao.addEventListener('click', function(event) {
  event.preventDefault();

  const tituloInput = document.getElementById('titulo');
  const descricaoInput = document.getElementById('descrição');

  const novaLinha = document.createElement('tr');

  const tituloCelula = document.createElement('td');
  tituloCelula.style.width = `${tituloInput.value.length * 10}px`; 
  tituloCelula.innerHTML = `
    <h4>${tituloInput.value}</h4>
    <input type="text" style="display:none;">
    <button class="editar">editar</button>
    <button class="salvar" style="display:none;">salvar</button>
  `;
  novaLinha.appendChild(tituloCelula);

  const descricaoCelula = document.createElement('td');
  descricaoCelula.style.width = `${descricaoInput.value.length * 10}px`;
  descricaoCelula.innerHTML = `
    <h4>${descricaoInput.value}</h4>
    <input type="text" style="display:none;">
    <button class="editar">editar</button>
    <button class="salvar" style="display:none;">salvar</button>
  `;
  novaLinha.appendChild(descricaoCelula);

  const botaoCelula = document.createElement('td');
  botaoCelula.innerHTML = '<button class="deletar">deletar</button>';
  novaLinha.appendChild(botaoCelula);

  tabela.appendChild(novaLinha);

  tituloInput.value = '';
  descricaoInput.value = '';

  const editarBotoes = document.querySelectorAll('.editar');
  const salvarBotoes = document.querySelectorAll('.salvar');

  for (let i = 0; i < editarBotoes.length; i++) {
    editarBotoes[i].addEventListener('click', function() {
      const h4 = this.parentElement.querySelector('h4');
      const input = this.parentElement.querySelector('input[type="text"]');
      const salvarBotao = this.parentElement.querySelector('.salvar');
      h4.style.display = 'none';
      input.value = h4.textContent;
      input.style.display = 'inline';
      this.style.display = 'none';
      salvarBotao.style.display = 'inline';
    });
  }

  for (let i = 0; i < salvarBotoes.length; i++) {
    salvarBotoes[i].addEventListener('click', function() {
      const h4 = this.parentElement.querySelector('h4');
      const input = this.parentElement.querySelector('input[type="text"]');
      const editarBotao = this.parentElement.querySelector('.editar');
      h4.textContent = input.value;
      h4.style.display = 'inline';
      input.style.display = 'none';
      this.style.display = 'none';
      editarBotao.style.display = 'inline';
    });
  }

  const deletarBotoes = document.querySelectorAll('.deletar');

  for (let i = 0; i < deletarBotoes.length; i++) {
    deletarBotoes[i].addEventListener('click', function() {
      this.parentElement.parentElement.remove();
    });
  }
});
