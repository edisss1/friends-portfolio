import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ArtPage from "./pages/ArtPage"
import IllustrationPage from "./pages/IllustrationPage"
import AnimationPage from "./pages/AnimationPage"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<ArtPage />} />
            <Route path="/illustration" element={<IllustrationPage />} />
            <Route path="/animation" element={<AnimationPage />} />
        </Routes>
    )
}
export default Router
