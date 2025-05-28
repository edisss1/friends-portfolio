import Section from "../molecules/Section"
import testImg from "../../assets/imgs/Rectangle 8.png"
import ArtCard from "../atoms/ArtCard"

const ArtworkSection = () => {
    return (
        <Section id="artwork" title="Artwork">
            <div className="flex flex-wrap justify-center gap-6">
                <ArtCard image={testImg} text="Art" path="/art" />
                <ArtCard
                    image={testImg}
                    text="Illustration"
                    path="/illustration"
                />
                <ArtCard image={testImg} text="Animation" path="/animation" />
            </div>
        </Section>
    )
}
export default ArtworkSection
