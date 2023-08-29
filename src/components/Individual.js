import './Individual.css'


const Individual = () => {
    return (
        <div>
        <div className='justify-center flex'>  
            <h1 className='text-5xl text-green-900'>For Individuals and Businesses</h1>
        </div>
        <div className='flex justify-center'>
        <p>Join 200+ businesses using Eazipay's easy solution.</p>

        </div>
        <div className='flex justify-center  p-10'>
            <div className=' h-72  w-96  bg p-10 Static border-2'>
                <h1 className='text-2xl  text-white'>Tamper-proof Payroll for life</h1>
                <p className='text-white'>Your staff payroll history  is kept in one place forever.
                 <br />No one excel sheet or manual records .
                <br />Download your payroll  history anytime  you need it . </p>
            </div>
            <div className='  h-72 w-96 bg p-10 absolute border-2'>
                <h1 className=' text-xl text-white'> All Payroll Anytime Anywhere</h1>
                <p className='text-white'>Wherever you are Eazipay has got you covered on <br />ALL your payroll tasks <br />
                 Whether it is Taxes ,Pension insurances HMOs, <br />
                 trustfunds ,Eazipay handles all your compliamces in <br /> one place and easily,in seconds! </p>
                </div>
            <div className=' h-72 w-96 bg p-10 relative border-2'>
                <h1 className='text-2xl text-white '>Payroll in Seconds</h1>
                <p className='text-white '>Never again wil you spend more than 2 minutes on payroll. <br />
         Just click on your staff annd bulk-pay them at once.
           Payment is done permanently.</p>
         </div>
            </div>
            <div className='justify-center flex p-14'>
         <p>
        We are happy to answer your queries. Please, reach us at{" "} <br/ >
        <a className='text-red-700' href="mailto:hello@myeazipay.com">hello@myeazipay.com</a> and expect
        our response shortly after.
      </p>
         </div>
        </div>

    )
}
export default Individual;