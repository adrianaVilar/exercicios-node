import multer from "multer";
import { extname, resolve } from "path";

// Retorna um valor aleatório para que o nome do arquivo nunca seja igual
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  // Para salvar a imagem em uma pasta do servidor
  storage: multer.diskStorage({
    // Local para salvar
    destination: (req, file, cb) => {
      // Esse primeiro parametro receberia um erro se houvesse
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      // Extname: pega a extensão do arquivo
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
