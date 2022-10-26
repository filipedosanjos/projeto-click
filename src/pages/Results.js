

const API = "http://localhost:5000";
    var data = []
    async function Result () {
        
        await fetch (API + "/data")
        .then(res => res.json())
        .then(x => data = x)
        
        var obj = JSON.parse(data)
        

        return (
            <div>
                <h1>Seus Resultados</h1>

                <div>{obj}</div>
                
    
            </div>
        )
    }

    export default Result;