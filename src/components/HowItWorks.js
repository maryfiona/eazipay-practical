import './HowItWorks.css'
// import circle from '../assets/circle.svg'
import easipay from '../assets/easipay.svg'
// import  phone from '../assets/phone.svg'
function HowItWorks () {
    return(
        <>
           <div>
             <div>
                    <ul className="flex-no-wrap relative flex w-full items-center justify-between  py-2 shadow-md shadow-black/5 lg:flex-wrap 
                    lg:justify-start lg:py-4">
                        <div className='flex'>

                       
                        <img  src={easipay} alt="easipay" />
                        <li >
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
                    </ul>

                </div>
        </div> 
        </>
                

    )
}
export default HowItWorks;