const submitContactForm = () => {
    alert('Thankyou  for submitting the form');
}

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