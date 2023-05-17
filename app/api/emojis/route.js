// we have to import NextResponse
import { NextResponse } from "next/server";
// then we import the json file
import emojis from "./emojis.json";

export async function GET(request) {
  return NextResponse.json(emojis);
}

export async function POST(request) {
  // to get the req.body data in NextJS 13 we use :
  const requestBody = await request.json();
  // destructure the properties from the req.body
  const { character, unicodename } = requestBody;
  // console.log(character, unicodename);

  // the format of the req.body:
  // {
  //   "character": ":)",
  //   "unicodename": "smiley"
  // }

  const newEmoji = {
    character,
    unicodename,
  };

  // this is just a test, it's not persistent
  emojis.push(newEmoji);

  return NextResponse.json(emojis);
}
