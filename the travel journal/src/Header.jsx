import globe from "./images/globe.png";
function Header() {
  return (
    <header>
      <img src={globe} alt="globe" />
      <h1>Personal Travel Journal</h1>
    </header>
  );
}
export default Header;
