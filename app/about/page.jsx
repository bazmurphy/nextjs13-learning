// we can use the metadata api in each individual page if we want
// but this will only show on this SPECIFIC page IT DOES NOT TRICKLE DOWN to sub-routes(pages)
export const metadata = {
  title: "About - Next.js 13 Learning",
};

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1 className="page-title">About Page</h1>
      <p>This is to test nested routes, this is the first level.</p>
    </div>
  );
};

export default AboutPage;
