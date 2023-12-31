document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour créer une personne
    function createPerson() {
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const favoriteFoods = document.getElementById('favoriteFoods').value.split(',');
  
      fetch('/people', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, favoriteFoods }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error creating person:', error));
    }
  
    // Charger la liste des personnes au chargement de la page
    fetch('/people')
      .then(response => response.json())
      .then(data => {
        const personList = document.getElementById('person-list');
        data.forEach(person => {
          const li = document.createElement('li');
          li.textContent = `${person.name} - Age: ${person.age} - Favorite Foods: ${person.favoriteFoods.join(', ')}`;
          personList.appendChild(li);
        });
      })
      .catch(error => console.error('Error getting people:', error));
  });
  