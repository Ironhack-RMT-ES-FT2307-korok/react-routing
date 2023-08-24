import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonList() {

  const [ allPokemon, setAllPokemon ] = useState(null)

  // de donde viene la data? API de Pokeapi
  // que harramienta usamos para recibir la data? axios o fetch
  // en momento hacemos la llamada a la api? useEffect => componentDidMount
  // como resolvemos la llamada de la api? then/catch o async/await
  // donde almacenamos la data de la api en nuestro componente? en un estado
  // como renderizamos la información? usando el estado
  // que hacemos con el usuario mientras esperamos la data? clausula de guardia con spinner o mensaje

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      console.log(response)
        // setTimeout(() => {
          setAllPokemon(response.data.results)

        // }, 2000)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  // clausula de guardia para loading
  if (allPokemon === null) {
    return <h3>... buscando</h3>
  }

  return (
    <div>
      <h3>Click en un Pokemon</h3>

      {allPokemon.map((eachPokemon) => {
        return (
          <li>
            <Link to={`/poke/${eachPokemon.name}`}>{eachPokemon.name}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default PokemonList