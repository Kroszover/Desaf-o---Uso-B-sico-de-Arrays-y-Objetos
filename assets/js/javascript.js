alert("Hola");

/*Requerimientos:
1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de información que contengan los listados, considerando las propiedades establecidas en la descripción. 
2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el nombre del paciente junto con la previsión, separados por un guión (utilizar índices de arreglos para esto). Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre. 
3. Recorrer el arreglo y mostrar su contenido en una tabla.*/


/*1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de información que contengan los listados, considerando las propiedades establecidas en la descripción.  */

let radiologia = [
    //Fila 2 del excel
    {
        hora:           '11:00',
        especialista:   'IGNACIO SCHULZ',
        paciente:       'FRANCISCA  ROJAS',
        rut:            '9878782-1',
        prevision:      'FONASA',
    },
    //Fila 3 del excel
    {
        hora:           '11:30',
        especialista:   'FEDERICO SUBERCASEAUX',
        paciente:       'PAMELA ESTRADA',
        rut:            '15345241-3',
        prevision:      'ISAPRE',

    },
    //Fila 4 del excel
    {
        hora:           '15:00',
        especialista:   'FERNANDO WURTHZ',
        paciente:       'ARMANDO LUNA',
        rut:            '16445345-9',
        prevision:      'ISAPRE',
    },
    //Fila 5 del excel
    {
        hora:           '15:30',
        especialista:   'ANA MARIA GODOY',
        paciente:       'MANUEL GODOY',
        rut:            '17666419-0',
        prevision:      'FONASA',
    },
    //Fila 6 del excel
    {
        hora:           '16:00',
        especialista:   'PATRICIA SUAZO',
        paciente:       'RAMON ULLOA',
        rut:            '14989389-K',
        prevision:      'FONASA',
    },
];

let traumatologia = [
    //Fila 2 del excel
    {
        hora:           '08:00',
        especialista:   'MARIA PAZ ALTUZARRA',
        paciente:       'PAULA SANCHEZ',
        rut:            '15554774-5',
        prevision:      'FONASA',
    },
    //Fila 3 del excel
    {
        hora:           '11:30',
        especialista:   'FEDERICO SUBERCASEAUX',
        paciente:       'PAMELA ESTRADA',
        rut:            '15345241-3',
        prevision:      'ISAPRE',

    },
    //Fila 4 del excel
    {
        hora:           '15:00',
        especialista:   'FERNANDO WURTHZ',
        paciente:       'ARMANDO LUNA',
        rut:            '16445345-9',
        prevision:      'ISAPRE',
    },
    //Fila 5 del excel
    {
        hora:           '15:30',
        especialista:   'ANA MARIA GODOY',
        paciente:       'MANUEL GODOY',
        rut:            '17666419-0',
        prevision:      'FONASA',
    },
    //Fila 6 del excel
    {
        hora:           '16:00',
        especialista:   'PATRICIA SUAZO',
        paciente:       'RAMON ULLOA',
        rut:            '14989389-K',
        prevision:      'FONASA',
    },
     //Fila 7 del excel
     {
        hora:           '16:00',
        especialista:   'PATRICIA SUAZO',
        paciente:       'RAMON ULLOA',
        rut:            '14989389-K',
        prevision:      'FONASA',
    },
     //Fila 8 del excel
     {
        hora:           '16:00',
        especialista:   'PATRICIA SUAZO',
        paciente:       'RAMON ULLOA',
        rut:            '14989389-K',
        prevision:      'FONASA',
    },
];

/*2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el nombre del paciente junto con la previsión, separados por un guión (utilizar índices de arreglos para esto). Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.  */

/*3. Recorrer el arreglo y mostrar su contenido en una tabla. */