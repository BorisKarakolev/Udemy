const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');


yargs.command({
    command: 'add',
    describe: 'Adding the notes.',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.description)
        
})

yargs.command({
    command: 'remove',
    describe: 'Removing the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNotes(argv.title)
})


yargs.parse();