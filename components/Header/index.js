import Logo from "../../static/logo.svg";
import Link from "next/Link";
import "./index.scss";

const Header = ({ currentRoute }) => {
  const pages = [
    { route: "/", title: "About" },
    { route: "/projects", title: "Projects" },
    { route: "/blog", title: "Blog" }
  ];

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
            <a className={page.route === currentRoute ? "selected" : ""}>
              {page.title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
