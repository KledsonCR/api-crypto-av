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
}

module.exports = WalletController