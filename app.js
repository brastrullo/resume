'esversion:6';
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
    header = `<!-- Converted from .md file using Showdown.js -->
<!doctype html>
<html class="no-js" lang="">

<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Resume - Bradley Rastrulo (Creative Frontend Developer)</title>
<meta name="description" content="">
<link rel="stylesheet" href="style.css">
</head>

<body>`;
    html = `${header}
${data}
</body>
</html>`;

    fs.writeFile(destination, html, function write(err) {
      if (err) throw err;
      console.log('data > ' + destination);
    });
  }
})();
