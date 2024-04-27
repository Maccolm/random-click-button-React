import { useState } from "react";

export default function Click ({randNum}) {
	const [number, setNumber] = useState(1)

	const getRandomNum = () =>{
		randNum = Math.floor(Math.random() * (10 - 1) + 1)
		setNumber(randNum)
	}
	return (
		<div>
			<h1>You will win, when number will be "7"</h1>
			<h2>Your number is: {number}</h2>
			{number === 7 ? 
				<div><p>You won!</p></div>
			:
				<button onClick = {getRandomNum}> Click</button>
			}
		</div>
	)
}