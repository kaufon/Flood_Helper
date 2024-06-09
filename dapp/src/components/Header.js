export default function Header(){
  return(
        <header className="p-3 text-bg-dark">

        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a href="/" className="justify-content-center" style={{ textDecoration: "none" }}>
              <h1 className="fw-bold text-light">Flood Help</h1>
            </a>
            <div className="text-end col-9">
              <button className="btn btn-outline-light me-2">
                <img src="/metamask.svg" width="24" className="me-3" alt="metamask" />
                Enter
              </button> 
              <a href="/create" className="btn btn-warning">Pedir Ajuda</a>
            </div>
          </div>
        </div>
      </header>

  )


}
