const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
		charactersAPI.getFullList();

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementsByName("character-id-delete")[0].value)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    name = document.getElementsByName("name").value
    weapon = document.getElementsByName("weapon").value
    occupation = document.getElementsByName("occupation").value
    cartoon = document.getElementsByName("cartoon").value

    charactersAPI = {name, weapon, occupation, cartoon}

  });
});
