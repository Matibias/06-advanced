/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"


export const promiseComponent = ( element ) => {

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  }

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
      <h3>${hero1.name}</h3>
      <h3>${hero2.name}</h3>
    `
  }

  const renderError = (error) => {
    element.innerHTML = `
      <h1>Error:</h1>
      <h3>${error}</h3>
    `
  }

  const id1 = "5d86371f233c9f2425f16916";
  const id2 = "5d86371f97c29d020f1e1f6d";


  // Ejecuta todas las promesas al mismo tiempo.
  // recomendable solo si ninguna promesa depende de la respuesta de la otra
  Promise.all([
    findHero(id1),
    findHero(id2),
  ])
  .then(([hero1, hero2]) => renderTwoHeroes(hero1,hero2))
  .catch( renderError )


  //! Forma 2
  // let hero1; 
  // findHero(id1)
  //   .then( hero => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   }).then( hero2 => {
  //     renderTwoHeroes(hero1, hero2)
  //   })
  //   .catch(renderError)


  //! Forma 1
  // findHero(id1)
  //   .then( (hero1) => {

      
  //     findHero(id2)
  //       .then((hero2) => {
  //         renderTwoHeroes(hero1, hero2)
  //       })

  //   } )
  //   .catch(error => renderError(error))
}

/**
 * 
 * @param {String} id 
 * @returns {Promise} 
 */
const findHero = (id) => {

  const promise = new Promise(( resolve, reject) => {

    const hero = heroes.find((hero) => hero.id === id);

    if (hero){
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);

  });

  return promise
}