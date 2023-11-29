import { BaseInconProps } from "../../types/common.types";

export const DropDownIcon = (props: BaseInconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill={props.fillColor || "none"}>
            <path
                d="M2.10336 0L6.17199 4.32659L10.2406 0L11.4905 1.33198L6.17199 7L0.853516 1.33198L2.10336 0Z"
                fill={props.fillColor || "#6F6E6E"} />
        </svg>
    )
}