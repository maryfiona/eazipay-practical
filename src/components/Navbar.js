 import easipay from '../assets/easipay.svg'


const Navbar =() =>{
    return(
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

    )
} 
export default Navbar;