const submitContactForm = () => {
    alert('Thankyou  for submitting the form');
}


/**
 * JS to load images asynchronously 
 * images : images data
 * loadImageAsync : function to load images asynchronously using Promise
 * appendImageToContainer : Function to append images to the div
 * loadImages : Load images asynchronously
 */

const images = [
    { url: 'assets/image/gallery/1.jpg', alt: "Image of me on roof top." },
    { url: 'assets/image/gallery/2.jpg', alt: "Image of me on beach." },
    { url: 'assets/image/gallery/3.jpg', alt: "Image of me hill climbing." },
    { url: 'assets/image/gallery/4.jpg', alt: "Image of me in shallow river." },
    { url: 'assets/image/gallery/5.jpg', alt: "Image of me on a ferry top." }
];

async function loadImages() {
    try {
        for (const image of images) {
            const img = await loadImageAsync(image);
            appendImageToContainer(img);
        }
    } catch (error) {
        console.error(error);
    }
}

function loadImageAsync(image) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.alt = image.alt;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image from ${url}`));
    });
}


function appendImageToContainer(img) {
    const galleryDiv = document.getElementById('galleryDiv')
    if (galleryDiv) {
        galleryDiv.appendChild(img);
    }
}

if (window.location.pathname === '/gallery.html') {
    loadImages();
}

/**
 * Closure for screen size
 */

document.addEventListener('DOMContentLoaded', function () {
    function makeSizer(size) {
        return function () {
            document.querySelector('h1').style.fontSize = `${size}px`;
            document.querySelectorAll('main h2').forEach(element => {
                element.style.fontSize = `${size - 5}px`;
            });
            document.querySelectorAll('h3').forEach(element => {
                element.style.fontSize = `${size - 10}px`;
            });
            document.querySelectorAll('h4').forEach(element => {
                element.style.fontSize = `${size - 15}px`;
            });
            document.querySelectorAll('p').forEach(element => {
                element.style.fontSize = `${size - 20}px`;
            });
            document.querySelectorAll('ol li').forEach(element => {
                element.style.fontSize = `${size - 20}px`;
            });
            document.querySelectorAll('td,th').forEach(element => {
                element.style.fontSize = `${size - 20}px`;
            });
        };
    }

    const small = makeSizer(36);
    const medium = makeSizer(40);
    const large = makeSizer(44);


    document.querySelector('#size-s').onclick = small;
    document.querySelector('#size-m').onclick = medium;
    document.querySelector('#size-l').onclick = large;

});

/** Throttling */
const handlerTrigger = (shot) => {
    console.log(shot);
};

const throttleGun = (func, interval) => {
    let shouldFire = true;

    return function () {
        if (shouldFire) {
            func();
            shouldFire = false;
            return new Promise((resolve) => {
                setTimeout(() => {
                    shouldFire = true;
                    resolve();
                }, interval);
            });
        }
    };
};

const machinegunThrottled = throttleGun(() => handlerTrigger('tr'), 100);
const shotgunThrottled = throttleGun(() => handlerTrigger('bang'), 500);

const machinegun = () => machinegunThrottled();
const shotgun = () => shotgunThrottled();


/**
 * JS Assigment - 1
 * Demonstrate to pass function as argument to another function
 * addNumber() , substractNumber(), multipleNumber(), divideNumber() : functions that can be passed as argument
 * operateNumber() : function passing another function as argument 
 */

const addNumber = ({ x, y }) => x + y;
const substractNumber = ({ x, y }) => x - y;
const multipleNumber = ({ x, y }) => x * y;
const divideNumber = ({ x, y }) => x / y;

const operateNumber = ({ x, y, operation }) => operation({ x, y });

console.log(operateNumber({ x: 5, y: 3, operation: addNumber }));


/**
 * JS Assigment - 2
 * Array function to return initials of firstname , lastname string paramters as argument
 * getInitials() : function implementation
 */

const getInitials = ({ firstname, lastname, ...args }) => {
    let initials = firstname.charAt(0);
    const valuesArray = Object.values(args);
    for (const x of valuesArray) {
        initials += x.charAt(0);
    }
    initials += lastname.charAt(0);
    return initials;
}

console.log(getInitials({ firstname: 'Roger', lastname: 'Wagner', middleName: 'John' }));

/**
 * JS assignment on async await 
 */

const getData = (uId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            if (uId === 'skc') {
                resolve(`${uId}@gmail.com`);
            } else {
                reject("error");
            }
        }, 4000);
    });
};

const logProcess = async () => {
    console.log("start");
    try {
        let email = await getData("skc");
        console.log("Email id of the user id is: " + email);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("end");
    }
};

logProcess();

