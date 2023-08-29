import easipay from '../assets/easipay.svg'


const Navbar =() =>{
    return(
        <>
        <div>
             <div>
                    <ul className="space-x-8 p-10 flex">
                        <img  className='mr-8' src={easipay} alt="easipay" />
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
                        <button className="bg-white  border-2 border-green-600 rounded-full  text-green-900 w-56 h-14" >Login </button>
                       <button className="bg-green-800 space-x-2  rounded-full text-white w-56 h-14" >Register </button>
                    </ul>

                </div>
        </div>
        
        </>


    )
} 
export default Navbar;