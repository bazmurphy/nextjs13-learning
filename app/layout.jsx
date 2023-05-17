import "./globals.css";

import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";

// we create an instance of the font
// which can we then reference in the body below using the .className property
const poppins = Poppins({
  // we can optionally specify the different weights
  weight: ["400", "500", "600", "700", "800"],
  // we MUST provide a subset
  subsets: ["latin"],
});

// another example:
const openSans = Open_Sans({
  subsets: ["latin"],
});

// this is all the metadata we can add:
export const metadata = {
  title: "Next.js 13 Learning",
  description: "Learning Next.js 13",
  keywords: "web development, javascript, react, node",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className="main-container">{children}</main>
      </body>
    </html>
  );
}
