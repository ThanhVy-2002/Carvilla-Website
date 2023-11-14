import { BaseInconProps } from "../../types/common.types"

export const CarTabler = (props: BaseInconProps) => (
    <svg
        width="36px"
        height="36px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g
            fill={props.fillColor || "none"}
            stroke="#121111"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2">
            <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
            <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"></path>
        </g>
    </svg>
)