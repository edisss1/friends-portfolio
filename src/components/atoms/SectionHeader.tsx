interface SectionHeaderProps {
    children: React.ReactNode
    id?: string
}

const SectionHeader = ({ children, id }: SectionHeaderProps) => {
    return (
        <h2
            id={id}
            className="text-[clamp(2rem,10vw,8rem)] leading-none translate-y-[-0.3em]  font-section-header  text-white text-center"
        >
            {children}
        </h2>
    )
}
export default SectionHeader
