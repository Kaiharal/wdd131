const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Fort Worth Texas",
        location: "Fort Worth, Texas, United States",
        dedicated: "2023, October 28",
        area: 30000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fort-worth-texas-temple/fort-worth-texas-temple-31684-main.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "2010, November, 21",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    },
    {
        templeName: "Torreon Mexico",
        location: "Torreon, Mexico",
        dedicated: "2022, December 10",
        area: 10000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/torreon-mexico-temple/torreon-mexico-temple-22103-main.jpg"
    }

];

const templeCards = document.getElementById("templeCards");

//makes the base of the cards themselves
const cardMaker = (templeList) => {

    //clears the container before adding new cards
    templeCards.innerHTML = "";

    //pools the information of each temple into one div item
    templeList.forEach(
        (temple) => {
            const card = document.createElement("div");
            card.classname = "temple-card";

            const name = document.createElement("h2");
            name.textContent = temple.templeName;
            card.appendChild(name);

            const location = document.createElement("p");
            location.textContent = "Location: " + temple.location;
            card.appendChild(location);

            const dedicated = document.createElement("p");
            dedicated.textContent = "Dedicated: " + temple.dedicated;
            card.appendChild(dedicated);

            const area = document.createElement("p");
            area.textContent = "Area: " + temple.area;
            card.appendChild(area);

            const image = document.createElement("img");
            image.src = temple.imageUrl;
            image.alt = temple.templeName;
            image.loading = "lazy";
            card.appendChild(image);

            //appends the card to the card container
            templeCards.appendChild(card);
        }
    );

};

//this is mostly just the same code for each time period or size - it could probably be more efficient...
const OldFilter = () => {
    const filteredList = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
    );

    cardMaker(filteredList);
}

const NewFilter = () => {
    const filteredList = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
    );

    cardMaker(filteredList);
}

const LargeFilter = () => {
    const filteredList = temples.filter(
        (temple) => temple.area > 90000
    );

    cardMaker(filteredList);
}

const SmallFilter = () => {
    const filteredList = temples.filter(
        (temple) => temple.area < 10000
    );

    cardMaker(filteredList);
}

document.querySelector("nav").addEventListener("click", (event) => {
    event.preventDefault();

    const page = event.target.textContent.toLowerCase().trim();

    switch (page) {
        case "old":
            OldFilter();
            break;
        case "new":
            NewFilter();
            break;
        case "large":
            LargeFilter();
            break;
        case "small":
            SmallFilter();
            break;
        case "home":
            cardMaker(temples);
            break;
        default:

            break;
    }
});

cardMaker(temples);




