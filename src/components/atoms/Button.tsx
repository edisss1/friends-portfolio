interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: "submit" | "reset" | "button"
    disabled?: boolean
    className?: string
}

const Button = ({
    children,
    onClick,
    type,
    disabled,
    className
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    )
}
export default Button
