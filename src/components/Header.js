import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="Medal badge with a star" />
      <h1>Sense, Analyze, Succeed</h1>
      <p>Unleash the Power of AI Analytics for Your Store's Success</p>
    </header>
  );
}

export default Header;
