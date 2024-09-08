
const Hero = () => {
    return (
        <div className="bg-[#E3EDF6] mt-4">
            <div className="container mx-auto max-w-screen-xl grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Starting At <span className="font-bold"> $999.00 </span>
                        </p>
                        <h2 className="text-topHeadingPrimary font-bold text-4xl ms:text-5xl"> The best notbook collection 2024</h2>
                        <h3 className="text-2xl font=['Oregano, cursive']">
                            Exclusive Offer <span className="text-red-600"> -10%</span>
                            off this week
                        </h3>
                        <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white" href="#">Shop Now</a>
                    </div>
                </div>
                <div>
                    <img className="ml-auto" src="https://images.pexels.com/photos/2473167/pexels-photo-2473167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hero image" />
                </div>
            </div>
        </div>
    )
}

export default Hero;