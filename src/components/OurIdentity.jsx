    import React from 'react'
    import Card from './Card'
    import './OIR.css'
    import { useRef } from 'react';
    import gsap from 'gsap';
    import { useGSAP } from '@gsap/react';
    import { ScrollTrigger } from 'gsap/all';
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    const cards = [
        {
            title: "Content Marketing",
            copy: "Develop compelling narratives that resonate with your target audience and drive brand awareness through valuable content."
        },
        {
            title: "Social Media Strategy",
            copy: "Create impactful social campaigns that foster community engagement and amplify your brand's digital presence."
        },
        {
            title: "Data Analytics",
            copy: "Leverage actionable insights from business metrics to optimize strategies and make informed decisions."
        },
        {
            title: "Data Analytics",
            copy: "Leverage actionable insights from business metrics to optimize strategies and make informed decisions."
        }
    ];
    const OurIdentity = ({ introRef, outroRef }) => {
    return (
    <div>
    <h1 className="font-bold hero-heading text-center text-4xl sm:text-6xl lg:text-8xl mt-10 px-4 mb-12">
          Gir - The Champions House
        </h1>
    {cards.map((card,index) => <Card key={index} {...card} index={index} />)}
    </div>
    )
    }

    export default OurIdentity