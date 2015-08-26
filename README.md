# bashParser

Interesting:

1) Difference in page loading. HTML changes if Search button is clicked ! 
  -> before:  code_count,issues etc. is in <inframe>/after: no <inframe> - info on page itself
  
Implemented:

cheerio_eq [https://www.npmjs.com/package/cheerio-eq] -> easier access for nested objects

Problems:

curl- -> no respond on search request web at all // works on web of specific repositories only

Ideology:
  
  $ curl -s https://github.com/search?utf8=%E2%9C%93&q=gulp&type=Repositories&ref=searchresults 
  | cheerio div[class=collumns] | parser.js > result.txt
  
  -> curl returns web-context -> cherrio_cli takes specific part of html -> parser.js takes only important info 
  -> result.txt contains wanted info

  
