async function getAllCharacters(request, response, next) {
  try {
    return response.status(200).send({
      status: 200,
      data: [
        {
          id: 1,
          name: 'Obi-Wan Kenoby',
          class: 'Jedi Knight',
          type: 'human',
          order: 'Jedi',
          home_planet: 'Stewjon',
        },
        {
          id: 2,
          name: 'Anakyn Skywalker',
          class: 'Jedi apprentice (padawan)',
          type: 'human',
          order: 'Jedi',
          home_planet: 'Tattoine',
        },
      ],
    });
  } catch (err) {
    next(err);
  }
}

module.exports = getAllCharacters;
