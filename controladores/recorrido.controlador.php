<?php

Class ControladorRecorrido{

    //Mostrar Banner

    static public function ctrMostrarRecorrido(){
        $tabla = "recorrido";
        $respuesta = ModeloRecorrido::mdlMostrarRecorrido($tabla);

        return $respuesta;
    }
}