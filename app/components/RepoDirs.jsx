import Link from "next/link";

// in this component we will DELIBERATELY make the fetch take LONGER
// to demonstrate what the SUSPENSE BOUNDARY does

// when we go to load the /codes/repos/[name] routes
// it will make us wait 3 seconds (even though the other fetch happens sooner)
// because it STAYS IN THE LOADING STATE UNTIL EVERYTHING IS FETCHED

async function fetchRepoContents(name) {
  // wait 3 seconds before it gives us the data
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/bazmurphy/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await response.json();
  return data;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  console.log(contents);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div className="repo-dirs-container">
      <h3 className="repo-dirs-title">Directories</h3>
      <ul className="repo-dirs-list">
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              href={`/code/repos/${name}/${dir.path}`}
              className="repo-dirs-link"
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
