import logo from "../assets/logo.svg";

const NavBar1 = () => {
  return (
    <nav className="nav-items">
      <a href="#">
        <img src={logo} alt="logo" className="pl-8 h-24 w-24" />
      </a>

      <ul className="ul-list-2">
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
};

const NavBar2 = () => {
  return (
    <nav className="nav-items">
      <h1 className="text-2xl pl-8">Buds</h1>

      <ul className="ul-list-2"
>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Spec</a>
        </li>
        <li>
          <button className="btn">
            Buy Now
          </button>
        </li>
      </ul>
    </nav>
  );
};

const NavBar = () => {
  return (
    <div className="bg-half_white uppercase">
      <NavBar1 />
      <NavBar2 />
    </div>
  );
};

export default NavBar;
