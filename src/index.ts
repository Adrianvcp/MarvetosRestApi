import express, { Application } from "express";
import indexRoutes from "./routes/indexRoutes";

//Rol
import rolRoutes from "./routes/rolRoutes";
//User
import userRouter from "./routes/userRoutes";
//Carrito
import carritoRoute from "./routes/carritoRoute";

//Importamos categoria
import categoriaRoutes from "./routes/categoriaRoutes";

//Importamos Producto

import productoRoutes from "./routes/productoRoutes";

//Importamos DetalleCarrito
import detallecarritoRoutes from "./routes/detalleCarritoRoutes";

//librerias
import morgan from "morgan";
import cors from "cors";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 5000);
    this.app.use(morgan("dev")); // permite vizulizar las peticiones al servidor
    this.app.use(cors());
    this.app.use(express.json()); //permite utilizar archivos json
    this.app.use(express.urlencoded({ extended: false })); //formularios
  }

  //rutas
  routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/rol", rolRoutes);
    this.app.use("/api/user", userRouter);
    this.app.use("/api/cart", carritoRoute);
    this.app.use("/api/categoria", categoriaRoutes);
    this.app.use("/api/producto", productoRoutes);
    this.app.use("/api/detalleCarrito", detallecarritoRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
