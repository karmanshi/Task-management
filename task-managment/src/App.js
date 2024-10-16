
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Navigation from './Components/Layout/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import AddTask from './Components/Task/Task';
import TaskForm from './Components/Task/TaskForm';
import ChangePassword from './Components/Authentication/ChangePassword';
import ForgetPassword from './Components/Authentication/ForgetPassword';
import ProfileForm from './Components/CommonComponent/ProfileForm';
import LogoutForm from './Components/Authentication/Logout';
import Project from './Components/Projects/Project';
import AddProjectForm from './Components/Projects/AddProjectForm';
import Preview from './Components/CommonComponent/Preview';
import Error from './Components/Error/Error';


function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: '/logout',
      element : <LogoutForm/>
    },
    {
      path: '/forgetpassword',
      element : <ForgetPassword/>
    },
    {
      path:'*',
      element:<Error/>
    },
    {
      path:'/',
      element : <Navigation/>,
      errorElement:<Error/>,
      children :[
        {
          path: '/changepassword',
          element : <ChangePassword/>
        },
        {
          path: '/profileupdate',
          element: <ProfileForm/>
        },
        {
          path: '/dashboard',
          element : <Dashboard />

        },
        {
          path: '/task',
          element: <AddTask/>
        },
        {
          path:'/progress',
          element:<TaskForm/>
        },
        {
          path: '/project',
          element: <Project />
        },
        {
          path: '/project/add',
          element: <AddProjectForm />
        },
        {
          path: '/preview',
          element: <Preview />
        },
        
      ]
    }
  ])
  return (
    <>
     <RouterProvider router={router}/>
     <Toaster/>
    </>
 
   )
}

export default App;
