const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Créer une personne
router.post('/people', personController.createPerson);

// Lire toutes les personnes
router.get('/people', personController.getPeople);

// Lire une personne par ID
router.get('/people/:id', personController.getPersonById);

// Mettre à jour une personne par ID
router.put('/people/:id', personController.updatePerson);

// Supprimer une personne par ID
router.delete('/people/:id', personController.deletePerson);

module.exports = router;
