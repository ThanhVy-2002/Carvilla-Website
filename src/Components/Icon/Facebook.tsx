import { BaseInconProps } from "../../types/common.types"

export const Facebook = (props: BaseInconProps) => (
    <svg width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" >
        <path fill={props.fillColor || "none"} stroke={props.strokeColor || " #FFFFFF"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z">

        </path>
    </svg>
)