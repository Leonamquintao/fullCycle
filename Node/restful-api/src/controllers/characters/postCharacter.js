async function postCharacter(request, response, next) {
  try {
    const payload = request.body;
    return response.status(200).send({
      status: 201,
      data: payload,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = postCharacter;
