 import easipay from '../assets/easipay.svg'


const Navbar =() =>{
    return(
      <div>
      <ul className="">
          <div className='flex'>

         
          <img className='grid grid-cols-4' src={easipay} alt="easipay" />
          <div className='grid grid-cols-8 pl-40'>
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
      </ul>

  </div>

    )
} 
export default Navbar;