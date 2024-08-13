import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
    return (
        <div id='about' className="mx-auto max-w-screen-2xl px-4 py-16 sm:mx-[6rem] md:mx-[8rem] lg:mx-[6rem] xl:mx-[8rem] flex flex-col justify-center items-center">
            <div>
                <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                    <div className="relative h-64 sm:h-80 lg:h-full">
                        <img
                            alt="About Image"
                            src={about}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                    <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                    ></span>

                    <div className="p-8 sm:p-16 lg:p-24">
                        <p className="mt-4 text-gray-600">
                            I am a passionate UI/UX designer who thrives on crafting intuitive and visually captivating digital experiences. My design journey is fueled by a love for creativity, combined with a deep understanding of user-centered design principles.
                        </p>


                        <p className="mt-4 text-gray-600">
                            With a focus on usability and aesthetics, I strive to create interfaces that are not only beautiful but also functional. I believe in the power of design to solve problems and enhance the user experience.
                        </p>

                        <p className="mt-4 text-gray-600">
                            I’m constantly exploring new design trends and tools to refine my skills and stay ahead in this ever-evolving field. My goal is to create meaningful designs that resonate with users and leave a lasting impression.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded border border-primary bg-primary px-12 py-3 text-base font-medium text-accent hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
                        >
                            Contact Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
