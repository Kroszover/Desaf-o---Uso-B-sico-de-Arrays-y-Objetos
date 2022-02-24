

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
        hora:           '10:00',
        especialista:   'RAUL ARAYA',
        paciente:       'ANGÉLICA NAVAS',
        rut:            '15444147-9',
        prevision:      'ISAPRE',

    },
    //Fila 4 del excel
    {
        hora:           '10:30',
        especialista:   'MARIA ARRIAGADA',
        paciente:       'ANA KLAPP',
        rut:            '17879423-9',
        prevision:      'ISAPRE',
    },
    //Fila 5 del excel
    {
        hora:           '11:00',
        especialista:   'ALEJANDRO BADILLA',
        paciente:       'FELIPE MARDONES',
        rut:            '1547423-6',
        prevision:      'ISAPRE',
    },
    //Fila 6 del excel
    {
        hora:           '11:30',
        especialista:   'CECILIA BUDNIK',
        paciente:       'DIEGO MARRE',
        rut:            '16554741-K',
        prevision:      'FONASA',
    },
     //Fila 7 del excel
     {
        hora:           '12:00',
        especialista:   'ARTURO CAVAGNARO',
        paciente:       'CECILIA MENDEZ',
        rut:            '9747535-8',
        prevision:      'ISAPRE',
    },
     //Fila 8 del excel
     {
        hora:           '12:30',
        especialista:   'ANDRES KANACRI',
        paciente:       'MARCIAL SUAZO',
        rut:            '11254785-5',
        prevision:      'ISAPRE',
    },
];

let dental = [
    {
        //Fila 2 del excel
        hora:           '8:30',
        especialista:   'ANDREA ZUÑIGA',
        paciente:       'MARCELA RETAMAL',
        rut:            '11123425-6',
        prevision:      'ISAPRE',
    },
    {
        //Fila 3 del excel
        hora:           '11:00',
        especialista:   'MARIA PIA ZAÑARTU',
        paciente:       'ANGEL MUÑOZ',
        rut:            '9878789-2',
        prevision:      'ISAPRE',
    },
    {   //Fila 4 del excel
        hora:           '11:30',
        especialista:   'SCARLETT WITTING',
        paciente:       'MARIO KAST',
        rut:            '7998789-5',
        prevision:      'FONASA',
    },
    {
        //Fila 5 del excel
        hora:           '13:00',
        especialista:   'FRANCISCO VON TEUBER',
        paciente:       'KARIN FERNANDEZ',
        rut:            '18887662-K',
        prevision:      'FONASA',
    },
    {   //Fila 6 del excel
        hora:           '13:30',
        especialista:   'EDUARDO VIÑUELA',
        paciente:       'HUGO SANCHEZ',
        rut:            '17665461-4',
        prevision:      'FONASA',
    },
    {
        //Fila 7 del excel
        hora:           '14:00',
        especialista:   'RAQUEL VILLASECA',
        paciente:       'ANA SEPULVEDA',
        rut:            '14441281-0',
        prevision:      'ISAPRE',
    },
];

/*2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el nombre del paciente junto con la previsión, separados por un guión (utilizar índices de arreglos para esto). Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.  */


//Definimos una function para obtener el número del indice del ultimo objeto del arreglo.
function UltimoIndice (tipoAtencion){
    return tipoAtencion.length-1;
};

//RADIOLOGÍA
//Llamamos a la funcion y hacemos una variable para el dato a obtener.

let ultimaRadiologia = UltimoIndice(radiologia);

//generamos el elemento

let atencionRadiologia = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[ultimaRadiologia].paciente} - ${radiologia[ultimaRadiologia].prevision}`;

//insertamos el elemento en el html 

document.getElementById('atenciones-rad').innerHTML = atencionRadiologia;

//TRAUMATOLOGÍA
//Llamamos a la funcion y hacemos una variable para el dato a obtener.

let ultimaTraumatologia = UltimoIndice(traumatologia);

//generamos el elemento

let atencionTraumatologia = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[ultimaTraumatologia].paciente} - ${traumatologia[ultimaTraumatologia].prevision}`;

//insertamos el elemento en el html 

document.getElementById('atenciones-tr').innerHTML = atencionTraumatologia;

//DENTAL
//Llamamos a la funcion y hacemos una variable para el dato a obtener.

let ultimaDental = UltimoIndice(dental);

//generamos el elemento

let atencionDental = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[ultimaDental].paciente} - ${dental[ultimaDental].prevision}`;

//insertamos el elemento en el html 

document.getElementById('atenciones-den').innerHTML = atencionDental;


/*3. Recorrer el arreglo y mostrar su contenido en una tabla. */

//Dividiremos por especialidad

//Radiologia
//Maqueta de tabla.
let tabla1 = "<tr><th>Hora</th><th>Especialista</th><th>Pacientes</th><th>Rut</th><th>Previsión</th></tr>";

//Ciclo For para rellenar las filas de la tabla recorriendo el arreglo.
for(let i=0; i<radiologia.length; i++){
    tabla1 += 
    `<tr>
    <td>${radiologia[i].hora}</td>
    <td>${radiologia[i].especialista}</td>
    <td>${radiologia[i].paciente}</td>
    <td>${radiologia[i].rut}</td>
    <td>${radiologia[i].prevision}</td>
    </tr>`
}

//Insertamos la fila en la tabla.
document.getElementById('tabla-hr1').innerHTML = tabla1

//Traumatologia
//Maqueta de tabla.
let tabla2 = "<tr><th>Hora</th><th>Especialista</th><th>Pacientes</th><th>Rut</th><th>Previsión</th></tr>";

//Ciclo For para rellenar las filas de la tabla recorriendo el arreglo.
for(let i=0; i<traumatologia.length; i++){
    tabla2 += 
    `<tr>
    <td>${traumatologia[i].hora}</td>
    <td>${traumatologia[i].especialista}</td>
    <td>${traumatologia[i].paciente}</td>
    <td>${traumatologia[i].rut}</td>
    <td>${traumatologia[i].prevision}</td>
    </tr>`
}

//Insertamos la fila en la tabla.
document.getElementById('tabla-hr2').innerHTML = tabla2

//Dental
//Maqueta de tabla.
let tabla3 = "<tr><th>Hora</th><th>Especialista</th><th>Pacientes</th><th>Rut</th><th>Previsión</th></tr>";

//Ciclo For para rellenar las filas de la tabla recorriendo el arreglo.
for(let i=0; i<dental.length; i++){
    tabla3 += 
    `<tr>
    <td>${dental[i].hora}</td>
    <td>${dental[i].especialista}</td>
    <td>${dental[i].paciente}</td>
    <td>${dental[i].rut}</td>
    <td>${dental[i].prevision}</td>
    </tr>`
}

//Insertamos la fila en la tabla.
document.getElementById('tabla-hr3').innerHTML = tabla3