const fs = require('fs');
const { userInfo } = require('os');


const book = {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kyosaki'
}

// JSON.stringify e koga od objekt so vrednosti pravime da bide se vo string
const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// JSON.parse e koga od string go vrakame vo normalna sostojba objektot so vrednosti
const bookParsed = JSON.parse(bookJSON);

// console.log(bookParsed.author);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// // console.log(data.title);

const data = fs.readFileSync('1-json.json')
const dataJSON = data.toString();
const dataParsed = JSON.parse(dataJSON)

dataParsed.name = 'Boris'
dataParsed.planet = 'Mars'
dataParsed.age = '22'


const dataBack = JSON.stringify(dataParsed);

fs.writeFileSync('1-json.json', dataBack);