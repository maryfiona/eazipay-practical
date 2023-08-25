 import Landingpage from '../assets/Landingpage.svg' 
function LandingPage ()  {
    return (
        <div className="grid grid-cols-3  p-20"> 
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
                </div>
                
            <div className=''>
                <img src={Landingpage} alt="Landingpage" />
            </div>
     </div>
    )
}
export default LandingPage;