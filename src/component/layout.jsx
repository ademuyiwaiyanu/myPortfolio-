import Footer from "../component/footer";
import Navbar from "../component/navbar";

const Layout = ({ children }) => {
  return (
   <>
   
    <Navbar />
  
      {children}
    
   <Footer />
   

   </>
  )
}

export default Layout;