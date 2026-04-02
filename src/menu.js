export function createMenu() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <nav class="navbar">
      <ul class="nav-links">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="activites.html">Activités</a></li>
        <li><a href="agenda.html">Agenda</a></li>
        <li><a href="logements.html">Logements</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  `;
  document.body.prepend(header);
}
