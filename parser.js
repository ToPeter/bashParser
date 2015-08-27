var fs = require('fs');
var cheerio = require('cheerio')
var cheerioAdv = require('cheerio-advanced-selectors')

// INSTALL : npm install cheerio-advanced-selectors

cheerio = cheerioAdv.wrap(cheerio)
var $ = cheerio.load(fs.readFileSync('/dev/stdin').toString())

console.log($('nav').text());

