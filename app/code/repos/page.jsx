import Link from "next/link";

// we import individual font awesome icons from react-icons
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/bazmurphy/repos?sort=updated&per_page=20",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  // enforce a wait of 0.5 seconds to test "loading.jsx"
  await new Promise((resolve) => setTimeout(resolve, 500));
  const data = await response.json();
  return data;
}

// we must make this component asynchronous because it needs to use the function above
const ReposPage = async () => {
  // here we call the function from above and await the return;
  const repos = await fetchRepos();
  // REMEMBER this a Server Component, so look in the vscode terminal, and NOT in the browser console
  console.log(repos);

  return (
    <div className="repos-page-container">
      <h1 className="page-title">Repositories Page</h1>
      <p>
        This is to test Server Side Components, working with Suspense Boundaries
        and Revalidating, whilst working with External APIs...
      </p>
      <ul className="repos-list">
        {repos.map((repo) => {
          return (
            <li key={repo.id} className="repo-card-list-item">
              <Link
                href={`/code/repos/${repo.name}`}
                className="repo-card-link"
              >
                <h3 className="repo-card-name">{repo.name}</h3>
                <p className="repo-card-description">
                  description: {repo.description}
                </p>
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReposPage;
