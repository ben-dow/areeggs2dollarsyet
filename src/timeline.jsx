import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from "./assets/data.json"
import EggSvg from "./assets/egg.svg?react"

export function Timeline() {

    let a = data.sort((a, b) => b.date.localeCompare(a.date));

    const listItems = a.map((item,key) => {
        return <TimelineItem key={key} item={item}/>
    })

    return (
        <div>
            <VerticalTimeline
                animate={true}
                lineColor={"gray"}
            >
                {listItems}
            </VerticalTimeline>
        </div>
    )
}

function TimelineItem(props) {
    let item = props.item;

    let date = new Date(item.date);
    var userTimezoneOffset = date.getTimezoneOffset() * 60000;
    date = new Date(date.getTime() + userTimezoneOffset);

    const sources = item.sources.map((source,key) => {
        return (
            <div key={key}>
                <a href={source.url} target="_blank" className={"underline-offset-4 underline italic text-sm"}>{source.sourceName}</a>
            </div>
        )
    })

    return (
        <VerticalTimelineElement
            icon={<EggSvg/>}
            date={date.toDateString()}
            iconStyle={{background: CalculateColor(item.eggMeter)}}
        >
            <div className={"flex flex-col gap-1"}>
                <h2 className={"text-2xl font-bold"}>{item.title}</h2>
                <div className={"text-sm"}>{item.description}</div>
                <h3 className={"text-lg font-semibold"}>Sources</h3>
                <div className={"flex gap-2"}>
                    {sources}
                </div>
                <div className={"text-sm text-right"}>Egg Meter: {item.eggMeter}</div>
            </div>

        </VerticalTimelineElement>
    )
}

export function CalculateColor(value){
    let valToCalcWith = Math.abs(value - 10) / 10

    var hue=((1-valToCalcWith)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}

