const router = require('express').Router();

const {
  getCharacter,
  getAllCharacters,
  postCharacter,
  deleteCharacter,
} = require('../../controllers/characters');

router.get('/characters/:id', getCharacter);

router.get('/characters', getAllCharacters);

router.post('/characters', postCharacter);

router.delete('/characters/:id', deleteCharacter);

module.exports = router;
