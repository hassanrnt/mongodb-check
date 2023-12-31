const Person = require('../models/personModel');

// Créer une personne
exports.createPerson = async (req, res) => {
  try {
    const { name, age, favoriteFoods } = req.body;
    const newPerson = new Person({ name, age, favoriteFoods });
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Lire toutes les personnes
exports.getPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    console.error('Error getting people:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Lire une personne par ID
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    console.error('Error getting person by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Mettre à jour une personne par ID
exports.updatePerson = async (req, res) => {
  try {
    const { name, age, favoriteFoods } = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      { name, age, favoriteFoods },
      { new: true, runValidators: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Supprimer une personne par ID
exports.deletePerson = async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndRemove(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(deletedPerson);
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
