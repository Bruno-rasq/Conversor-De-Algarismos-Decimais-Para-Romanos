const os = require('os');

let { freemem, totalmem } = os;

const free = parseInt(freemem) / 1024 /1024;
const total = parseInt(totalmem) / 1024 /1024;
const percent = parseInt(free/total)*100;

const stats = {
    free: `${free}MB`,
    total: `${total}MB`,
    usage: `${percent}%`
};

console.table(stats)