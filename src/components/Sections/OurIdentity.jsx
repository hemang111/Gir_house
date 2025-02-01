    import React from 'react'
    import Card from '../Sub_Components/Card'
    import './Id.css'
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
    const OurIdentity = () => {
    return (
    <div>
    <h1 className="font-bold  hero-heading text-center text-4xl sm:text-6xl lg:text-8xl mt-10 px-4 mb-32">
          Gir - The Champions House
        </h1>
    {cards.map((card,index) => <Card key={index} {...card} index={index} />)}
    </div>
    )
    }

    export default OurIdentity