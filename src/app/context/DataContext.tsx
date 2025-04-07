"use client";

import { createContext, useState, ReactNode } from "react";

// Define types for data
interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
  slug: string;
  content: {
    introduction: string;
    mainContent: string;
    conclusion: string;
  };
}

// Sample data
const initialBlogs: Blog[] = [
  {
    id: 1,
    title: "Mastering React Hooks: A Comprehensive Guide",
    image: "/images/react-hooks.jpg",
    description:
      "Deep dive into React hooks, from useState to useEffect, custom hooks, and performance optimization techniques that make your React code cleaner and more efficient.",
    date: "January 10, 2022",
    slug: "mastering-react-hooks",
    content: {
      introduction:
        "In this post, we will explore React hooks in depth, including useState, useEffect, and custom hooks. React hooks help manage state and side effects in functional components, making code simpler and more readable.",
      mainContent:
        "React introduced hooks in version 16.8 to allow functional components to manage state and side effects, previously possible only in class components. The most commonly used hooks are useState, useEffect, and custom hooks. UseState allows you to manage state variables, while useEffect manages side effects like fetching data, subscriptions, or DOM updates.",
      conclusion:
        "By mastering React hooks, you can write cleaner and more maintainable code, and fully leverage the power of functional components. Custom hooks also allow you to encapsulate and reuse logic across multiple components, enhancing the modularity of your app.",
    },
  },
  {
    id: 2,
    title: "Next.js for Beginners: A Complete Overview",
    image: "/images/next-js.jpg",
    description:
      "Step-by-step guide for beginners to get started with Next.js, covering features like Static Site Generation, Server-Side Rendering, and how to set up API routes for full-stack applications.",
    date: "March 5, 2022",
    slug: "nextjs-for-beginners",
    content: {
      introduction:
        "Next.js is a React framework that offers various features like Static Site Generation (SSG) and Server-Side Rendering (SSR) out of the box. This makes it ideal for building SEO-friendly, fast-loading applications.",
      mainContent:
        "To get started with Next.js, you first need to understand its file-based routing system, where the file structure inside the 'pages' directory determines the URL paths. For example, a file named 'about.js' inside the 'pages' folder will automatically be accessible at '/about'. Next.js also makes it easy to implement API routes, enabling you to build full-stack applications.",
      conclusion:
        "Next.js is a powerful framework for building scalable web applications with enhanced performance and SEO. Its built-in support for SSG and SSR gives you the flexibility to choose the rendering method that suits your application’s needs.",
    },
  },
  {
    id: 3,
    title: "Building a REST API with Node.js and Express",
    image: "/images/node-js.jpg",
    description:
      "Learn how to create a RESTful API using Node.js and Express, including setting up endpoints, middleware, error handling, and secure authentication with JWT tokens.",
    date: "April 20, 2022",
    slug: "building-rest-api-nodejs",
    content: {
      introduction:
        "Building a REST API with Node.js and Express is a great way to learn how to handle HTTP requests, work with databases, and create scalable APIs. In this post, we'll go over how to set up an Express server and build routes for handling various HTTP methods like GET, POST, PUT, and DELETE.",
      mainContent:
        "Express provides a minimal and flexible approach for building web servers and APIs. You'll learn how to define routes for CRUD operations, use middleware for request validation and authentication, and handle errors gracefully. JWT tokens are commonly used for secure authentication, allowing you to authenticate users without storing sensitive session information on the server.",
      conclusion:
        "With Node.js and Express, you can quickly create powerful and secure REST APIs. By combining these technologies with JWT authentication, you can build robust, scalable, and secure applications that handle a variety of user interactions.",
    },
  },
  {
    id: 4,
    title: "Exploring Advanced JavaScript Concepts",
    image: "/images/javascript.jpg",
    description:
      "Master advanced JavaScript concepts like closures, the event loop, async/await, and more, to take your JavaScript skills to the next level.",
    date: "June 15, 2022",
    slug: "advanced-javascript-concepts",
    content: {
      introduction:
        "JavaScript is a powerful language with many advanced concepts that are essential for understanding how to write efficient, high-performing code. In this post, we’ll explore some of the most critical concepts like closures, the event loop, and async/await.",
      mainContent:
        "Closures are functions that have access to variables in their outer scope, even after that outer function has completed execution. Understanding closures is key to mastering JavaScript’s functional programming aspects. The event loop in JavaScript is responsible for handling asynchronous operations, ensuring that non-blocking code can run while other tasks are being processed. Async/await is a modern JavaScript feature that makes working with promises much cleaner and more readable.",
      conclusion:
        "By mastering these advanced JavaScript concepts, you can write more efficient, maintainable, and performant code. These concepts will help you understand how JavaScript handles asynchronous tasks, scoping, and closures, which are fundamental to writing complex applications.",
    },
  },
  {
    id: 5,
    title: "Building with TypeScript: A Complete Guide",
    image: "/images/typescript.jpg",
    description:
      "A complete guide to getting started with TypeScript and integrating it into your projects, with a focus on type safety and tooling.",
    date: "August 25, 2022",
    slug: "building-with-typescript",
    content: {
      introduction:
        "TypeScript is a statically typed superset of JavaScript that offers optional type checking, which helps catch errors during development rather than at runtime. In this guide, we’ll go over how to integrate TypeScript into your projects and improve code quality with type safety.",
      mainContent:
        "TypeScript enhances JavaScript by providing static types, interfaces, and more. By adding types to your variables, functions, and objects, TypeScript can catch errors before the code is executed. You can also define interfaces to enforce the structure of objects and classes. The TypeScript compiler (tsc) converts your TypeScript code into standard JavaScript, ensuring compatibility with all modern browsers and Node.js environments.",
      conclusion:
        "Integrating TypeScript into your development workflow provides numerous benefits, including better error detection, improved tooling (like auto-completion and refactoring), and easier collaboration on large projects. By adopting TypeScript, you can ensure better scalability and maintainability for your applications.",
    },
  },
];

// Create context
export const DataContext = createContext<{
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
}>({
  blogs: initialBlogs,
  setBlogs: () => {},
});

// Data provider component
export function DataProvider({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  return (
    <DataContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </DataContext.Provider>
  );
}
