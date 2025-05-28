import { Link } from "react-router-dom"
import ArrowIcon from "../../assets/ArrowIcon"

interface ArtCardProps {
    text: string
    image: string
    path: string
}

const ArtCard = ({ text, path, image }: ArtCardProps) => {
    return (
        <Link
            to={path}
            style={{ backgroundImage: `url(${image})` }}
            className="w-full relative max-w-[300px] text-white  grid p-4 group aspect-square bg-cover bg-center rounded-lg overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/40 lg:after:opacity-0 after:transition-opacity hover:after:opacity-100 duration-300"
        >
            <div className="flex z-40 flex-col gap-4 self-end text-4xl lg:opacity-0 group-hover:opacity-100">
                <p className="lg:translate-y-100 lg:blur-3xl group-hover:translate-y-0 group-hover:blur-none transition-all hover:duration-100 duration-500 delay-100">
                    {text}
                </p>
                <ArrowIcon className="lg:scale-x-0 group-hover:scale-x-100 transition-all hover:duration-100 duration-500 origin-left" />
            </div>
        </Link>
    )
}
export default ArtCard
