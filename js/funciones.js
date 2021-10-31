/**
 * FUNCIONES TABLA ROOM
 */
function consultarRoom(){
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success : function (respuesta){
            console.log(respuesta);
            obtTablaRoom(respuesta.items);
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        },
        complete: function(xhr,status){
            alert('La peticion se ha relizado ' +xhr.status);
        }
    });
}

function obtTablaRoom(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id+"</td>";
        myTable+="<td>" +items[i].room+"</td>";
        myTable+="<td>" +items[i].stars+"</td>";
        myTable+="<td>" +items[i].category_id+"</td>";
        myTable+="<td>" +items[i].description+"</td>";
        myTable+="<td> <button onclick='borrarRoom("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarRoom(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            consultarRoom();
            alert("se ha guardado el dato correctamente")
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        }
    });
}
function actualizarRoom(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            consultarRoom();
            alert("se ha Actualizado")
            limpiarFormularioRoom();
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        }
    });
}
function borrarRoom(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            consultarRoom();
            alert("Se ha Eliminado.")
            limpiarFormularioRoom();
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        }
        
    });
}

function consultarOneRoom(){
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room/:id",
        type:"GET",
        datatype:"JSON",
        success : function (respuesta){
            $("#resultado").empty();
            $("#resultado").append( json.items[0].nombre +" $"+json.items[0].valor);
            console.log(respuesta);
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        },
        complete: function(xhr,status){
            alert('La peticion se ha relizado ' +xhr.status);
        }
    });
}

function limpiarFormularioRoom(){
    $("#id").val("");
    $("#room").val("");
    $("#stars").val("");
    $("#category_id").val("");
    $("#description").val("");
}


/**
 * FUNCIONES TABLA CLIENTE
 */

 function consultarCliente(){
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtTablaCliente(respuesta.items)
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        },
        complete: function(xhr,status){
            alert('La peticion se ha relizado ' +xhr.status);
        }
    });
}

function obtTablaCliente(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id+"</td>";
        myTable+="<td>" +items[i].name+"</td>";
        myTable+="<td>" +items[i].email+"</td>";
        myTable+="<td>" +items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);

}
function guardarCliente(){
    let myData={
        id:$("#id1").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#id1").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            consultarCliente();
            alert("se ha guardado el dato")
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        }
    });
}
function actualizarCliente(){
    let myData={
        id:$("#id1").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#id1").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            consultarCliente();
            alert("se ha Actualizado")
            limpiarFormularioCliente();
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        }
    });
}

function consultarUnCliente(){
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/:id",
        type:"GET",
        datatype:"JSON",
        success : function (respuesta){
            $("#resultado1").empty();
            $("#resultado1").append( json.items[0].nombre +" $"+json.items[0].valor);
            console.log(respuesta);
        },
        error: function(xhr,status){
            alert('Ha ocurrido un problema ' +xhr.status);
        },
        complete: function(xhr,status){
            alert('La peticion se ha relizado ' +xhr.status);
        }
    });
}

function borrarCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            consultarCliente();
            alert("Se ha Eliminado.")
        }
    });
}

function limpiarFormularioCliente(){
    $("#id1").val("");
    $("#name").val("");
    $("#email").val("");
    $("#Age").val("");
}


/**
 * FUNCIONES TABLA MESSAGE
 */
 function traerInformacionMensaje(){
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionMensaje(respuesta.items);
        }

    });
}

function traerInformacionMensaje(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
 
        myTable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").append(myTable);

}
function guardarInformacionMensaje(){
    let myData={
        id:$("#id2").val(),
        messagetext:$("#messagetext").val(),
       
    };
    let dataToSend=JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#id2").val("");
            $("#messagetext").val("");
         
            traerInformacionMensaje();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacionMensaje(){
    let myData={
        id:$("#id2").val(),
        messagetext:$("#messagetext").val(),
   

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#id2").val("");
            $("#messagetext").val("");
       
            traerInformacionMensaje();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g61fb640298abd1-oracle2021.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            traerInformacionMensaje();
            alert("Se ha Eliminado.")
        }
    });
}
