async function deleteCharacter(request, response, next) {
  try {
    const id = request.params.id;
    return response.status(200).send({
      status: 200,
      data: id,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = deleteCharacter;
