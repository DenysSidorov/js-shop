
export default (req, res, next)=>{
  console.log(' ------------------', 1);
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    console.log(' ------------------', 2);
    res.redirect('https://' + req.headers.host + req.url);
  }
}
