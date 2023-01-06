//methodos: index, show, update, store, destroy

/*
index: listagem de sessoes
store: Cria uma sessao
show: Quando queremos listar uma unica sessao
update: Quando queremos alterar alguma sessao
destroy: Quando queremos deletar uam sessao
*/

import User from '../Models/User'

class SessionController {
  async store(req, res) {
    const { email } = req.body

    //Verficando se usuario já existe
    let user = await User.findOne({ email })

    if (!user) {
      user = await User.create({ email })
    }

    return res.json(user)
  }
}

export default new SessionController()
