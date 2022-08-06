async function getCharacter(request, response, next) {
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
          home_planet: 'Tattoine',
        },
      ],
    });
  } catch (err) {
    next(err);
  }
}

module.exports = getCharacter;
