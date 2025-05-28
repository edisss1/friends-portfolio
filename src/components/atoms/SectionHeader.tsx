interface SectionHeaderProps {
    children: React.ReactNode
    id?: string
    className?: string
}

const SectionHeader = ({ children, id, className }: SectionHeaderProps) => {
    return (
        <h2
            id={id}
            className={`text-[clamp(2rem,10vw,8rem)] font-section-header  text-white text-center leading-none ${className}  `}
        >
            {children}
        </h2>
    )
}
export default SectionHeader
