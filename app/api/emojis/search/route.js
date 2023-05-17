import { NextResponse } from "next/server";
import emojis from "../emojis.json";

export async function GET(request) {
  // this will have ANY query paramters that we pass in the URL
  const { searchParams } = new URL(request.url);

  console.log(request.url);
  // http://localhost:3000/api/emojis/search?name=smiling
  console.log(searchParams);
  // URLSearchParams { 'name' => 'smiling' }

  // we need to use the searchParams .get method to get the correct searchParam
  console.log(searchParams.get("name"));
  // smiling

  // if you have multiple searchParams you can do:
  // http://localhost:3000/api/emojis/search?name=smiling&subGroup=affection
  // URLSearchParams { 'name' => 'smiling', 'subGroup' => 'affection' }
  console.log(searchParams.get("subGroup"));
  // affection

  // get the search parameter
  const unicodeName = searchParams.get("name");
  // filter the original json
  const filteredEmojis = emojis.filter((emoji) => {
    return emoji.unicodeName.toLowerCase().includes(unicodeName.toLowerCase());
  });
  // return the filtered results
  return NextResponse.json(filteredEmojis);
}
