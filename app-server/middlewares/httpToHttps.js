export default (req, res, next) => {
  let counter = 1;
  if (req.secure) {
    next();
  } else if (counter === 1) {
    counter += 1;
    res.redirect(`https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
};
