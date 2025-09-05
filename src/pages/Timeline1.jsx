import React from 'react'

const TimelineData = [
    {
        title: 'Diploma in Information Communication Technology',
        subtitle: 'Polytechnic University of the Philippines',
        date: '2019 - 2022',
        bullets: [
            
        ],
    },
    {
        title: 'Intern at ZenGages',
        subtitle: 'Website Testing and Improvement',
        date: 'May 2022 - Jul 2022',
        bullets: [
            "Laravel/MySQL HRIS features, bug fixes, customizable reports, optimized stored procedures, GitHub collaboration."
        ],
    },
    {
        title: 'Junior Web Developer',
        subtitle: 'One Document Corporation',
        date: 'Oct 2023 - Present',
        bullets: [
            "Cross-device/cross-browser QA, UI/UX bug reproduction & docs, daily stand-ups, DevTools debugging."
        ],
    },
    
]

const TimelineItem = ({data}) => (
    <div>
        <div className='timelineItems'>
            <time>{data.date}</time>
            <h1>{data.title}</h1>
            <span>{data.subtitle}</span>
            {Array.isArray(data.bullets) && data.bullets.length > 0 && (
                <ul>
                    {data.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
);


const Timeline1 = () => {
  return (
    <>
        {TimelineData.length > 0 &&(
            <div className='timeline-container'>
                {TimelineData.map((data, id) => (
                    <TimelineItem data={data} key={id}/>
                ))}
            </div>
        )}
    </>
     
    
  )
}

export default Timeline1
