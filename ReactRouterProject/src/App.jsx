import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User';
import Github, { GithubUserInfo } from './Components/Github/Github';
import Layout from './Layout';

// this is easy method then the belwo method used for routing process

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

// this is little complicated but works same as above method
// here we are makeing a main routes from where the routing will begin and then giving the children of that route

const router = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'github',
        element: <Github />,
        loader: GithubUserInfo  // here we are calling a function in 'loader' method which will load all the details before you will visite the page just by hovering over it and aslo store all the details in the cache memory
      },
      {
        path: 'user/:userid',
        element: <User />
      }
    ]
  }
  ]);

// this method below is used for simple routing process and is old in style but works fine for simple pages 
function App() {
    return ( 
        <>
{/* //           <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home/>}/>      
//                 <Route path="about" element={<About/>}/>
//                 <Route path="contact" element={<Contact/>}/>
//                 <Route path="user/:userid" element={<User/>}/>
//             </Routes>
//              <Footer/>
//         </Router>  */}

            <RouterProvider router={router} /> {/* this is where the router is calling all the routes form above method */}
        </>
    );
}

export default App;