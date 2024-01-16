import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import Gallery_user from "../pages/gallery_user.js";





function MyRouter(){

    return(
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<About />}/>
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/Gallery_user" element={<Gallery_user />}/>

        </Routes>
    )
        

    
        
    
}
export default MyRouter;