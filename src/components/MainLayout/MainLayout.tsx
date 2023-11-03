import { Navbar } from "../Navbar/Navbar";
import './MainLayout.css'


export const MainLayout = ({children}) => {
return (

       <div className="app">
           <Navbar />
           <h1>Welcome to PianoRoll frontend coding challenge!</h1>
           {children}
       </div>

  )
}