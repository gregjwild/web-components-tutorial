

class catCard extends HTMLElement {
    constructor() {
        super();

        const catDatabase = {
            wallCat : {
                name: "Wall Cat",
                description: "Wall Cat is Stronk. He lives in a Web Component, but also the wall of my house. We might need to send another cat in to get him.",
                image: "./wall-cat.jpg"
            },
            snoozeCat : {
                name: "Snooze Cat",
                description: "Snooze cat is snoozey. He lives in the corner of my desk.",
                image: "./snooze-cat.JPG"
            },
            defaultCat : {
                name: "Default Cat",
                description: "Default cat, also known as Bongo Cat. He has no outstanding traits, aside being 2 dimensional and having heckin' great rhythm.",
                image: "./bongocat.gif"
            }
        }

        // The Element's Shadow Root.
        let shadow = this.attachShadow({mode: 'open'});

        // Now we create the element's internal Shadow DOM
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        let icon = document.createElement('div');
        icon.setAttribute('class', 'icon');

        const info = document.createElement('div');
        info.setAttribute('class', 'info');

        let img = document.createElement('img');
        
        const infoText = document.createElement('p');

        if (this.getAttribute('cat') == "wall-cat") {
            infoText.textContent = catDatabase.wallCat.description;
            img.src = catDatabase.wallCat.image;
        } else if (this.getAttribute('cat') == "snooze-cat") {
            infoText.textContent = catDatabase.snoozeCat.description;
            img.src = catDatabase.snoozeCat.image;
        } else {
            infoText.textContent = catDatabase.defaultCat.description;
            img.src = catDatabase.defaultCat.image;
        }

        icon.appendChild(img); 

        let style = document.createElement('style');
        style.textContent = 
        `
        :host {
            width: 33%;
            min-width: 177px;
            width: 300px;
        }
        .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2em;
            box-shadow: 3px 3px 5px 1px #888888;
            border-radius: 5%;
            margin: 1em;
            height: 20em;
        }
        .icon {
            border-radius: 50%;   

        }

        img {
            border-radius: 50%;
            max-width: 100%;
            width: 75%;
            height: auto;
            box-shadow: 3px 3px 2px 2px #888888;
            display: block;
            margin: 1em auto;
        }
        
        .info p {
            text-align: center;
        }

        `
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
        info.appendChild(infoText);
    }
}

customElements.define('cat-card', catCard);
