import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                  width="52"
                  height="24"
                />
              </svg>
              
            </span>{' '}
           
          </h2>
        
        </div>
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              
            </p>
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Nori grape silver beet broccoli kombu beet"
            >
              What is The purpose to use react router?
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Well, the way they make shows is, they make one"
            >
              How does context api works in react?
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </p>
           
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              
            </p>
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Pommy ipsum smeg head whizz morris himer due"
            >
            What is useHref hook in react?
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly..
            </p>
           
          </div>
        </div>
      </div>
    );
};

export default Blog;