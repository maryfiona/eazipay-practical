import './Demo.css';
import Dot2 from '../assets/Dot2.svg'

 function Demo(){
    return(
        <div className='grid grid-cols-3 bg-gray-50'>
            <div>
            <img  src={Dot2} alt="Dot2" />
                        <div className='p-20'>
                        <h1 className='text-4xl font-bold text-green-900'>
                            Get an Exclusive <br />
                            Demo of Eazipay
                        </h1>
                        <p>
                            Our greatest priority is to put you and <br />
                            your business first. Let's show you how <br /> we can help.
                        </p>
                        </div>
 </div>

                            <div className="form-box w-full p-6 border-gray-100 bg-white shadow-md rounded-lg  inset-x-0 bottom-0  ">
                            <form>
                                <h4 className="text-center"> First things first</h4>
                                <p className="text-center">
                                    We want to serve you better. Tell us a bit <br /> about yourself or company
                                </p>
                                <div >
                                    <button className="logg" type="submit">Individual</button>
                                    <button className="regii" type="submit">Company</button>
                                </div>

                                <div className='flex flex-col gap-4 py-5'>
                                    <input className="rounded-full border-2 p-3" type="text" id="name" placeholder="First name" name="name" />
                                    <input className="rounded-full border-2 p-3" type="text" id="name" placeholder="Last name" name="name" />
                                    <input className="rounded-full border-2 p-3" type="email" id="email" placeholder="Email" name="email" />
                                    <input className="rounded-full border-2 p-3" type="text" id="name" placeholder="Job title" name="name" />
                                    <input className="rounded-full border-2 p-3" type="text" id="name" placeholder="Company Site" name="name" />
                                </div>

                                <button className="butt" type="submit">Request Demo</button>

                            </form>
                        </div>


        </div>
    )
 }
export default Demo;

