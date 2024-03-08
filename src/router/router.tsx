import { createBrowserRouter } from 'react-router-dom'
import {App} from "../App"
import { NewNote } from '../components/NewNote'

export const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"newnote",
        element: <NewNote/>
      }
    ]
  },
])