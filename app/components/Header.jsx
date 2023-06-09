// By default all components in NextJS 13 are Server Components:
// so if we want to useState or useEffect we need to make it a client component with:
// "use client";

// import { useState } from "react";

// If we try to useState or useEffect without that, we get this error:
// You're importing a component that needs useState.
// It only works in a Client Component but none of its parents are marked with "use client",
// so they're Server Components by default.

import Link from "next/link";

const Header = () => {
  return (
    <header className="header-container">
      <Link href="/" className="header-logo-link">
        <img src="/images/next.svg" alt="" className="header-logo-image" />
        <h2 className="header-logo-title">Baz Next.js 13 Learning</h2>
      </Link>
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
          <li>
            <Link href="/emojis">Emojis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
