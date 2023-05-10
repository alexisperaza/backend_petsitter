const { Router } = require('express');
const { getClients, saveClient, updateClient, deleteClient } = require('../controllers/clientes.controller');
const router = Router();

router.get('/', getClients);
router.post('/register', saveClient);
router.put('/update', updateClient);
router.delete('/delete/:id', deleteClient);


module.exports = router;
 