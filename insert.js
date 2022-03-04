
var mysql = require('mysql');
var http = require('http');
var connectionDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'test'
  })
 
  connectionDb.connect(function(error) {
     if(error)
     console.log('amjiltgui db');
     else(error)
     console.log('Amjilttai db');
   });

http.createServer(function(request, response){

   if( request.url == '/select' ){
    var selectQuery = "SELECT *FROM bagsh ";
    connectionDb.query(selectQuery,function(error,result){
        if(error)
        console.log("amjiltguii");
        else
        {
            console.log(result);
            var htmlText = `<table style="width:100% ; border: 1px solid;border-collapse: collapse;text-align: center">
   <tr style="width:100% ;text-align:center">
     <th style="border: 1px solid;border-collapse: collapse;">Ner</th>
     <th style="border: 1px solid;border-collapse: collapse;">Ordog hicheel</th>
   </tr>`
   for (const object of result) {
    htmlText += `<tr style="width:100% ;text-align: center">
    <td style="border: 1px solid;border-collapse: collapse;" >${object.ner}</td>
    <td style="border: 1px solid;border-collapse: collapse;">${object.ordog_hicheel}</td>
  </tr>`
   }
   htmlText +='</table>'
   response.writeHead(200,{'Content-Type':"text/html"});
    response.end(htmlText);
            
        }


    })
  
   }else if ( request.url == '/update' ){
    var updateQuery = "UPDATE  bagsh SET ner = 'uchral' WHERE ordog_hicheel = 'web-1'";
    connectionDb.query(updateQuery,function(error,result){
        if(error)
        console.log(" update amjiltguii");
        else
        {
            console.log(result);
            var htmlText = `<table style="width:100% ; border: 1px solid;border-collapse: collapse;text-align: center">
   <tr style="width:100% ;text-align:center">
     <th style="border: 1px solid;border-collapse: collapse;">Ner</th>
     <th style="border: 1px solid;border-collapse: collapse;">Ordog hicheel</th>
   </tr>`
   for (const object of result.affectedRow) {
    htmlText += `<tr style="width:100% ;text-align: center">
    <td style="border: 1px solid;border-collapse: collapse;" >${object.ner}</td>
    <td style="border: 1px solid;border-collapse: collapse;">${object.ordog_hicheel}</td>
  </tr>`
   }
   htmlText +='</table>'
   response.writeHead(200,{'Content-Type':"text/html"});
    response.end(htmlText);
            
        }


    })
   }
   
}).listen(8080)

// var updateQuery = "UPDATE  bagsh SET ner = 'uchral' WHERE ordog_hicheel = 'web-1'";
// connectionDb.query(updateQuery,function(error,result){
//     if(error)
//     console.log(" update amjiltgui");
//     else
//     console.log(" update amjilttai");
// });
var deleteQuery = "DELETE FROM bagsh WHERE ner = 'uchral' ";
connectionDb.query(deleteQuery,function(error,result){
    if(error)
    console.log("amjilttai ustglla");
    else
    console.log("delete uildel amjilttai : " + result.affectedRow);
});

/*
  var createQuery = "CREATE TABLE bagsh (ner VARCHAR(50), ordog_hicheel VARCHAR (50))";
  connectionDb.query(createQuery, function(error){
if (error)
console.log("table uussengu");
else
console.log("table uussen");
  });
  
  var deleteQuery = "DELETE FROM bagsh WHERE ner = 'orgil' ";
  connectionDb.query(deleteQuery,function(error,result){
      if(error)
      console.log("amjilttai ustglla");
      else
      console.log("delete uildel amjilttai : " + result.affectedRow);
  });

  var updateQuery = "UPDATE  bagsh SET ner = 'uchral' WHERE ordog_hicheel = 'web-1'";
  connectionDb.query(updateQuery,function(error,result){
      if(error)
      console.log(" update amjiltgui");
      else
      console.log(result.affectedRow+" update amjilttai");
  });

  var selectQuery = "SELECT *FROM bagsh ";
  connectionDb.query(selectQuery,function(error,result){
      if(error)
      console.log("amjiltguii");
      else
      console.log(result);
  });

 */