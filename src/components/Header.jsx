const Header = () => {
  return (
    <header className="flex gap-2">
      <a href="">Aleko Sokurashvili</a>
      <nav className="flex">
        <ul className="hidden gap-2 xl:flex">
          <li>
            <a href="">Structure</a>
          </li>
          <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Benefits</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <select name="" id="">
          <option value="">EN</option>
          <option value="">UA</option>
        </select>
        <button className="hidden xl:block">Buy with discount</button>
        <button className="xl:hidden">=</button>
      </nav>
    </header>
  );
};
export default Header;
