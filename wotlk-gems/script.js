// Fetch the JSON file
fetch('gems.json')
  .then(response => response.json())
  .then(data => {
    const gemsContainer = document.getElementById('gems-container');

    // Loop through the gems data
    data.gems.forEach(gem => {
      // Create a gem card element
      const gemCard = document.createElement('div');
      gemCard.className = 'gem-card';

      // Populate the gem card with data
      gemCard.innerHTML = `
        <div class="left-divider">
            <img src="media/${gem.icon}.jpg" alt="${gem.icon}">
            <p>${gem.color}</p>
        </div>
        <div class="right-divider">
            <h1 class="card-title">${gem.name} ${gem.status ? '✔️' : '❌'}</h3>
            <p>${gem.stats}</p>
            <p class="currency">Cost: 4<img src="media/inv_misc_gem_variety_01.gif" alt="inv_misc_gem_variety_01"></p>
            <div class="members">
              ${gem.members.map(member => `<p class="classes ${member.class.toLowerCase()}"><span class="icon"></span>${member.name}</p>`).join('')}
            </div>
        </div>
      `;
      gemCard.classList.add(`${gem.status ? 'status-yes' : 'status-no'}`);

      // Append the gem card to the container
      gemsContainer.appendChild(gemCard);
    });
  })
  .catch(error => console.log(error));
