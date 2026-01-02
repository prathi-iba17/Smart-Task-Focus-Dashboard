import { useEffect, useState } from "react";
import LocalStorage from '../hooks/LocalStorage';

function Timer() {
const [time, setTime] = useState(25*60);
const [running, setRunning] = useState(false);
const [sessions, setSessions] = LocalStorage('sessions', 0)

useEffect(() => {
if (!running) return
if (time === 0) {
setRunning(false);
setSessions(s => s + 1);
alert('25 minutes');
return;
}
const timer = setTimeout(() => {
    setTime((t)=> t - 1);
}, 1000);
return () => clearTimeout(timer);
}, [running, time, setSessions]);

return (
<div className="timer">
<h2>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</h2>
<button onClick={() => setRunning(true)}>Start</button>
<button onClick={() => setRunning(false)}>Pause</button>
<button onClick={() => setTime(25*60)}>Reset</button>
<p>Sessions: {sessions}</p>
</div>
)
}

export default Timer;