
import AnimatedContent from "../../components/react-bits/animatedcontent";

const timelineData = [
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

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
    <AnimatedContent
        distance={20}
        direction="vertical"
        reverse={false}
        duration={.5}
        ease="elastic.out(1,0.3)"
        initialOpacity={0.01}
        animateOpacity
        scale={1.1}
        threshold={0}
    >
        <div className="timeline-item-content">
            {/* <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span> */}
            <time>{data.date}</time>
            <h1>{data.title}</h1>
            <span>{data.subtitle}</span>
            {Array.isArray(data.bullets) && data.bullets.length > 0 && (
                <ul className="mt-2 list-disc pl-5 text-sm md:text-[15px] leading-relaxed text-[color-mix(in_oklab,var(--text)_86%,transparent)]">
                {data.bullets.map((b, i) => (
                <li key={i}>{b}</li>
                ))}
                </ul>
            )}
            <span className="circle" />
        </div>
    </AnimatedContent>
        
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
// const App = () => <>
// 	<h1>React Timeline</h1>
// 	<Timeline />
// </>;

// ReactDOM.render(<App />, document.getElementById('app'));