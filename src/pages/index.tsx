import React from "react"

export default function Home() {
    return (
        <>
            <section className="px-4 py-20 bg-gradient-to-r from-white to-purple-100">
                <div className="w-full h-full grid items-center grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <p className="mb-1 text-base font-medium md:text-xl text-primary">Crie suas estatisticas</p>
                        <h2 className="mb-6 text-3xl font-bold md:leading-tight md:text-4xl md:mb-4">Inclua seus dados de caracterização</h2>
                    </div>
                </div>
            </section>
            <section className="px-4 py-8 mx-auto max-w-7xl">
                <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Skcript Blog</h2>
                <p className="mb-20 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <a href="#">
                            <img src="/brand/og.png" className="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                        </a>
                        <h2 className="mb-2 text-lg font-semibold text-gray-900">
                            <a href="#" className="text-gray-900 hover:text-purple-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </h2>
                        <p className="mb-3 text-sm font-normal text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa quibusdam, reprehenderit odit magni voluptates voluptatum error quasi nihil alias quam, dolor beatae ipsam in eveniet soluta ullam, unde ratione!
                        </p>
                        <p className="mb-3 text-sm font-normal text-gray-500">
                            <a href="#" className="font-medium text-gray-900 hover:text-purple-700">Praveen Juge</a>
                            • April 16, 2020
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}