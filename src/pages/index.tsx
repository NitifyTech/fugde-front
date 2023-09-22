import React from "react"

import { useState } from 'react'
import CallAction, { ICallToAction } from '@/pages/components/CallToAction'
import CardsContainer, { ICardsContainer } from '@/pages/components/CardsContainer'

export default function Home() {
    const [callActionData, setCallActionData] = useState<ICallToAction>({
        callActionMessage: "Aguarde enquanto processamos vossa solicitação.",
        shortMessage: "Isso levará alguns segundos."
    })

    const [cardsContainerData, setCardsContainerData] = useState<ICardsContainer>({
        shortDescription: "a",
        title: "a",
        cardsList: [{
            cardTitle: "Tilápias",
            cardDescription: "aaaaaaaa",
            id: "1",
            publishedDate: new Date().toISOString(),
            registryType: "species",
            imageLink: "",
        }, {
            cardTitle: "Tilápias",
            cardDescription: "aaaaaaaa",
            id: "1",
            publishedDate: new Date().toISOString(),
            registryType: "species",
            imageLink: "",
        }, {
            cardTitle: "Tilápias",
            cardDescription: "aaaaaaaa",
            id: "1",
            publishedDate: new Date().toISOString(),
            registryType: "species",
            imageLink: "",
        }]
    })

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