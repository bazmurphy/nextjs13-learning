export const metadata = {
  title: "Home - Next.js 13 Learning",
};

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1 className="page-title">Home Page</h1>
      <p>This is a project to learn the core features of Next.js 13.</p>
      <p>Please see the Code and Emoji pages 😎</p>
      <p>
        They are trying to represent the difference between Server Side
        Components and Client Side Components
      </p>
    </div>
  );
};

export default HomePage;
