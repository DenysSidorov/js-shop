export default (req, res, next) => {
  var counter = 1;
  console.log(' ------------------', 1);
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    console.log(' ------------------', 2);
    console.log('------ ', counter);
    if (counter === 1) {
      ++counter;
      res.redirect('https://' + req.headers.host + req.url);
    } else {
      next();
    }
  }
}
