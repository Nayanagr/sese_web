"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';

export default function Accordion() {
    const AccordionData = [
        {
            "title": "What is the Society of Environmental Science and Engineering (SESE)?",
            "description": "SESE is a student-led organization at IIT (ISM) Dhanbad, focused on tackling environmental challenges through the application of science, engineering, and innovation. It serves as a platform for students, researchers, and professionals to collaborate on environmental projects and initiatives."
        },
        {
            "title": "What is the main mission of SESE?",
            "description": "SESE's mission is to cultivate a community of passionate students, alumni, professors, and industry experts who work together to explore and address pressing environmental challenges. The society promotes education, innovation, and leadership in environmental science and engineering."
        },
        {
            "title": "Who can join SESE?",
            "description": "The tuition fee per semester is ₹1,00,000."
        },
        {
            "title": "What kinds of projects does SESE work on?",
            "description": "SESE works on a wide range of environmental projects, including renewable energy solutions, waste management, sustainable design, climate change research, and biodiversity conservation. These projects often involve hands-on experience and interdisciplinary collaboration."
        },
        {
            "title": "How can students get involved in SESE activities?",
            "description": "Students can participate in SESE by attending our events, workshops, seminars, and joining various project teams. SESE also holds annual membership drives and encourages new members to contribute their ideas and skills."
        },
        {
            "title": "Does SESE collaborate with industries or other organizations?",
            "description": "Yes, SESE actively collaborates with industries, government agencies, and NGOs to bring real-world experience and resources to its projects. These partnerships provide students with valuable opportunities for internships, research, and career development."
        },
        {
            "title": "What is the vision of SESE for the future?",
            "description": "SESE envisions becoming a leading force in environmental innovation by driving advancements in renewable energy, sustainable practices, environmental policy, and technology. Our long-term goal is to create lasting impacts on global environmental issues and to inspire future generations of environmental engineers and scientists."
        },
        {
            "title": "What events and activities does SESE organize throughout the year?",
            "description": "SESE organizes a variety of events, including environmental awareness campaigns, technical workshops, hackathons, guest lectures by industry experts, field trips, and competitions related to environmental engineering and sustainability."
        },
        {
            "title": " What impact has SESE made so far?",
            "description": "Since its inception, SESE has successfully completed numerous environmental projects, ranging from campus sustainability initiatives to research publications in the fields of renewable energy and waste management. SESE has also inspired many students to pursue careers in environmental science and engineering, while actively raising awareness about the importance of sustainable practices."
        }
    ]

    return (
        <div className='mb-10'>
            <AnimatedElement>
                <h1 className="m-4 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| FAQ</span> :</h1>
            </AnimatedElement>
            {AccordionData.map((data, index) => (
                <AccordionCard key={index} title={data.title} description={data.description} />
            ))}
        </div>

    )
}
