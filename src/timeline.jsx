import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from "../public/data.json"
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
            date={item.date}
            iconStyle={{background: CalculateColor(item.eggMeter)}}
            className={""}
        >
            <div className={"flex flex-col gap-2"}>
                <h2 className={"text-2xl"}>{item.title}</h2>
                <h3 className={"text-lg"}>Sources</h3>
                <div className={"flex gap-3"}>
                    {sources}
                </div>
                <div>
                    <p className={"text-sm"}>Egg Rating: {item.eggMeter}</p>
                </div>
            </div>

        </VerticalTimelineElement>
    )
}

export function CalculateColor(value){
    let valToCalcWith = Math.abs(value - 10) / 10

    var hue=((1-valToCalcWith)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}

