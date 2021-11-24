// const allowedCors = [
//   'https://api.movies-timtorshin.nomoredomains.monster',
//   'http://api.movies-timtorshin.nomoredomains.monster',
//   'https://movies-timtorshin.nomoredomains.rocks',
//   'http://movies-timtorshin.nomoredomains.rocks',
//   'https://localhost:3000',
//   'http://localhost:3000',
//   'localhost:3000',
// ];

// module.exports = (req, res, next) => {
//   const { origin } = req.headers;
//   const { method } = req;
//   const requestHeaders = req.headers['access-control-request-headers'];
//   const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//   }

//   if (method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
//     res.header('Access-Control-Allow-Headers', requestHeaders);
//     return res.end();
//   }

//   return next();
// };
