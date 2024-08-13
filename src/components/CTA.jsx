import React from 'react'

const CTA = () => {
    return (

        <div className="bg-primary lg:py-20">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Do you have an
                        idea or a project you need
                        help with?
                    </span>

                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <button type="button" className="py-4 px-6 outline-none  bg-accent hover:bg-transparent hover:text-accent  hover:outline-accent  text-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <a href="#contact">Contact Now</a>
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CTA
