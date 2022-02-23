import { heroes } from "../data/heroes"


export const getHeroeById = ( id = '') => {
    console.log('Heroe Llmado')
    return heroes.find( hero => hero.id === id)
}