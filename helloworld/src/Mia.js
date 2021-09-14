import WorkList from './WorkList';
function Mia() {
    return (
        <div className="card">
            <h2 className="name">Mia Khalifa</h2>
            <img src="https://www.thesun.co.uk/wp-content/uploads/2020/07/AD-COMPOSITE-Mia-Khalifa-V2.jpg?w=750"
                alt="Mia Khalifa" />
            <h5 style={{ fontSize: "1.3em", letterSpacing: "2px", textAlign: "center", margin: "0.5em" }}>Work: </h5>
            <WorkList />
        </div>
    )
}

export default Mia;