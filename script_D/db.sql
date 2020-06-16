-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2020-06-16 23:21:15.277

-- tables
-- Table: Carrito
CREATE TABLE Carrito (
    idCarrito int NOT NULL AUTO_INCREMENT,
    idUser int NOT NULL,
    CONSTRAINT Carrito_pk PRIMARY KEY (idCarrito)
);

-- Table: Categoria
CREATE TABLE Categoria (
    idCategoria int NOT NULL AUTO_INCREMENT,
    name varchar(15) NOT NULL,
    CONSTRAINT Categoria_pk PRIMARY KEY (idCategoria)
);

-- Table: Conductor
CREATE TABLE Conductor (
    idConductor int NOT NULL AUTO_INCREMENT,
    name varchar(45) NOT NULL,
    CONSTRAINT Conductor_pk PRIMARY KEY (idConductor)
);

-- Table: DetalleCarrito
CREATE TABLE DetalleCarrito (
    idDetalleCarrito int NOT NULL AUTO_INCREMENT,
    Producto_idProducto int NOT NULL,
    idPago int NOT NULL,
    idCarrito int NOT NULL,
    precioTotal decimal(3,2) NOT NULL,
    cantProducto int NOT NULL,
    direccion varchar(45) NOT NULL,
    fechaCreada date NOT NULL,
    comentarios varchar(100) NOT NULL,
    idUbicacion int NOT NULL,
    CONSTRAINT DetalleCarrito_pk PRIMARY KEY (idDetalleCarrito)
);

-- Table: Estado
CREATE TABLE Estado (
    idEstado int NOT NULL AUTO_INCREMENT,
    Estado varchar(20) NOT NULL,
    CONSTRAINT Estado_pk PRIMARY KEY (idEstado)
);

-- Table: FormaPago
CREATE TABLE FormaPago (
    idPago int NOT NULL,
    name varchar(40) NOT NULL,
    CONSTRAINT FormaPago_pk PRIMARY KEY (idPago)
);

-- Table: Orden
CREATE TABLE Orden (
    idOrden int NOT NULL AUTO_INCREMENT,
    idDetalleCarrito int NOT NULL,
    idEstado int NOT NULL,
    idConductor int NOT NULL,
    idVendedor int NOT NULL,
    CONSTRAINT Orden_pk PRIMARY KEY (idOrden)
);

-- Table: Producto
CREATE TABLE Producto (
    idProducto int NOT NULL AUTO_INCREMENT,
    idCategoria int NOT NULL,
    name varchar(15) NOT NULL,
    image varchar(300) NOT NULL,
    precio double(3,2) NOT NULL,
    stock int NOT NULL,
    CONSTRAINT Producto_pk PRIMARY KEY (idProducto)
);

-- Table: Rol
CREATE TABLE Rol (
    idRol int NOT NULL AUTO_INCREMENT,
    nombreRol varchar(40) NOT NULL,
    CONSTRAINT Rol_pk PRIMARY KEY (idRol)
);

-- Table: Ubicacion
CREATE TABLE Ubicacion (
    idUbicacion int NOT NULL,
    Distrito varchar(25) NOT NULL,
    Precio decimal(3,2) NOT NULL,
    CONSTRAINT Ubicacion_pk PRIMARY KEY (idUbicacion)
);

-- Table: User
CREATE TABLE User (
    idUser int NOT NULL AUTO_INCREMENT,
    pass varchar(8) NOT NULL,
    RUC varchar(11) NULL,
    DNI int NULL,
    Apellidos varchar(20) NOT NULL,
    Nombres varchar(20) NOT NULL,
    idRol int NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (idUser)
);

-- Table: Vendedor
CREATE TABLE Vendedor (
    idVendedor int NOT NULL AUTO_INCREMENT,
    name int NOT NULL,
    CONSTRAINT Vendedor_pk PRIMARY KEY (idVendedor)
);

-- foreign keys
-- Reference: Carrito_User (table: Carrito)
ALTER TABLE Carrito ADD CONSTRAINT Carrito_User FOREIGN KEY Carrito_User (idUser)
    REFERENCES User (idUser);

-- Reference: DetalleCarrito_Carrito (table: DetalleCarrito)
ALTER TABLE DetalleCarrito ADD CONSTRAINT DetalleCarrito_Carrito FOREIGN KEY DetalleCarrito_Carrito (idCarrito)
    REFERENCES Carrito (idCarrito);

-- Reference: DetalleCarrito_Pago (table: DetalleCarrito)
ALTER TABLE DetalleCarrito ADD CONSTRAINT DetalleCarrito_Pago FOREIGN KEY DetalleCarrito_Pago (idPago)
    REFERENCES FormaPago (idPago);

-- Reference: DetalleCarrito_Producto (table: DetalleCarrito)
ALTER TABLE DetalleCarrito ADD CONSTRAINT DetalleCarrito_Producto FOREIGN KEY DetalleCarrito_Producto (Producto_idProducto)
    REFERENCES Producto (idProducto);

-- Reference: DetalleCarrito_Ubicacion (table: DetalleCarrito)
ALTER TABLE DetalleCarrito ADD CONSTRAINT DetalleCarrito_Ubicacion FOREIGN KEY DetalleCarrito_Ubicacion (idUbicacion)
    REFERENCES Ubicacion (idUbicacion);

-- Reference: Orden_Conductor (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_Conductor FOREIGN KEY Orden_Conductor (idConductor)
    REFERENCES Conductor (idConductor);

-- Reference: Orden_DetalleCarrito (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_DetalleCarrito FOREIGN KEY Orden_DetalleCarrito (idDetalleCarrito)
    REFERENCES DetalleCarrito (idDetalleCarrito);

-- Reference: Orden_Estado (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_Estado FOREIGN KEY Orden_Estado (idEstado)
    REFERENCES Estado (idEstado);

-- Reference: Orden_Vendedor (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_Vendedor FOREIGN KEY Orden_Vendedor (idVendedor)
    REFERENCES Vendedor (idVendedor);

-- Reference: Producto_Categoria (table: Producto)
ALTER TABLE Producto ADD CONSTRAINT Producto_Categoria FOREIGN KEY Producto_Categoria (idCategoria)
    REFERENCES Categoria (idCategoria);

-- Reference: User_Table_24 (table: User)
ALTER TABLE User ADD CONSTRAINT User_Table_24 FOREIGN KEY User_Table_24 (idRol)
    REFERENCES Rol (idRol);

-- End of file.

