import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

// we want to fetch the individual repo
// and so we are going to need the name of the repo
// we will EMBED that in the page.jsx
// so we will have the "name" prop available to send here

// [3] using this function
async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/bazmurphy/${name}`
  );
  const data = await response.json();
  return data;
}

// [1] we make the Repo component (it must be ASYNC to allow the fetch)
const Repo = async ({ name }) => {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  // [2] we fetch the repo data
  const repo = await fetchRepo(name);
  // in the ide console it is giving us the specific repository
  console.log(repo);

  return (
    <div className="repo-card-container">
      <h2 className="repo-card-name">{repo.name}</h2>
      <p className="repo-card-description">description: {repo.description}</p>
      <div className="repo-card-details">
        <div className="repo-card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="repo-card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="repo-card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
