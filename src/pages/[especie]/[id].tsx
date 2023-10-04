//@ts-nocheck
import { useEffect, useState } from "react";
//@ts-ignore
import ChartsContainer, { Charts } from "@/components/ChartsContainer"

interface ICharts {
    shortDescription: string
    title: string
    chartsList: Charts[]
}

export default function EspecieDetails(data: ICharts) {
    const [cardsContainerData, setCardsContainerData] = useState<ICharts>({
        shortDescription: "Aguarde enquanto processamos vossa solicitação",
        title: "Isso levará alguns segundos",
        chartsList: []
    })
    console.log("🚀 ~ file: [id].tsx:18 ~ EspecieDetails ~ cardsContainerData:", cardsContainerData)
    useEffect(() => {
        if (data) setCardsContainerData(data)
    }, [])

    return (
        <>
            <section className="px-4 py-20 bg-gradient-to-r from-white to-purple-100">
                <div className="w-full h-full grid items-center grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <p className="mb-1 text-base font-medium md:text-xl text-primary">{cardsContainerData.shortDescription}</p>
                        <p className="mb-6 text-3xl font-bold md:leading-tight md:text-x">{cardsContainerData.title}</p>
                    </div>
                </div>
            </section><section>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2  ">
                    <ChartsContainer chartsList={cardsContainerData?.chartsList ?? []} />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context: any) {
    try {
        const { id, especie } = context.query
        const result = await fetch(`https://api.pureitems.dev/v1/especies/${id}/${especie}`)
        const props = await result.json() as HomePage
        if ("erro" in props) {
            return { props: {} }
        }

        return {
            props
        }
    } catch (e) {
        return { props: {} }
    }
}
