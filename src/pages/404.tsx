import React from "react";

function Samba() {
  return (
    <>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">Error 404</p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">Ops! A página que você está procurando deu uma fugidinha.</h1>
            <p className="mb-5 text-base text-left text-gray-800 md:text-xl">Pode ser que você tenha caído na página errada ou o conteúdo foi passear por aí.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Samba