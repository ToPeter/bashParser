// WORKS, however HTMLRequest is not as good as curl- 

var cheerio = require('cheerio');
var request = require('request');

var search = "grunt";

request({
    method: 'GET',
    url: 'https://github.com/search?utf8=%E2%9C%93&q='+search+'&type=Repositories&ref=searchresults'
}, function(err, response, body) {
    if (err) return console.error(err);

    // Tell Cherrio to load the HTML
    $ = cheerio.load(body);
    $('nav.menu').each(function() {       
        console.log("Repositories: "+$('span', this).text());
            
    });
});
