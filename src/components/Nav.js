import easipay from '../assets/easipay.svg'
function Nav () {
    return(
        <div>
            <nav className="flex-nowrap relative flex w-full items-center py-6 g:flex-wrap lg:justify-start lg:py-4 container mx-auto">
                <div>
                    <img  src={easipay} alt="eazipay"/>
                </div>

            </nav>
        </div>
    )
}
export default Nav;