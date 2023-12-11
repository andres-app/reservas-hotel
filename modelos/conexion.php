<?php

class Conexion {
    static public function conectar() {
        $host = "localhost";
        $dbname = "reservas-hotel";
        $usuario = "root"; // Reemplaza 'tu_usuario' con el nombre de usuario de tu base de datos
        $contrasena = ""; // Reemplaza 'tu_contrasena' con la contraseña de tu base de datos

        try {
            $link = new PDO("mysql:host=$host;dbname=$dbname", $usuario, $contrasena);
            $link->exec("set names utf8");
            return $link;
        } catch (PDOException $e) {
            echo 'Error de conexión: ' . $e->getMessage();
            exit; // O maneja el error de alguna manera adecuada para tu aplicación
        }
    }
}
