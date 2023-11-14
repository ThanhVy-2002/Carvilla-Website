import { BaseInconProps } from "../../types/common.types"

export const CarSide = (props: BaseInconProps) => (
    <svg
        width="36px"
        height="36px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
            fill={props.fillColor|| "#121111"}
            d="m16 6l3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1v-3c0-1.11.89-2 2-2l3-4h10m-5.5 1.5H6.75L4.86 10h5.64V7.5m1.5 0V10h5.14l-1.89-2.5H12m-6 6A1.5 1.5 0 0 0 4.5 15A1.5 1.5 0 0 0 6 16.5A1.5 1.5 0 0 0 7.5 15A1.5 1.5 0 0 0 6 13.5m12 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5Z">
        </path>
    </svg>
)