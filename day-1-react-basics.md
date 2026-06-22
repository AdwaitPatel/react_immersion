# Day 1 React Basics

Install `React` with `Vite` :

```bash
npm create vite@latest <folder_name>
```

### Component Rules

- Self Closing Tag (<App />)
- Always starts with Capital letter

### Types of Components

- Class Components (Initally when made)
- Functional Components

```jsx
const App = () => {
  return (
    <>
      <h1 style={{ marginTop: "300px" }}>React setup is done</h1>
    </>
  );
};
```

### Difference b/w Component and Function

- Component : Returns a jsx or HTML

```js
const App = () => {
  return (
    <>
      <h1 style={{ marginTop: "300px" }}>React setup is done</h1>
    </>
  );
};
```

- Function : Returns anything other than jsx or HTML

```js
const sum = (a, b) => {
  return a + b;
};
```

### Props

Why we need props?

- To pass data from parent component to child component
- To make components dynamic
