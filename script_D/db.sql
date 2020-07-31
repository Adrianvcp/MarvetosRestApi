create database Marvetos
use Marvetos

-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2020-07-30 15:40:33.762

-- tables
-- Table: Categoria
CREATE TABLE Categoria (
    idCategoria int NOT NULL AUTO_INCREMENT,
    name varchar(15) NOT NULL,
    CONSTRAINT Categoria_pk PRIMARY KEY (idCategoria)
);

-- Table: Conductor
CREATE TABLE Conductor (
    idConductor int NOT NULL,
    Nombres varchar(20) NOT NULL,
    Apellidos varchar(20) NOT NULL,
    DNI varchar(8) NOT NULL,
    telefono int NOT NULL,
    email varchar(100) NOT NULL,
    CONSTRAINT Conductor_pk PRIMARY KEY (idConductor)
);

-- Table: Contacto
CREATE TABLE Contacto (
    idContacto int NOT NULL,
    email varchar(30) NOT NULL,
    name varchar(30) NOT NULL,
    mensaje varchar(100) NOT NULL,
    CONSTRAINT Contacto_pk PRIMARY KEY (idContacto)
);

-- Table: DetalleCarrito
CREATE TABLE DetalleCarrito (
    idDetalleCarrito int NOT NULL AUTO_INCREMENT,
    idOrden int NOT NULL,
    idProducto int NOT NULL,
    subTotal decimal(6,2) NOT NULL,
    cantProducto int NOT NULL,
    TNote varchar(300) NULL,
    CONSTRAINT DetalleCarrito_pk PRIMARY KEY (idDetalleCarrito,idOrden,idProducto)
);

-- Table: DiaDescuento
CREATE TABLE DiaDescuento (
    idDiaDescuento int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    pDescuento decimal(5,2) NOT NULL,
    CONSTRAINT DiaDescuento_pk PRIMARY KEY (idDiaDescuento)
);

-- Table: Estado
CREATE TABLE Estado (
    idEstado int NOT NULL AUTO_INCREMENT,
    Estado varchar(20) NOT NULL,
    CONSTRAINT Estado_pk PRIMARY KEY (idEstado)
);

-- Table: FormaPago
CREATE TABLE FormaPago (
    idPago int NOT NULL AUTO_INCREMENT,
    name varchar(40) NOT NULL,
    CONSTRAINT FormaPago_pk PRIMARY KEY (idPago)
);

-- Table: Marca
CREATE TABLE Marca (
    idMarca int NOT NULL,
    Name int NOT NULL,
    CONSTRAINT Marca_pk PRIMARY KEY (idMarca)
);

-- Table: Orden
CREATE TABLE Orden (
    idOrden int NOT NULL AUTO_INCREMENT,
    idEstado int NOT NULL,
    idUser int NOT NULL,
    fechaOrden varchar(60) NOT NULL,
    fechaEntrega varchar(60) NOT NULL,
    Comentario varchar(200) NOT NULL,
    Direccion varchar(100) NOT NULL,
    PrecioTotal decimal(6,2) NOT NULL,
    idPago int NOT NULL,
    bDescuento bool NOT NULL,
    idConductor int NULL,
    idUbicacion int NOT NULL,
    idVendedor int NOT NULL,
    CONSTRAINT Orden_pk PRIMARY KEY (idOrden)
);

-- Table: Producto
CREATE TABLE Producto (
    idProducto int NOT NULL AUTO_INCREMENT,
    idCategoria int NOT NULL,
    name varchar(100) NOT NULL,
    image varchar(600) NOT NULL,
    precio double(5,2) NOT NULL,
    stock int NOT NULL,
    idUnidad int NOT NULL,
    descripcion varchar(600) NOT NULL,
    idMarca int NOT NULL,
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
    idUbicacion int NOT NULL AUTO_INCREMENT,
    idDiaDescuento int NOT NULL,
    Distrito varchar(25) NOT NULL,
    Precio decimal(6,2) NOT NULL,
    CONSTRAINT Ubicacion_pk PRIMARY KEY (idUbicacion)
);

-- Table: Unidad
CREATE TABLE Unidad (
    idUnidad int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    CONSTRAINT Unidad_pk PRIMARY KEY (idUnidad)
);

