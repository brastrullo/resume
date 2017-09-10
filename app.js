(function() {
  var fs        = require('fs');
  var showdown  = require('showdown');
  var converter = new showdown.Converter();

  var file  = 'README.md';
  var destination = 'index.html';

  fs.readFile(file, 'utf8', function read(err, data) {
    var output;

    if (err) throw err;

    output = dataToHtml(data);
    writeToFile(output);
  });

  function dataToHtml(data) {
    return converter.makeHtml(data);
  }

  function writeToFile(data){
    var html,
        header;
    header = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>resume.bradleyrastrullo</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    `
    html = header + data + `
    </body>
    </html>
    `

    fs.writeFile(destination, html, function write(err) {
      if (err) throw err;
      console.log('data > ' + destination);
    });
  }
})();
