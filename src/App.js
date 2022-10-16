import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Topics from './components/Topics';
import Questions from './components/Questions';
import Blog from './components/Blog';
import Topic from './components/Topic';
import Static from './components/Static';



function App() {
  const router= createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    errorElement: <ErrorPage />,
    children:[
     {
      path:'/home',
      loader:()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Home></Home>
     },

     {
      path:'/topics',
      loader:()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Topics></Topics>
     },
    {
      path:'/topic/:topicId',
      loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
      },
      element:<Questions></Questions>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path:'/static',
      loader:()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Static></Static>
    },
    {
      path:'/',
      loader:()=>{
         return fetch ('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Home></Home>
    },
    
    ]
   }
  ])
  return (
    <div className="App">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
