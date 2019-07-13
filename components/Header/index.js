import Logo from "../../static/logo.svg";
import Link from "next/Link";
import "./index.scss";

const Header = ({ currentRoute }) => {
  const pages = [
    { route: "/", title: "About" },
    { route: "/projects", title: "Projects" },
    { route: "/blog", title: "Blog" }
  ];

  const isRoute = route => {
    const dirs = route.split('/').slice(1);
    const currentDirs = currentRoute.split('/').slice(1);
    return dirs
      .some(dir => currentDirs.some(currentDir => currentDir === dir))
  }

  return (
    <header className="main-header">
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <nav>
        {pages.map(page => (
          <Link href={page.route} key={page.title}>
            <a className={isRoute(page.route) ? "selected" : ""}>
              {page.title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
