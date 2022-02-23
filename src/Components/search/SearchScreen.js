import { useLocation, useNavigate } from 'react-router-dom';

import queryString from "query-string";
import { useForm } from '../../Hooks/useForm';
import { getHeroesByName } from '../../selectors/GetHeroesByName';
import { HeroCard } from '../Hero/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {
  
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });

  const { searchText } = formValues

  const heroesFileted = useMemo(() =>  getHeroesByName(q),[q])  

  const handleSearch = (e) => { 
    e.preventDefault()

    navigate(`?q=${searchText}`)
  }




  return (
    <>
        <h1>Búsquedas</h1>
        <hr/>

        <div className='row'>
          
          <div className='col-5'>
            
            <h4>Buscar</h4>
            <hr/>
            
            <form onSubmit={ handleSearch }>
              
              <input
              type='text'
              placeholder='Buscar un Heroe'
              className='from-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
              />
            </form> 
            <div>
            <button
              onChange={handleSearch}
              className='btn btn-outline-primary mt-1'
              type='submit'
              >
                Buscar
              </button>
            </div>
          </div>

          <div className='col-7' >
            <h4> Resultados </h4>
            <hr/>

            {

             (q === '')
                ? <div className='alert alert-info'> Buscar un Heroe</div>
                : ( heroesFileted.length === 0 )
                && <div className='alert alert-danger'> No hay Resultados {q} </div>

              
            }

            {
              heroesFileted.map( hero => ( 
                <HeroCard
                  key={hero.id}
                  {...hero}
                />
                ))
              }
          </div>

        </div>
    </>
  )
}
