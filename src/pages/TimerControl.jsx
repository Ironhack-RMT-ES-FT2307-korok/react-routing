import { useState } from "react"
import Timer from "../components/Timer"

function TimerControl() {

  const [ isTimerShowing, setIsTimerShowing ] = useState(false)

  return (
    <div>
      
      {/* <button onClick={ () => setIsTimerShowing(isTimerShowing === true ? false : true) }>Iniciar Timer</button> */}
      <button onClick={ () => setIsTimerShowing(!isTimerShowing) }>Mostrar e Iniciar Timer</button>

      { isTimerShowing === true && <Timer setIsTimerShowing={setIsTimerShowing}/> }

    </div>
  )
}

export default TimerControl