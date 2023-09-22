import React from "react";

export interface ICallToAction {
    shortMessage: string;
    callActionMessage: string;
}

export default function CallToAction({ callActionMessage, shortMessage }: ICallToAction) {
    return (<section className="px-4 py-20 bg-gradient-to-r from-white to-purple-100">
        <div className="w-full h-full grid items-center grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
            <div>
                <p className="mb-1 text-base font-medium md:text-xl text-primary">{shortMessage}</p>
                <h2 className="mb-6 text-3xl font-bold md:leading-tight md:text-4xl md:mb-4">{callActionMessage}</h2>
            </div>
        </div>
    </section>)
}