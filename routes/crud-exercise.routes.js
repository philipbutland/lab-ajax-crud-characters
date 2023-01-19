const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();

console.log("HERE")
 
 
router.get('/characters/list', (req, res) => {
  console.log("*****")
  apiService
    .getAllCharacters()
     .then((response) => {
        console.log("List ", response.data)
        res.render('pages/characters-list', { characters: response.data })
     })
   .catch(error => console.log(error));
});
 
 
// Render a form to create a new character.
router.get('/characters/create', (req, res) => {
    console.log("GET NEW CHARACTER")
  // add the line below 
   res.render('pages/new-character-form');
});
 
 
// Submit info to create a new character.
router.post('/characters/create', (req, res) => {
    console.log("POST NEW CHARACTER")
    const characterInfo = req.body;
 
    apiService
     .createCharacter(characterInfo)
     .then((response) => {
 
       res.redirect('/characters/list');
     })
     .catch((error) => console.log(error));
});
 
 
// Render a form to edit a character.
router.get('/characters/edit/:id', (req, res) => {
  const characterId = req.params.id;
  console.log("Edit ", characterId)
 
   apiService
     .getOneCharacter(characterId)
     .then((response) => {
       res.render('pages/edit-character-form', { character: response.data });
     })
     .catch(error => console.log(error));
});
 
 
// Submit info to edit a character with a matching id.
router.post('/characters/edit/:id', (req, res) => {
  const characterId = req.params.id;
  const characterInfo = req.body;
  console.log("ID ", characterId, " , Info: ", characterInfo)
 
   apiService
     .editCharacter(characterId, characterInfo)
     .then((response) => {
 
       res.redirect('/characters/list');
     })
     .catch((error) => console.log(error));
});
 
 
// Delete a character with a matching id
router.get('/Character/delete/:id', (req, res) => {
  const characterId = req.params.id;
  console.log("Delete ", characterId)
 
   apiService
     .deleteCharacter(characterId)
     .then((response) => {
 
       res.redirect(`/movie-characters/list`);
     })
     .catch(error => console.log(error));
});
 
module.exports = router;