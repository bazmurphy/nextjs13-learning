import Link from "next/link";
import Emojis from "../components/Emojis";

const EmojisPage = () => {
  return (
    <div className="emojis-container">
      <h1 className="page-title">Emojis</h1>
      <div className="emojis-api-container">
        <h3 className="page-subtitle">API Examples:</h3>
        <div className="emojis-api-links">
          <Link href={`${NEXT_PUBLIC_API_URL}/emojis`} target="_blank">
            /api/emojis
          </Link>
          <Link
            href={`${NEXT_PUBLIC_API_URL}/emojis/search?name=smiling`}
            target="_blank"
          >
            /api/emojis/search?name=smiling
          </Link>
          <Link
            href={`${NEXT_PUBLIC_API_URL}/emojis/search?name=smiling&subGroup=affection`}
            target="_blank"
          >
            /api/emojis/search?name=smiling&subGroup=affection
          </Link>
        </div>
      </div>
      <Emojis />
    </div>
  );
};

export default EmojisPage;
