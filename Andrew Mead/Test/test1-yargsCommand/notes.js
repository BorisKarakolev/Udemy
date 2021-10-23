const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title, description) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            description: description
        })
        saveNotes(notes);
        console.log(chalk.green.bold('New note added'))
    } else {
        console.log(chalk.red.bold('This note is already taken'))
    }
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const removeNotes = function(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.blue.bold('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.bold('Note not found'))
    }
    
}


module.exports = {
    addNote: addNote,
    removeNotes: removeNotes
}