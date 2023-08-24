import { useParams } from "react-router-dom"

// .todos los hooks son funciones
// .todos los hooks se invocan dentro de un componente

function Profile() {

  const params = useParams()
  console.log(params)
  // es lo mismo que M2 req.params

  const users = [
    {
      name: "Pedro",
      likes: "Star Wars"
    },
    {
      name: "Antonio",
      likes: "Marvel"
    },

  ]

  return (
    <div>
      
      <h3>Aqui la info de un profile</h3>

      <p>Este es el perfil de {params.username}.</p>
      <p>A {params.username} le gusta Star Wars</p>

    </div>
  )
}

export default Profile