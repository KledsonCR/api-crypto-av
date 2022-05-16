const { Router } = require('express')
const WalletController = require('../controllers/WalletController')

const router = Router()

router.get('/api/v1/wallet', WalletController.pegaTodasWallets)
router.get('/api/v1/wallet/:id', WalletController.pegaUmaWallet)
router.post('/api/v1/wallet', WalletController.criaWallet)


module.exports = router