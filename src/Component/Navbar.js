import easipay from '../assets/easipay.svg'


const Navbar =() =>{
    return(
        <>
        <div>
      
                <div>
                    <ul className="space-x-11 p-10 text-xl justify-left  flex">
                        <img  className='mr-32 ml-10' src={easipay} alt="easipay" />
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
                        <button className="bg-white  border-2 border-green-600 rounded-full space-x-2 text-green-900 w-52 h-11" >Log in </button>
                       <button className="bg-green-800 space-x-2  rounded-full text-white w-52 h-11" >Register </button>
                    </ul>

                </div>

        </div>
        
        </>


    )
} 
export default Navbar;