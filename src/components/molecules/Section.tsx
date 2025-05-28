import SectionHeader from "../atoms/SectionHeader"

interface SectionProps {
    id: string
    title: string
    children: React.ReactNode
    className?: string
}

const Section = ({ id, title, children, className }: SectionProps) => {
    return (
        <section
            className={
                className
                    ? className
                    : "bg-section-bg pt-0 pb-9 mt-12 flex flex-col gap-8"
            }
            aria-labelledby={id}
            id={id}
        >
            <SectionHeader className="translate-y-[-0.3em]">
                {title}
            </SectionHeader>
            {children}
        </section>
    )
}
export default Section
