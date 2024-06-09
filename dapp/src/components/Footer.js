export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center border-top m-5">
      <p className="col-4 mb-0 text-body-secondary">
        &copy; 2024 Kauan Fonseca inc.
      </p>
      <ul className="nav col-4 justify-content-end">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-secondary">
            Ajudar
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link px-4 text-body-secondary">
            Pedir Ajuda
          </a>
        </li>
      </ul>
    </footer>
  );
}
