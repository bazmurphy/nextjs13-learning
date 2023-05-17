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
