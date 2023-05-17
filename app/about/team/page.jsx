import Link from "next/link";

export const metadata = {
  title: "Team - Next.js 13 Learning",
};

const TeamPage = () => {
  return (
    <div className="team-page-container">
      <h1 className="page-title">Team Page</h1>
      <p>This is to test nested routes, this is the second level.</p>
      <h2 className="page-subtitle">Team Members</h2>
      <ul className="team-members-list">
        <li>
          <Link href="/about/team/baz" className="team-member-link">
            Baz
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamPage;
