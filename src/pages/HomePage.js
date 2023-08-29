import Navbar from '../components/Navbar'
 import Individual from '../components/Individual'
 import LandingPage from '../components/LandingPage'
 import HowItWorks from '../components/HowItWorks';
 import Advert from '../components/Advert'

function HomePage() {
    return (
      <>
      <Navbar />
        <LandingPage /> 
       <Individual />
       <HowItWorks />
      <Advert />  
      </>
     
    );
  }
  
  export default   HomePage;