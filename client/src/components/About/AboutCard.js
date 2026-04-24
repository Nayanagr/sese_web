import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React from 'react'

export default function AboutCard() {
    return (
        <>
            <AnimatedElement>
                <h1 className="m-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| ABOUT</span> SESE :</h1>
            </AnimatedElement>

            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-6 md:px-5 md:flex-row justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(14).png" /> 
    {/* <video className="w-full md:rounded-lg" alt="hero" src='/Video/SESECampus.mp4' autoPlay muted loop /> */}
                        </div>
                        <div className="md:w-1/2  md:pl-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">
                                “Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">The Society of Environmental Science and Engineering (SESE) at IIT (ISM), Dhanbad, is a thriving, student-driven organization focused on addressing some of the most pressing environmental challenges of our time. Through the fusion of science, engineering, and innovation, SESE aims to create a platform that encourages learning, collaboration, and the development of practical solutions to protect and sustain the environment. SESE engages students, researchers, and professionals in diverse fields to actively contribute to ongoing environmental projects, fostering an interdisciplinary approach to problem-solving. </p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>


            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-10 md:px-5 md:flex-row-reverse justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            <img className="w-full h-60 md:rounded-lg" alt="hero" src="/images/collegepic(16).jpg" />
                        </div>
                        <div className="md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">“Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">Our mission is to cultivate a dynamic and inclusive community composed of passionate students, dedicated alumni, esteemed professors, and industry experts. This vibrant network at IIT (ISM) Dhanbad is united by a shared goal: to explore and resolve environmental challenges in a way that leverages cutting-edge technology and groundbreaking research. We seek to empower the next generation of environmental leaders by providing them with opportunities to engage in hands-on projects, share innovative ideas, and make meaningful contributions to the field of environmental science and engineering.</p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>
        </>
    )
}
