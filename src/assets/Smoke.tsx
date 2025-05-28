const Smoke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={`w-full h-auto ${className}`}
            viewBox="0 0 816 295"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_3_25)">
                <path
                    d="M284.438 52.7973C216.884 68.7065 131.252 71.9699 86.533 90.3266C41.3384 108.887 37.0568 142.337 79.3969 165.181C121.737 188.229 69.2513 188.433 102.553 215.764C135.378 242.891 43.3088 240.159 68.5226 238.935C93.7365 237.507 378.157 249.826 423.827 229.43C469.498 209.033 488.051 212.705 519.925 215.764C552.275 218.824 560.881 214.336 618.402 214.336C669.863 214.336 728.557 261.371 754.722 238.935C780.888 216.703 780.047 191.289 780.999 169.26C781.474 147.028 658.164 108.479 599.649 90.3266C541.61 72.1738 488.085 86.6553 433.376 90.3266C378.667 94.2019 352.467 36.8881 284.438 52.7973Z"
                    fill="#4B5563"
                    fill-opacity="0.7"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_3_25"
                    x="0"
                    y="0"
                    width="831"
                    height="295"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="25"
                        result="effect1_foregroundBlur_3_25"
                    />
                </filter>
            </defs>
        </svg>
    )
}
export default Smoke
