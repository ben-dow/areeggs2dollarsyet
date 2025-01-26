export function Footer() {
    return (
        <div className={"w-full shadow-lg bg-slate-200 flex flex-col gap-2 justify-center p-5 fixed bottom-0 h-15"}>
            <div className={"text-center text-slate-700 text-xs"}>
                <p className={"text-wrap w-9xl"}>
                    This website is not run by journalists. This is not any person&#39;s full time job, so things are likely
                    missing
                    because the news
                    cycle moves so quickly. Omissions of critical items are not intentional. Egg Meter ratings are subjective.
                    Take everything here with a grain of salt, stay informed through
                    multiple sources, and challenge your own beliefs regularly.
                </p>
            </div>
        </div>
    )
}