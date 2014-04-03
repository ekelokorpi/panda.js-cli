#!/usr/bin/env node

var colors = require('colors');
colors.setTheme({
    url: 'yellow',
    file: 'yellow',
    number: 'cyan',
    title: 'magenta',
    command: 'yellow',
    parameter: 'grey',
    valid: 'green',
    error: 'red'
});

global.commands = ['build', 'server', 'cache', 'test', 'debug'];
var command = commands.indexOf(process.argv[2]) !== -1 ? process.argv[2] : 'help';

if(command === 'offline') command = 'cache'; // Deprecated

require('./' + command + '.js');