import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncComponent = (element) => {
  const id1 = "5d86371f9f80b591f499df32";

  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));
};

/**
 *
 * @param {String} id
 * @returns
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) 
    throw`The hero with id ${id} not found`;

  return hero.name;
};
