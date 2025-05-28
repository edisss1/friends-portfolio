interface NavBarLinkProps {
    text: string
    element: string
}

const NavBarLink = ({ text, element }: NavBarLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const target = document.getElementById(element)
        console.log(target)
        target?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <li className="relative after:content-[''] after:w-full after:h-1 after:bg-black/60 after:rounded-full after:absolute after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-left">
            <a href={`#${element}`} onClick={handleClick}>
                {text}
            </a>
        </li>
    )
}
export default NavBarLink
