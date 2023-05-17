export async function GET(request) {
  return new Response("Hello from /api/hello via GET");
}

export async function POST(request) {
  return new Response("Hello from /api/hello via POST");
}
