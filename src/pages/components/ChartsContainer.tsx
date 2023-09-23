//@ts-nocheck
import dynamic from "next/dynamic";
//@ts-ignore
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export interface Charts {
    options?: any;
    series?: any[];
    height?: number;
    width?: number;
    type?: string;
}

interface DTO {
    chartsList: Charts[]
}

export function Chart(data: Charts) {
    return (
        <ApexChart {...data} />
    )
}


export function ChartsContainer({ chartsList }: DTO = { chartsList: [] }) {
    return (
        <>
            <div>
                {chartsList.length > 0 && chartsList.map((chart, idx) => {
                    return (<Chart key={idx} {...chart} />)
                })}
            </div>
        </>
    )
}