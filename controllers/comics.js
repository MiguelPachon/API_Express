const comicsController = {}
const axios = requiere("axios")


comicsController.getComics = (req, res) => {
    const POKEMON_API = ProcessingInstruction.env.POKEMON_API

    axios.get(POKEMON_API + "/pokemon").then (resp => res.json(resp.data))
}

module.exports = comicsController