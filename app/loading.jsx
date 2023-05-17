// we can create a LoadingPage
// so when it is fetching the data but not ready it will automatically show the loading page until its complete

// the file name MUST be loading.jsx
// but the component function name CAN BE ANYTHING

import React from "react";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;
