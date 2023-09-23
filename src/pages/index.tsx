import React, { useEffect } from "react"

import { useState } from 'react'
import CallAction, { ICallToAction } from '@/pages/components/CallToAction'
import CardsContainer, { ICardsContainer } from '@/pages/components/CardsContainer'
interface CallAction {
    id: string;
    callActionMessage: string;
    shortMessage: string;
    image: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
}

interface Card {
    id: string;
    name: string;
    cardTitle: string;
    cardDescription: string;
    registryType: string;
    imageLink: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
}

interface CardsData {
    title: string;
    shortDescription: string;
    cardsList: Card[];
}

interface HomePage {
    callAction: CallAction;
    cards: CardsData;
}



export async function getServerSideProps() {
    try {
        const result = await fetch("https://api.pureitems.dev/v1/homepage")
        const props = await result.json() as HomePage
        return {
            props
        }
    } catch (e) {
        console.log("🚀 ~ file: index.tsx:49 ~ getServerSideProps ~ e:", e)
        return { props: {} }
    }
}

export default function Home({ callAction, cards }: any) {
    const [callActionData, setCallActionData] = useState<ICallToAction>({
        callActionMessage: "Aguarde enquanto processamos vossa solicitação.",
        shortMessage: "Isso levará alguns segundos."
    })
    const [cardsContainerData, setCardsContainerData] = useState<ICardsContainer>({
        shortDescription: "Aguarde enquanto processamos vossa solicitação",
        title: "Isso levará alguns segundos",
        cardsList: []
    })
    useEffect(() => {
        if (callAction) setCallActionData(callAction)
        if (cards) setCardsContainerData(cards)
    }, [callAction, cards])

    return (
        <>
            <CallAction
                {...callActionData}
            />
            {
                cardsContainerData.cardsList.length > 0
                &&
                <CardsContainer
                    {...cardsContainerData}
                />
            }
        </>
    )
}