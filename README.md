# NextJS 13 Learning

`npx create-next-app@latest`

optional: `npm install react-icons` to allow use of fontawesome icons

## React Server Components

### Advantages:

- Load faster - Don't have to wait for the JavaScript to load
- Smaller client size bundle
- SEO friendly
- Access to resources the client can't access
- Hide sensitive data from the client
- More secure against XSS attacks
- Improved developer experience

### Disadvantages:

- Not as interactive
- No component state. We cannot use the `useState` hook
- No component lifecycle methods. We canot use the `useEffect` hook

## Suspense Boundaries:

Suspense Boundaries allows us to have certain loaders or certain placeholders for certain components that fetch data

In relation to `/code/repos/[name]` routes
with repo details `components/Repo.jsx`
and repo directories `components/RepoDirs.jsx`

We will fetch 2 things:

1. the regular details
2. the directories in the repository

And HAVE THEM LOAD AT DIFFERENT TIMES to demonstrate Suspense Boundaries

There is a `<Suspense>` wrapper you can apply to elements if they take time to load/fetch

## Cacheing and Revalidating

By default in your production build, fetch will cache everything indefinitely
This is great for per formance but it can cause issues if what you are fetching changes often
In previous versions of NextJS there was `getStaticProps` and `getServerSideProps`
`getStaticProps` was for a static website where data isn't really changing
`getServerSideProps` would fetch at every single request, and that is good for data that was changing very often

We don't those options. We use `fetch` no matter what. But there is an option called `revalidate`
And it tells NexJS **how often** to check for new data

To the fetch, as the second parameter, inside the object, we add a property `next` and then a sub-property `revalidate` and that is the number of seconds that we want to wait until it fetches FRESH data

```
const response = await fetch("url here", {
  next: {
    revalidate: 60
  }
})
```

## API Route Handlers

Allow you to create custom request handlers for a given route
Instead of having a backend Express API in many cases you can keep it within your folder structure
This is where the `/app/api` folder comes into play
Also you CAN have route handlers within your page routes, it doesn't have to be within the `/app/api` folder
But if you put it in there the route will be prefixed with `/api`

You make a subfolder in `/api` for example `/api/hello` and in there you create a `route.js` file and then you can write a function:

```
export async function GET(request) {
  return new Response("Hello!");
}
```

And when we visit `http://localhost:3000/hello/api`
We get back a response of `200` with a `json` body of `"Hello!"`

with past NextJS version you would call that function handler, but in NextJS13 you call the function WHATEVER METHOD we want in this case `GET`
If you change it to `POST` the `GET` above will no longer work.

```
export async function GET(request) {
  return new Response("Hello from /api/hello via GET");
}

export async function POST(request) {
  return new Response("Hello from /api/hello via POST");
}
```
