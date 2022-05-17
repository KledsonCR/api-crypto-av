const database = require('../models')

class WalletController {
    static async pegaTodasWallets(req, res) {
        try {       
          const todasAsWallets  = await database.wallet.findAll()
          return res.status(200).json(todasAsWallets)    
        } catch(error) {
          return res.status(400).json(error.message)
        }
    }

    static async pegaUmaWallet(req, res) {
        const { address } = req.params
        try {
          const umaWallet = await database.wallet.findOne( { 
              where: { 
                  address: Number(address) 
                }
            })
          return res.status(200).json(umaWallet)  
        } catch (error) {
          return res.status(400).json(error.message)
        }
    }

    static async criaWallet(req, res) {
      const novaWallet = req.body 
      try {
        const novaWalletCriada = await database.wallet.create(novaWallet)
        return res.status(201).json(novaWalletCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async atualizaWallet(req, res) {
      const { address } = req.params
      const novosDados = req.body 
      try {
        await database.wallet.update(novosDados, { where: { address: Number(address) }})
        const walletAtualizada = await database.wallet.findOne( { where: { address: Number(address) }})
        return res.status(200).json(walletAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
    }
  }

  static async deletaWallet(req, res){
    const { address } = req.params
    try{
      await database.wallet.destroy( { where: { address: Number(address) }})
      return res.status(200).json( { msg: `address ${address} deletado!` })
     } catch (error){
      return res.status (500).json (error.message)
    }
  }

}

module.exports = WalletController