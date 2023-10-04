import React from "react";
import dynamic from "next/dynamic";
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
        //@ts-ignore
        <ApexChart {...data} />
    )
}

export default function ChartsContainer({ chartsList }: DTO = { chartsList: [] }) {
    return (
        <>
            <div>
                {chartsList.map((chart, idx) => {
                    console.log("🚀 ~ file: ChartsContainer.tsx:31 ~ {chartsList?.length>0&&chartsList.map ~ chart:", chart)

                    return (<Chart key={idx} {...chart} />)
                })}
            </div>
        </>
    )
}