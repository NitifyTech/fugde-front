import React from "react";

export interface IMountCard {
    id: string;
    registryType: string;
    redirectLink?: string;
    cardTitle: string;
    cardDescription: string,
    publishedDate: string;
    imageLink?: string;
}

export interface ICardsContainer {
    title: string;
    shortDescription: string;
    cardsList: IMountCard[]
}

function mountCard({ cardTitle, id, publishedDate, registryType, redirectLink, imageLink, cardDescription }: IMountCard, key: number) {
    const link = redirectLink ?? `${registryType}/${id}`
    return (
        <div className="shadow-md hover:shadow-lg" key={key}>
            {imageLink && <a href={link}>
                <img src={imageLink} className="object-cover w-full h-56 mb-5 bg-center rounded" loading="lazy" />
            </a>}
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
                <a href={link} className="text-gray-900 hover:text-purple-700">{cardTitle}</a>
            </h2>
            {cardDescription && <p className="mb-3 text-sm font-normal text-gray-500">
                {cardDescription}
            </p>}
            <p className="mb-3 text-sm font-normal text-gray-500">
                {new Date(publishedDate).toLocaleDateString('pt-BR')}
            </p>
        </div>
    )
}

export default function CardsContainer({ shortDescription, title, cardsList }: ICardsContainer) {
    return (
        <section className="px-4 py-8 mx-auto max-w-7xl">
            {title && <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">{title}</h2>}
            {shortDescription && <p className="mb-20 text-lg text-gray-500">{shortDescription}</p>}
            {cardsList && <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
                {cardsList.map((card, idx) => mountCard(card, idx))}
            </div>}
        </section>
    )
}