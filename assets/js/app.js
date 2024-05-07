class Star {
    constructor(name, age, color, galaxy, distance)
    { this.name = name; 
        this.age = age;
         this.color = color; 
         this.galaxie = galaxy; 
         this.distance = distance; }



    toHtml()
    {
        const name = document.createElement('p')
        const age = document.createElement('p')
        const color = document.createElement('p')
        const galaxy = document.createElement('p')
        const distance = document.createElement('p')

        name.textContent = this.name
        age.textContent = this.age
        color.textContent = this.color
        galaxy.textContent = this.galaxy
        distance.textContent = this.distance

        const container = document.createElement('div'); 

        container.appendChild(name)
        container.appendChild(age)
        container.appendChild(color)
        container.appendChild(galaxy)
        container.appendChild(distance);

        const starContainer = document.querySelector('.star-container');
        starContainer.appendChild(container);
    }
}


conststars = [
    new Star  ("45IR1", 690000, "#F4F6F4", "Andromeda", 100054),
    new Star("45IR2", 680000, "#F4F5F4", "Andromeda", 100353),
    new Star("45IR3", 670000, "#F4F4F4", "Andromeda", 100454),
    new Star("45IR4", 660000, "#F4F3F4", "Andromeda", 100554),
    new Star("45IR5", 650000, "#F4F2F4", "Andromeda", 100654),
    new Star("45IR6", 640000, "#F4F1F4", "Andromeda", 100754),
    new Star("45IR7", 630000, "#F4F0F4", "Andromeda", 100854),
];

conststars.forEach(Star => {
    Star.toHtml();
  });