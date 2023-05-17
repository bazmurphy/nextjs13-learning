// we can use the metadata api in each individual page if we want
// but this will only show on this SPECIFIC page IT DOES NOT TRICKLE DOWN to sub-routes(pages)
export const metadata = {
  title: "About - Next.js 13 Learning",
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem
        labore quod atque debitis similique at obcaecati modi provident eaque
        aliquid architecto rerum natus facere voluptate, dignissimos tempore
        omnis qui.
      </p>
    </div>
  );
};

export default AboutPage;
