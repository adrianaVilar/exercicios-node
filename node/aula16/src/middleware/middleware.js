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
