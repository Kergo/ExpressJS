const formidable = require('formidable');
const Image = require('mongoose').model('Image');
const util = require('util')


//SECURITY ISSUE ON THE HTML FILE !!!GIVING DATABASE INFORMATION

module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}

function addImage(req, res) {
  const form = formidable.IncomingForm();

    //   form.parse(req, function (err, fields, files) {

    //   //const name = fields.tagName;
    //   res.writeHead(200, {'content-type': 'text/plain'});
    //   res.write('received upload:\n\n');
    //   res.end(util.inspect({fields: fields, files: files}))
    // });



  form.parse(req, (err, fields, files) => {
    if (err) {
      throw err;
    }

    const tags = fields.tagsID.split(',').reduce((a, c) => {
      if (a.includes(c) || c.length === 0) {
        return a;
      } else {
        a.push(c);
        return a;
      }
    },[]);

    const image = {
      url: fields.imageUrl,
      title: fields.imageTitle,
      description: fields.description,
      tags
    }

    Image.create(image).then(image => {
      res.writeHead(302, { 'location': '/' });
      res.end();
    }).catch(err => {
      console.log(err);
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.write('500 Server Error');
      res.end();
    });
  });
}