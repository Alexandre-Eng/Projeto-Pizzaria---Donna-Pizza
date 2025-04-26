document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const pedido = document.getElementById('pedido').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá Dona Pizza!%0ARecebi um feedback:%0A🧑 Nome: ${nome} ${sobrenome}%0A📧 Email: ${email}%0A📝 Assunto: ${assunto}%0A📦 Pedido: ${pedido}%0A💬 Mensagem: ${mensagem}`;
    const url = `https://wa.me/5571987483645?text=${texto}`;

    window.open(url, '_blank');
  });

const modo = document.getElementById('botao-tema')

  modo.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});