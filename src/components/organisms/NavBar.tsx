import { Link } from "react-router-dom"
import LangSwitchIcon from "../../assets/LangSwitchIcon"
import MoonIcon from "../../assets/MoonIcon"
import Button from "../atoms/Button"
import NavBarLink from "../atoms/NavBarLink"

const NavBar = () => {
    return (
        <nav
            className={`p-4 sticky top-0 z-100 bg-bg   flex items-center justify-between transition-all`}
        >
            <Link to="/">
                <h1>Natalie Rosenberg</h1>
            </Link>
            <div className="grid grid-flow-col gap-6">
                <ul className="flex items-center gap-3">
                    <NavBarLink element="#work" text="Work" />
                    <NavBarLink element="#about" text="About" />
                    <NavBarLink element="#contacts" text="Contacts" />
                </ul>
                <div className="flex items-center gap-3">
                    <Button>
                        <MoonIcon />
                    </Button>
                    <Button>
                        <LangSwitchIcon />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
