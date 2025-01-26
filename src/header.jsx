function Header() {
    return (
        <div className="w-full bg-slate-700 shadow-lg">
            <div className={"text-center p-5 text-slate-50"}>
                <h1 className={"text-7xl"}>No</h1>
                <p>January 24th, 2025</p>
                <p>Average Graded Loose White Large Egg Price: $6.55 / Dozen</p>
                <a target={"_blank"} href={"https://www.ams.usda.gov/mnreports/pydseindex.pdf"}
                   className={"underline underline-offset-4 italic text-sm"}>Source: USDA</a>
            </div>
        </div>
    )
}

export default Header
