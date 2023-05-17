// to handle the suspense boundaries we import Suspense and then wrap the relevant components
import { Suspense } from "react";

import Link from "next/link";
import { FaBackward } from "react-icons/fa";

// [4] now we import the Repo Component (the @ is the IMPORT ALIAS because its a few levels deep)
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

// this is how we build dynamic routes
// we pass in a prop of { params }
// we destructure the params object further to pull out name

const RepoPage = ({ params: { name } }) => {
  console.log(name);
  return (
    <div className="repo-page-container">
      <Link href="/code/repos" className="repo-page-back">
        <FaBackward /> Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repository details...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading repository directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
