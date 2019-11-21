import Logo from "../../static/logo.svg";
import Link from "next/link";
import HamburgerIcon from "./hamburger-icon";
import "./index.scss";

const Header = ({currentRoute}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  let drawer = React.useRef();

  const setScrollTo = enable => {
    document.querySelector("body").style.overflow = enable ? "" : "hidden";
  };

  React.useEffect(() => {
    setScrollTo(!isOpen);
    return () => setScrollTo(true);
  }, [isOpen]);

  const pages = [
    {route: "/", title: "About"},
    {route: "/projects", title: "Projects"},
    {route: "/blog", title: "Blog"},
    {route: "/reads", title: "Reads"},
  ];

  const isRoute = route => {
    const dirs = route.split("/").slice(1);
    const currentDirs = currentRoute.split("/").slice(1);
    return dirs.some(dir => currentDirs.some(currentDir => currentDir === dir));
  };

  const pressOutside = e => {
    if (!drawer.current) return;
    if (drawer.current.contains(e.target)) return;
    if (isOpen) setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", pressOutside, false);
    document.addEventListener("touchstart", pressOutside, false);
    return () => {
      document.removeEventListener("mousedown", pressOutside, false);
      document.removeEventListener("touchend", pressOutside, false);
    };
  });

  return (
    <header className="main-header">
      <Link href="/">
        <a className="logo" aria-label="SVG Website Logo">
          <Logo />
        </a>
      </Link>
      <nav>
        <div ref={drawer} className={"drawer" + (isOpen ? "" : " closed")}>
          {pages.map(page => (
            <Link href={page.route} key={page.title}>
              <a className={isRoute(page.route) ? "selected" : ""}>
                {page.title}
              </a>
            </Link>
          ))}
        </div>
        <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </nav>
    </header>
  );
};

export default Header;
