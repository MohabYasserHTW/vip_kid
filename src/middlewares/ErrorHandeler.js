

 const ErrorHandeler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  } else {
    console.log(err);
    res.status(err.code);
    res.json({ err: { message: err.message, code: err.code } });
  }
};

module.exports = ErrorHandeler
