const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes');



// YARGS

// Customize yargs
yargs.version('1.1.0');

//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe:'My first description in command!',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.description)
    }
})

//Remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNotes(argv.title);
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'Listing my notes',
    handler () {
        notes.listNotes()
    }
})

//Read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },

    handler (argv) {
        notes.readNote(argv.title)
    }
})



// console.log(yargs.argv);
yargs.parse();

