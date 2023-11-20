const HGErrors = require('../util/errorClass');
function customErrorMiddleware(err, req, res, next) {
  if (err instanceof HGErrors) {
    res.status(err.status).json({ success: false, error: err.message });
  } else {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ success: false, error: err.message });
  }
}
module.exports = customErrorMiddleware;
