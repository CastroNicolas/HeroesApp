import { useMemo } from "react"
import {  Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../../selectors/GetHeroesById"

export const HeroesScreen = () => {

  const {heroeId} = useParams()
  const navigate = useNavigate()

  const handleReturn = () => {
    navigate( -1 )
  }

  const hero = useMemo(() => getHeroeById(heroeId), [heroeId])
  

  if (!hero) {
    return <Navigate to='/' />
  }

const {
  alter_ego,
  characters,
  first_appearance,
  id,
  publisher,
  superhero  
} = hero


  const imagePath = `/assets/${id}.jpg`




  return (
    <div className="row ml-5">

      <div className="col-4">
        <img 
        src={ imagePath } 
        alt={hero.superhero}
        className='img-thumbnail  animate__animated animate__fadeInLeft'
        />
      </div>

      <div className="col-8">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush animate__animated animate__fadeInRight" >
          <li className="list-group-item"> <b> Superhero: </b> {superhero}</li> 
          <li className="list-group-item"> <b> Personaje: </b> {alter_ego}</li>
          <li className="list-group-item"> <b> Comic: </b> {publisher}</li>
          <li className="list-group-item"> <b> Primera Aparicion: </b> {first_appearance}</li>
        </ul>

          <h5 className=" animate__animated animate__fadeInUp">characters</h5>
          <p className="animate__animated animate__fadeInUp">{characters}</p>

          <button 
          className="btn btn-outline-info animate__animated animate__fadeInUp"
          onClick={ handleReturn }
          >
            Regresar
          </button>


      </div>


    </div>
  )
}

