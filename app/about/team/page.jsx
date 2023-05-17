import Link from "next/link";

export const metadata = {
  title: "Team - Next.js 13 Learning",
};

const TeamPage = () => {
  return (
    <div class="team-page-container">
      <h1 className="page-title">Team Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        voluptate non, excepturi fugiat vel officia sit repudiandae fuga?
        Adipisci deleniti, unde consectetur placeat ut reprehenderit incidunt
        quaerat soluta tempore. Tenetur!
      </p>
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
