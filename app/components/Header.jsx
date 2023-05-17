import Link from "next/link";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <Link href="/" className="header-logo">
          Next.js 13 Learning
        </Link>
      </div>
      <nav className="header-nav-container">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/team">Team</Link>
          </li>
          <li>
            <Link href="/code/repos">Code</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
