'use strict';

const container = () => document.getElementById('teste');
const renderComponenteItem = (cliente, empresa, nome) => {
  container().innerHTML += `

      <article>
        <header><h3>${cliente}</h3></header>
        <section>
          <p>
            ${empresa}
          </p>
        </section>
        <footer>${nome}</footer>
      </article>

  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const txtTitulo = document.getElementById('cliente');
  const txtDescricao = document.getElementById('empresa');
  const txtNome = document.getElementById('nome');

  const btnSalvar = document.querySelector('#salvar');

  btnSalvar.addEventListener('click', (evt) => {
    evt.preventDefault();

    const cliente = txtTitulo.value;
    const empresa = txtDescricao.value;
    const nome = txtNome.value;

    renderComponenteItem(cliente, empresa, nome);
 

  });  
});