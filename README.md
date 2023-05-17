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
