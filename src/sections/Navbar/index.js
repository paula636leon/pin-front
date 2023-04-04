import logo2 from "./images/logo2.png"

function Navbar(){
    return(
      <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <img src={logo2} alt="Logo"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><strong>Home</strong> <span class="sr-only"></span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#aboutUs"><strong>AboutUs</strong> <span class="sr-only"></span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#products"><strong>Products</strong><span class="sr-only"></span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#services"><strong>Services</strong> <span class="sr-only"></span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contact"><strong>Contact</strong> <span class="sr-only"></span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    )
};

export default Navbar;

//AL inspeccionar no se despliega el Navbar