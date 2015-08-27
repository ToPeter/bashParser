var htmlparser = require("htmlparser2");
 
 
 
process.stdin.pipe(new htmlparser.WritableStream({
                onopentag : function(tagname, attribs) {
                	
                             if (tagname === "a") {
								
								console.log(attribs.href);
                             } 
                         }

                ontext: function(text){
        					console.log("-->", text);           
                               
                }

                }));
