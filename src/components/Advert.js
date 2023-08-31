import  './Advert.css'
import dot from '../assets/dot.svg'
import AppleStore from '../assets/AppleStore.svg'
import PlayStoreImage from '../assets/PlayStoreImage.svg'
import pinky from '../assets/pinky.svg'
function Advert () {
    return (
      <div className='grid grid-cols-3 flex justify-center bg-pink-200'>
        <div>
           <img className='pl-20' src={dot} alt='dot' />

        </div>

      </div>
//  <div className='grid grid-cols-3 bg-pink-200 '> 
//     <div className='flex'>
//             <div>
//             <img className='pl-20  w-80' src={dot} alt='dot' />
//                </div>
//         <div className='pt-40'>
//             <h1 className='text-4xl font-bold'>Free forever <br /> 
//             for your  <p className='text-red-900 text-4xl'>salary payment</p> </h1>
//             <div>
//         <p className='mt-8'>Subscribe to the Eazilife today</p>
//              <div className="flex">
//              <a
//                 className=""
//                 href="https://www.apple.com/store"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={AppleStore} alt="AppleStore" />
//               </a>
//               <a
//                 className=""
//                 href="https://play.google.com/store/apps?hl=en&gl=US"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={PlayStoreImage} alt="PlayStoreImage" />
//               </a>
            
//              </div>
//              </div>
           
//         </div>
        
//  </div>
//    <div className='pt-20 left-8'>
//            <img  src={pinky} alt='pinky' />
//         </div>


// </div>
    )
}
export default Advert;