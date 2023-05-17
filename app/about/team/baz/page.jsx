import React from "react";

export const metadata = {
  title: "Baz - Next.js 13 Learning",
};

const BazPage = () => {
  return (
    <div className="baz-page-container">
      <h1 className="page-title">Baz Page</h1>
      <p>This is to test nested routes, this is the third level.</p>
    </div>
  );
};

export default BazPage;
