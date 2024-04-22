# Workout Routines

#### The goal of this repo is to replicate Brad Traversy's 2024 React video in preparation for React 19 but create a Workout Routines site.

<a target="_blank" href="https://www.youtube.com/watch?v=LDB4uaJ87e0&t=840s&ab_channel=TraversyMedia">Click here for Traversy's tutorial on **React 2024 guide in preparation for React 19**</a>

- npm create vite@latest .
- npm i 

## Setup Frontend Server Port
- npm i -D json-server
We are designating the specific frontend url to 3000.
*In the vite.config.js add the following:*


***Before***  
export default defineConfig({  
  plugins: [react()],  
})  

***After***  
Is changed to   
export default defineConfig({  
  plugins: [react()],  
  server: {  
    port: 3000,  
  }  
})

## Setup Backend Server Proxy
We are using json-server as our backend with a frontend json file acting as our backend.
*In the vite.config.js add the following:*


***Before***  
export default defineConfig({  
  plugins: [react()],  
})  

***After***  
Is changed to  

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // frontend url
    port: 3000,
    // backend url
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
  

  

## Install Tailwind
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

***In package.json add the following to content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",]***

***Add the following to frontend/src/index.css***   
@tailwind base;  
@tailwind components;  
@tailwind utilities;  

- delete app.css
- delete all contents of app.jsx and create a new component with code snippet rafce which is short for react arrow function component export

## Tailwind Global Classes
*To change the default font family, go into tailwind.config.js and add the following inside the extend object*

fontFamily:{  
        sans: ['Roboto', 'sans-serif']  
}

*You can also declare global classes inside such as a grid class as follows*

gridTemplateColumns: {  
    "70/30": '70% 28%',  
},

*talwind.config.js should now contain the following*
/** @type {import('tailwindcss').Config} */
export default {  
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],  
  theme: {  
    extend: {  
      fontFamily:{  
        sans: ['Roboto', 'sans-serif']  
      },  
      gridTemplateColumns: {  
        "70/30": '70% 28%',  
      },  
    },  
  },  
  plugins: [],  
}  

## React Routing
Install the following package to handle routing
- npm i react-router-dom

This package contains the following:
- useNavigate() - to redirect to a url path.

- useDataLoader() - dry code that takes the place of useEffect() to fetch data.

- RouterProvider - the main component that has the prop router which is also the generic variable name used to create a new browser router
- createBrowserRouter - used to create a browser router where you pass in the method/function to create routes from elements

- createRoutesFromElements - used to manage routes with elements given paths or index
- Route - the component to route to a specific path or index and element prop that normally contains a component as a child 

## src folders
assets  
components  
layouts  
pages  

## Install React Icons
- npm i react-icons


added default image to aside instead of company name input fields 4/22
next thingy
addworkoutpage successfully loads image but editworkoutpage does not