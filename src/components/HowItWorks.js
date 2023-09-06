import './HowItWorks.css'
import easipay from '../assets/easipay.svg'
// import circle from '../assets/circle.svg'
// import  phone from '../assets/phone.svg'
function HowItWorks () {
    return(
        <>
         
<div className="md:grid-cols-2 lg:grid-cols-4 ">

 

<img className='grid grid-cols-4' src={easipay} alt="easipay" />
          <div className='grid-cols-1  flex pl-60 sm:pl-10'>
          <li>
          <a  href="/">Individual</a>
          </li>
          <li>
          <a href="/">Business</a>
          </li>
          <li>
          <a href="/">Pricing</a>
          </li>
          <li>
          <a href="/">Set your payroll</a>
          </li>
          <button className="bg-white  border-2 border-gree900" >Login </button>
         <button className="bg-green-800  rounded-full text-white " >Register </button>
         </div>
 
</div>

        </>
                

    )
}
export default HowItWorks;