import EggSvg from "./assets/egg.svg?react"
import {CalculateColor} from "./timeline.jsx";


function Header() {

    return (
        <div>
            <div className="w-full bg-slate-700 shadow-lg">
                <div className={"text-center p-5 text-slate-50"}>
                    <h1 className={"text-7xl"}>No</h1>
                    <p>January 24th, 2025</p>
                    <p>Average Graded Loose White Large Egg Price: $6.55 / Dozen</p>
                    <a target={"_blank"} href={"https://www.ams.usda.gov/mnreports/pydseindex.pdf"}
                       className={"underline underline-offset-4 italic text-sm"}>Source: USDA</a>
                </div>
            </div>
            <div className={"w-full shadow-lg bg-slate-200 flex flex-col gap-2 justify-center p-5"}>
                <div className={"text-center text-slate-700 flex justify-center"}>
                    <p className={"text-wrap w-5xl text-sm"}>Below is a timeline of actions taken by the Trump
                        administration
                        since taking office on January 20th 2025.
                        <br/>
                        <br/>
                        Each item is rated from 1 - 10 on our Egg Meter regarding how they seem to affect pricing on Eggs (and similar items) for consumers
                        <br/>
                        The lower the number, the more likely it seems the action may hurt consumers, the higher the more likely it will help. Items rated a 5
                        do not seem like they will have any effect.
                    </p>
                </div>
                <EggScale/>

            </div>
        </div>
    )
}

function EggScale() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<div className={"text-center"}>
                    <EggMeter key={i} value={i}/>
                    {i}
                    </div>);
    }
    return (
        <div className={"flex flex-wrap justify-center gap-1"}>
            {rows}
        </div>
    )
}

function EggMeter(props) {
    return <EggSvg className={"p-2 rounded-full border h-10 w-10"}
                   style={{backgroundColor: CalculateColor(props.value)}}/>
}

export default Header
