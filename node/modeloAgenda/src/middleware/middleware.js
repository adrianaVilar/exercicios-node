exports.middlewareGlobal = (req, res, next) => {
  // if (req.body.cliente) {
  // console.log();
  // req.body.cliente = req.body.cliente.replace("Vilar", "Corrêa");
  // console.log(`Você postou ${req.body.cliente}`);
  // console.log();
  // }
  res.locals.umaVariavelLocal = "Este é o valor da variável local";
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && "EBADCSRFTOKEN" === err.code) {
    return res.render("404"); //está sendo usado 404 como exemplo, pq não é o erro 404
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
