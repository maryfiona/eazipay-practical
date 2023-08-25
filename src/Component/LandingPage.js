import PlayStoreImage from '../assets/PlayStoreImage.svg'
import AppleStore from '../assets/AppleStore.svg'
import Landingpage from '../assets/Landingpage.svg' 
const LandingPage=() =>{
    return (
      <div className='grid grid-cols-3  p-20'>
        <div>
       <div className='text-4xl '>
            <p>Run Your payroll </p>
             <p className="text-yellow-600">easily</p>
              <p>in</p>
              <p className="text-red-600">seconds</p>
       </div>
              <p className='space-y-6 mt-4'>We’ve built an all-inclusive simple solution for <br /> individual and 
                 businesses to manage staff,
                  pay <br /> salaries, bills, and relevant taxes all at once.</p>
                  <button className='bg-green-900 space-y-6 mt-8 rounded-full text-white w-52 h-14'>Start Using Free, Forever</button>
             <p className='mt-20'>Download the Eazipay App</p>
             <div className="flex">
             <a
                className=""
                href="https://www.apple.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AppleStore} alt="AppleStore" />
              </a>
              <a
                className=""
                href="https://play.google.com/store/apps?hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PlayStoreImage} alt="PlayStoreImage" />
              </a>
            
             </div>
             </div>
             <div className='w-max'>
                <img src={Landingpage} alt="Landingpage" />
           </div>

 </div>

      
    )
}
export default LandingPage;