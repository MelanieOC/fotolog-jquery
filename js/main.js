const fotolog = {
	datos: {
		nombre: null,
		comentario: null
	},

	inicio: ()=>{
		fotolog.datos.nombre=$("#clave");
		fotolog.datos.comentario=$("#valor");
		fotolog.crearComentario();
		fotolog.eventos();
	},

	eventos: ()=>{
		$("#guardar").click(fotolog.guardarDatos);
		$("#limpiar").click(fotolog.limpiar);
	},

	crearComentario: ()=>{
		$("#ale").empty();
		if (localStorage.length > 0) { //cuando hay datos
			$.each(localStorage, (key, value)=>{
				let array = value.split(','); //se crea un array con los valores, nombre y comentario
				$('#ale').append(
						`<div class='row comentario'>
							<div class='col-md-2 col-sm-4 col-xs-4 text-center'>
								<h2 class='fa fa-user-circle fa-fw'></h2>
							</div>
							<div class='col-md-9 col-sm-6 col-xs-6'>
								<h3>${array[0]}</h2>
								<p>${array[1]}</p>
							</div>
						</div>`);
			})
		} else { //cuando el localStorage está vacio
			$('#ale').append(`<div> No hay comentarios </div>`);
		}
	},

	guardarDatos:()=>{
		if(fotolog.datos.nombre.val() && fotolog.datos.comentario.val()){ //solo se guarda cuando esten llenos los campos
			localStorage.setItem(localStorage.length, `${fotolog.datos.nombre.val()}, ${fotolog.datos.comentario.val()}`);
			fotolog.datos.nombre.val('');//se vacea los inputs
			fotolog.datos.comentario.val('');
			fotolog.crearComentario();
		} 
	},

	limpiar: ()=>{
		localStorage.clear();
		fotolog.crearComentario();
	}

}

$(document).ready(fotolog.inicio)