class HouseController {
  async store(req, res) {
    console.log(req.body)
    console.log(req.file)
    return res.json({ mesage: 'API criada' })
  }
}

export default new HouseController()
