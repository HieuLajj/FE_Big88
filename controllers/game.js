let fs = require('fs')
module.exports = function(app){
    app.get("/", function(req,res){
        res.render("layout.ejs");
    })
    app.get('/TemplateData/favicon.ico', function(req,res){
        fs.createReadStream("./views/TemplateData/favicon.ico").pipe(res);
    })
    app.get('/web3/index.js', function(req,res){
        fs.createReadStream("./views/web3/index.js").pipe(res);
    })

    app.get('/web3/index.js', function(req,res){
        fs.createReadStream("./views/web3/index.js").pipe(res);
    })
    app.get('/TemplateData/style.css', function(req,res){
        fs.createReadStream("./views/TemplateData/style.css").pipe(res);
    })
    app.get('/TemplateData/webgl-logo.png', function(req,res){
        fs.createReadStream("./views/TemplateData/webgl-logo.png").pipe(res);
    })
    app.get('/TemplateData/fullscreen-button.png', function(req,res){
        fs.createReadStream("./views/TemplateData/fullscreen-button.png").pipe(res);
    })
    app.get('/TemplateData/unity-logo-dark.png', function(req,res){
        fs.createReadStream("./views/TemplateData/unity-logo-dark.png").pipe(res);
    })
    app.get('/TemplateData/progress-bar-empty-dark.png', function(req,res){
        fs.createReadStream("./views/TemplateData/progress-bar-empty-dark.png").pipe(res);
    })
    app.get('/TemplateData/progress-bar-full-dark.png', function(req,res){
        fs.createReadStream("./views/TemplateData/progress-bar-full-dark.png").pipe(res);
    })
    app.get('/network.js', function(req,res){
        fs.createReadStream("./views/network.js").pipe(res);
    })
    app.get('/web3/lib/web3modal.js', function(req,res){
        fs.createReadStream("./views/web3/lib/web3modal.js").pipe(res);
    })
    app.get('/web3/lib/web3.min.js', function(req,res){
        fs.createReadStream("./views/web3/lib/web3.min.js").pipe(res);
    })
    app.get('/Build/export2.loader.js', function(req,res){
        fs.createReadStream("./views/Build/export2.loader.js").pipe(res);
    })
    app.get('/Build/export2.framework.js', function(req,res){
        fs.createReadStream("./views/Build/export2.framework.js").pipe(res);
    })
    app.get('/Build/export2.data', function(req,res){
        fs.createReadStream("./views/Build/export2.data").pipe(res);
    })
    app.get('/Build/export2.wasm', function(req,res){
        fs.createReadStream("./views/Build/export2.wasm").pipe(res);
    })
   
}