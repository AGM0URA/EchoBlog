import multer from "multer";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Imagestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";
    if (req.baseUrl.includes("usuarios")) {
      folder = "usuarios";
    } else if (req.baseUrl.includes("postagens")) {
      folder = "postagens";
    }
    cb(null, path.join(__dirname, `../public/${folder}`)); //*aonde vai armazenar as informações
    console.log(folder);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        String(Math.floor(Math.random * 10000)) +
        path.extname(file.originalname)
    );
  },
});

const Imageupload = multer({
  storage: Imagestorage,
  fileFilter(request, file, cb) {
    if (file.originalname.match(/\.(png ||jpg)$/)) {
      return cb(new Error("Por favor, envie apenas jpg ou png"));
    }
    cb(null, true);
  },
});
console.log(Imageupload);

export default Imageupload;
