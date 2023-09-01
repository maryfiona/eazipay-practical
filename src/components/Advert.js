import  './Advert.css'
import dot from '../assets/dot.svg'
import AppleStore from '../assets/AppleStore.svg'
import PlayStoreImage from '../assets/PlayStoreImage.svg'
import pinky from '../assets/pinky.svg'
function Advert () {
    return (
      <div className='grid grid-cols-3 bg-pink-200 p-20'>
         <div>
      <img  src={dot} alt='dot' />
     <div className='text-4xl  font-bold'>
          <p>Free Forever  <br /> For Your  </p>
            <p className="text-red-600">Salary <br /> Payment</p>
     </div>

           <p className='mt-20'>Subscribe to the Eazilife today</p>
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
           <div className=' w-max pt-20'>
              <img src={pinky} alt="pinky" />
         </div>

</div>

    )
}
export default Advert;