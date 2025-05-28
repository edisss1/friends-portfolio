import { Link } from "react-router-dom"
import SectionHeader from "./SectionHeader"
import ChevronIcon from "../../assets/ChevronIcon"

interface PageHeaderProps {
    bgImage: string
    title: string
}

const PageHeader = ({ bgImage, title }: PageHeaderProps) => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className="relative min-h-[550px] bg-cover bg-center grid after:content-[''] after:absolute after:inset-0 after:bg-black/20 after:z-10"
        >
            <SectionHeader className="self-end translate-y-[0.03em] z-20">
                {title}
            </SectionHeader>
            <Link
                className="flex items-center gap-2 z-20 absolute top-2 left-2 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white"
                to={"/"}
            >
                <ChevronIcon />
                Go back
            </Link>
        </div>
    )
}
export default PageHeader
