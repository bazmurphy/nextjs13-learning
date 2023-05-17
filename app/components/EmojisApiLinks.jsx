// the app/emojis/page is a Client Component so ALL CHILDREN MUST ALSO BE
"use client";

import Link from "next/link";

const EmojisApiLinks = () => {
  return (
    <div className="emojis-api-container">
      <h3 className="page-subtitle">API Examples:</h3>
      <div className="emojis-api-links">
        <Link href={`/api/emojis`} target="_blank">
          /api/emojis
        </Link>
        <Link href={`/api/emojis/search?name=smiling`} target="_blank">
          /api/emojis/search?name=smiling
        </Link>
        {/* <Link
          href={`/api/emojis/search?name=smiling&subGroup=affection`}
          target="_blank"
        >
          /api/emojis/search?name=smiling&subGroup=affection
        </Link> */}
      </div>
    </div>
  );
};

export default EmojisApiLinks;
