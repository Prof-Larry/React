function WorkList() {
    const work = ["Sports Representer", "Former Porn Star", "Sexiest Lady in The World"];
    return (
        <ul style={{ listStyleType: "none", color: "black", fontSize: "1.5em", textAlign: "center" }}>
            {work.map(w => <li>{w}</li>)}
        </ul>
    )
}

export default WorkList;