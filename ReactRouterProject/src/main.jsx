import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Home from './Components/Home/Home';
// import Contact from './Components/Contact/Contact'
// import About from './Components/About/About'
// import Layout from'./Layout'
import App from './App';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='About' element={<About />} />
//       <Route path='Contact' element={<Contact />}
//        />
//     </Route>
//   )
// )

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <App/>
  </React.StrictMode>,
)
