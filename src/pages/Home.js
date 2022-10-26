import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Home() {
    const API = "http://localhost:5000";

        const obj = {};
        let click = 0;
        function getTime() {

            click += 1;

            console.log("valor de click: " + click);
            if (click % 2 != 0) {
                const startDate = new Date();
                obj.startHours = startDate.getHours();
                obj.startMinutes = startDate.getMinutes();
                obj.startSeconds = startDate.getSeconds();
                obj.startMs = startDate.getMilliseconds();
            } else {
                var finalDate = new Date();
                obj.finalHours = finalDate.getHours();
                obj.finalMinutes = finalDate.getMinutes();
                obj.finalSeconds = finalDate.getSeconds();
                obj.finalMs = finalDate.getMilliseconds();

                function timeCalculator(startSeconds, startMs, finalSeconds, finalMs) {
                    let startTime = (startSeconds * 1000) + startMs;
                    let finalTime = (finalSeconds * 1000) + finalMs;

                    let timeDifference = finalTime - startTime;
                    return timeDifference;
                }

                obj.time = timeCalculator(obj.startSeconds, obj.startMs, obj.finalSeconds, obj.finalMs)
                console.log(obj);

                fetch(API + "/data", {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            }

        }
        return (
            <div className="body">
                <header className="header">
                    <h1>Fast Double-Click</h1>
                    <div className="links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/results">Meus resultados</Link></li>
                      
                        </ul>


                    </div>
                </header>
                <div className="button">
                    <button onClick={getTime}>Clique</button>
                </div>
            </div>

        )
    };

    export default Home;