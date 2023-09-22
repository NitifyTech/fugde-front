import React from "react"

export default function Home(){
    return(
    <section className="px-4 py-20 bg-gradient-to-r from-white to-purple-100">
    <div className="w-full h-full grid items-center grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <p className="mb-1 text-base font-medium md:text-xl text-primary">Built for developers</p>
        <h2 className="mb-6 text-3xl font-bold md:leading-tight md:text-4xl md:mb-4">Get started building your internal tool in minutes</h2>
        <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <a href="#" className="w-full shadow btn btn-primary btn-lg sm:w-auto">Get started</a>
          <a href="#" className="w-full btn btn-link btn-lg sm:w-auto">Schedule a demo</a>
        </div>
      </div>
    </div>
  </section>
  )
}