-- Table: User
CREATE TABLE User (
    idUser int NOT NULL AUTO_INCREMENT,
    email varchar(100) NOT NULL,
    pass varchar(8) NOT NULL,
    RUC varchar(11) NULL,
    DNI varchar(8) NULL,
    Apellidos varchar(20) NOT NULL,
    Nombres varchar(20) NOT NULL,
    idRol int NOT NULL,
    NombreEmpresa varchar(100) NULL,
    telefono int NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (idUser)
);

-- Table: Vendedor
CREATE TABLE Vendedor (
    idVendedor int NOT NULL,
    Nombres varchar(20) NOT NULL,
    Apellidos varchar(20) NOT NULL,
    DNI varchar(8) NOT NULL,
    telefono int NOT NULL,
    email varchar(100) NOT NULL,
    CONSTRAINT Vendedor_pk PRIMARY KEY (idVendedor)
);

-- foreign keys
-- Reference: DetalleCarrito_Orden (table: DetalleCarrito)
ALTER TABLE DetalleCarrito ADD CONSTRAINT DetalleCarrito_Orden FOREIGN KEY DetalleCarrito_Orden (idOrden)
    REFERENCES Orden (idOrden);

-- Reference: DetalleCarrito_Producto (table: DetalleCarrito)
ALTER TABLE DetalleCarrito ADD CONSTRAINT DetalleCarrito_Producto FOREIGN KEY DetalleCarrito_Producto (idProducto)
    REFERENCES Producto (idProducto);

-- Reference: Orden_Conductor (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_Conductor FOREIGN KEY Orden_Conductor (idConductor)
    REFERENCES Conductor (idConductor);

-- Reference: Orden_Estado (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_Estado FOREIGN KEY Orden_Estado (idEstado)
    REFERENCES Estado (idEstado);

-- Reference: Orden_FormaPago (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_FormaPago FOREIGN KEY Orden_FormaPago (idPago)
    REFERENCES FormaPago (idPago);

-- Reference: Orden_Ubicacion (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_Ubicacion FOREIGN KEY Orden_Ubicacion (idUbicacion)
    REFERENCES Ubicacion (idUbicacion);

-- Reference: Orden_User (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_User FOREIGN KEY Orden_User (idUser)
    REFERENCES User (idUser);

-- Reference: Orden_Vendedor (table: Orden)
ALTER TABLE Orden ADD CONSTRAINT Orden_Vendedor FOREIGN KEY Orden_Vendedor (idVendedor)
    REFERENCES Vendedor (idVendedor);

-- Reference: Producto_Categoria (table: Producto)
ALTER TABLE Producto ADD CONSTRAINT Producto_Categoria FOREIGN KEY Producto_Categoria (idCategoria)
    REFERENCES Categoria (idCategoria);

-- Reference: Producto_Marca (table: Producto)
ALTER TABLE Producto ADD CONSTRAINT Producto_Marca FOREIGN KEY Producto_Marca (idMarca)
    REFERENCES Marca (idMarca);

-- Reference: Producto_Unidad (table: Producto)
ALTER TABLE Producto ADD CONSTRAINT Producto_Unidad FOREIGN KEY Producto_Unidad (idUnidad)
    REFERENCES Unidad (idUnidad);

-- Reference: Ubicacion_DiaDescuento (table: Ubicacion)
ALTER TABLE Ubicacion ADD CONSTRAINT Ubicacion_DiaDescuento FOREIGN KEY Ubicacion_DiaDescuento (idDiaDescuento)
    REFERENCES DiaDescuento (idDiaDescuento);

-- Reference: User_Table_24 (table: User)
ALTER TABLE User ADD CONSTRAINT User_Table_24 FOREIGN KEY User_Table_24 (idRol)
    REFERENCES Rol (idRol);

-- End of file.


/* TRIGGER CONDUCTOR Y VENDEDOR */
Delimiter $$
CREATE TRIGGER Conduc_Vend_Add
after insert 
on user
For Each Row
Begin
	IF new.idRol = 4
		THEN INSERT INTO `conductor` (`idConductor`, `Nombres`, `Apellidos`, `DNI`, `telefono`, `email`) VALUES
		(new.idUser, new.Nombres, new.apellidos, new.dni,new.telefono, new.email);
	END IF;
    
    IF new.idRol = 3
		THEN INSERT INTO `vendedor` (`idVendedor`, `Nombres`, `Apellidos`, `DNI`, `telefono`, `email`) VALUES
		(new.idUser, new.Nombres, new.apellidos, new.dni,new.telefono, new.email);
	END IF;
End$$
Delimiter $$

