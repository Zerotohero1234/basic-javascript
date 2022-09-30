// camelCase

const blueHouse = {
    name:'Anouwath'
};

// snake-case

const blue_house = {};


// https://github.com/airbnb/javascript

function getKey(k) {
    return `a key named ${k}`;
}

const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};


console.log(obj);