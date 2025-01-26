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
                    <p className={"text-wrap w-5xl text-sm"}>Below is a timeline of actions taken by the trump administration
                        since taking office on January 20th 2025.
                        Each action is rated on a scale of 1 - 10 based on how little (1) or how much (10) the action
                        seems to be expected
                        to address inflationary effects around egg prices and other commodities.
                    </p>
                </div>
                <EggScale/>
                <div className={"text-center text-slate-700 flex justify-center text-xs"}>
                    <p className={"text-wrap w-9xl"}>
                        This website is not run by journalists. This is not anyone's full time job, so things are likely missing because the news
                        cycle moves so quickly. Omissions of critical items are not intentional. Take everything here with a grain of salt, stay informed through
                        multiple sources, and challenge your own beliefs regularly.
                    </p>
                </div>
            </div>
        </div>
    )
}

function EggScale() {
    const rows = [];
    for (let i = 0; i <= 10; i++) {
        rows.push(<EggMeter key={i} value={i}/>);
    }
    return (
        <div className={"flex justify-center gap-1"}>
            {rows}
        </div>
    )
}

function EggMeter(props) {
    return <EggSvg className={"p-2 rounded-full border h-10 w-10"}
                   style={{backgroundColor: CalculateColor(props.value)}}/>
}

export default Header
