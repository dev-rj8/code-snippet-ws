var fs = require('fs');

module.exports = function(app) {
    
    app.get("/", function(req, res){
        res.send("<h1>Hello Code Snippet!</h1> <br> <p> Web Service under construction</p>");
    });
    
    app.get('/snippets', function(req, res){
        
        var snippets = [];

        //res.send("/snippets <br> get request");
        fs.readdir("snippet_files/", function(err, files) {
            for(i in files){
                var data = fs.readFileSync('./snippet_files/'+files[i], 'utf8');
                snippets.push({ name : files[i], content : data});
            }
            res.send(JSON.stringify(snippets));
        });
    });
    
    app.get('/snippets/hellofile', function(req, res){
        fs.readFile('./snippet_files/HelloJava.java', 'utf8',function(err, data){
            
            if(err){
                res.send(err);
            } else {
                res.send("Below content from Hello snippet.txt file"+"<br><pre><code>"+data+"</code></pre>");
            }
        });
    });
    
    
}