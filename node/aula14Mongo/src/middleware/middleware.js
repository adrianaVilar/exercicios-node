exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {
    // console.log();
    // req.body.cliente = req.body.cliente.replace("Vilar", "Corrêa");
    // console.log(`Você postou ${req.body.cliente}`);
    // console.log();
  }

  next();
};
