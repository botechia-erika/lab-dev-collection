
let partial00A = `
    <nav class="menu" id="idMenu">
      <label for="#">BRA-DEV<img src="../img/logo.png" alt="logo libretaPET" class="logoBrand"></label>
      <ul class="menu__item ">
        <li class="item"><a href="../bra-dev/index.html" class="link-item">Home</a></li>
        <li class="item"><a href="../bra-dev/cursos.html" class="link-item">Cursos</a></li>
        <li class="item"><a href="../copa-dev/torneio.html" class="link-item">COPA DEV</a></li>
        <li class="item"><a href="../bra-dev/contato.html" class="link-item">Contacto</a></li>
        <li class="item"><a href="../bra-dev/matricula.html" class="link-item">Matriculas</a>
        </li>
        <li class="item"><a href="../login/log-1.html" class="link-item">Login</a></li>
      </ul>

      <buton class="btn__menu" id="buttonMenu">
        <i class="fa fa-bars"></i>
      </buton>
    </nav>
`
let partial00B = `

<footer class="fixed2">
  <p>&copy MADE BY <a href="https://github.com/botechia-erika" target="_blank">@Erika-Botechia</a></p>
</footer>
`
addEventListener('DOMContentLoaded', () => {

  let id00 = document.getElementById('id00A')
  let id01 = document.getElementById('id00B')
  id00.innerHTML += partial00A;
  id01.innerHTML += partial00B;

})


addEventListener('DOMContentLoaded', () => {
  let x = document.querySelector('#id00A')
  let y = document.querySelector('.menu__item')

  x.addEventListener('click', () => {
    if (y.style.display === "inline-block") {

      y.style.display = "none";
    } else {
      y.style.display = "inline-block";
    }
  })

})    
