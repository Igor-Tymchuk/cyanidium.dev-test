const Header = () => {
  return (
    <header className="flex gap-2">
      <a href="" className="uppercase font-sansation">
        Aleko{" "}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sokurashvili
        </span>
      </a>
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
        <button className="hidden xl:block">Buy at a discount</button>
        <button className="xl:hidden">=</button>
      </nav>
    </header>
  );
};
export default Header;
