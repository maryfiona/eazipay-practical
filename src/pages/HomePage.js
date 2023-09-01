import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
 import Individual from '../components/Individual'
 // import HowItWorks from '../components/HowItWorks';
 import Advert from '../components/Advert'
 import Demo from '../components/Demo'
function HomePage() {
    return (
      <>
      <Navbar />
         <LandingPage /> 
       <Individual />
        {/* <HowItWorks /> */}
     <Advert /> 
     <Demo />
      </>
     
    );
  }
  
  export default   HomePage;