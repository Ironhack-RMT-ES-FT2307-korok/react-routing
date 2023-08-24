
import { useEffect, useState } from "react"

function Timer(props) {

  const [ timerValue, setTimerValue ] = useState(0)

  useEffect(() => {
    console.log("ComponentDidMount. El componente se ha montado correctamente")
    // aqui queremos el el timer inicie => interval

    let intervalId = setInterval(() => {
      // ok, voy a ejecutar lo siguiente cada
      // console.log("intentando aumentar el intervalo")
      // setTimerValue(timer + 1)
      setTimerValue((valorActualDelEstado) => {
        // console.log(valorActualDelEstado)
        return valorActualDelEstado + 1
      })

    }, 1000)

    // hasta aqui el ComponentDidMount

    return () => {
      // lo que se ejecuta cuando el componente deja de existir
      console.log("componentWillUnmount")
      clearInterval( intervalId )
    }

  }, [])

  

  useEffect(() => {
    console.log("componentDidUpdate", timerValue)
    // cuando llega a 10, entonces sale de el DOM
    if (timerValue >= 8) {
      props.setIsTimerShowing(false)
    }
  }, [timerValue])

  return (
    <div>
      
      <h2>Tiempo andando</h2>
      <h1>{timerValue}</h1>

    </div>
  )
}

export default Timer