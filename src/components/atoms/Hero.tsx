import HeroImage from "../../assets/imgs/MainPageImg.webp"
import Smoke from "../../assets/Smoke"

const Hero = () => {
    return (
        <div className="flex items-center flex-wrap  max-w-fit mx-auto">
            <img
                className="object-cover w-full max-w-[600px] "
                src={HeroImage}
                alt="hero"
            />
            <div className="relative  flex justify-center w-[700px]">
                <p className="text-[clamp(2rem,10vw,3rem)]  max-w-[300px] text-right">
                    Art & Illustration & Animation
                </p>
                <Smoke className="absolute w-full h-full -z-10" />
            </div>
        </div>
    )
}
export default Hero
