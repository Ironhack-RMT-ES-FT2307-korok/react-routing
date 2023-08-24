import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PokemonProfile() {

  const [ details, setDetails ] = useState(null)

  const params = useParams()

  useEffect(() => {
    getData()
  }, [params.pokeName])
  // busco la info cuando el componente se monta o cuando hay cambios en params.pokeName
  
  const getData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`)
      console.log(response)
      setDetails(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  if (details === null) {
    return <h3>... buscando</h3>
  }

  return (
    <div>
      
      <h4><span>{details.id}. </span>{details.name}</h4>
      <img src={details.sprites.front_shiny} alt="pokemon" width={200}/>

    </div>
  )
}

export default PokemonProfile