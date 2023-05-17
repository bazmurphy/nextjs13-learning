import Link from "next/link";

export const metadata = {
  title: "Team - Next.js 13 Learning",
};

const TeamPage = () => {
  return (
    <div>
      <h1>Team Page</h1>
      <ul>
        <h2>Team Members</h2>
        <li>
          <Link href="/about/team/baz">Baz</Link>
        </li>
      </ul>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
        quae optio. Minima sed exercitationem rerum veniam, quos dolor eaque at
        voluptas eligendi dolorem sequi impedit. Expedita adipisci repellat
        veritatis quos?
      </p>
    </div>
  );
};

export default TeamPage;
