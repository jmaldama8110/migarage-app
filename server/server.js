const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;

const resourceFolder = path.join(__dirname,'../public')

app.use( express.static(resourceFolder) );

app.get('*',(req, res)=>{
    res.sendFile( path.join(resourceFolder,'index.html') );
});

app.listen(port,() => {
    console.log('public folder...',resourceFolder);
    console.log('Express server is up..',port);
});