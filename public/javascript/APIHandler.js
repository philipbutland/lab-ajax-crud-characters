class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + '/characters')
      .then(result => console.log(result.data))
      .catch(e => console.log(`Something went wrong getting all characters ${e}`));
    }
  

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
