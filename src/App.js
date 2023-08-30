import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import './App.css';
import Products from './components/products/Products';
import Main from './components/main/Main';
import Friends from './components/Friends/Friends';
import Errors from './components/error/Errors';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/Posts/PostDetails';



function App() {
  const router =createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {path:'/',element:<Home></Home>},
          {path:'/Home',element:<Home></Home>},
          {
            path:'/friends',
            loader: async ()=>{
              return fetch('https://jsonplaceholder.typicode.com/users')
            },
            element:<Friends></Friends>
          },
          {
            path:'/friend/:friendID',
            loader: async ({params})=>{
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
            },
            element: <FriendDetails></FriendDetails>
          },
          {
            path:'/posts',
            loader: async ()=>{
              return fetch('https://jsonplaceholder.typicode.com/posts')
            },
            element:<Posts></Posts>
          },
          {
            path:'/post/:userID',
            loader: async ({params})=>{
              return fetch(`https://jsonplaceholder.typicode.com/posts/${params.userID}`)
            },
            element: <PostDetails></PostDetails>
          },
          {path:'products', element:<Products></Products>}
        ]
      },  
      {path:'/About',element:<About></About>},
      {path:'*',element:<Errors></Errors>}  
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
