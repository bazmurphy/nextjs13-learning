// we can create a LoadingPage
// so when it is fetching the data but not ready it will automatically show the loading page until its complete

// the file name MUST be loading.jsx
// but the component function name CAN BE ANYTHING

// we don't have to bring in useState and isLoading(true)
// fetch and then set it back to isLoading(false)

// if its a Server Component and you are fetching data
// and you have that loading.jsx with a loading component it WILL DISPLAY

import React from "react";

const LoadingPage = () => {
  return <div className="loading-message">Loading...</div>;
};

export default LoadingPage;
