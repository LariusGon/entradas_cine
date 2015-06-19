/*
	Pimer JavaScript para trastera con el 

	version:  1.0
	author:   Ander Uraga Real
	date: 	  20150518


*/
/*****************************************
				CINE DE ALMENDRALEJO (PAG 283)
			******************************************/
			
			
			/**
				Calcula el precio de las entradas de Cinesa
				@param dia: Dia de la semana escrito en minusculas, ej: ['lunes','martes',...'domingo'] 
				@param edad: edad de la persona que compra la entrada, formato numero entero
				@return precio en euros, null si 	
			*/			
			function calcularEntrada (dia,edad) {
				var precio = null;
				switch (dia) {
					case 'lunes':
						if(edad <= 35){
							precio = 2;
						} else {
							precio = 5;
						}
						break;
					case 'martes':
						if (edad <=25) {
							precio = 2;
						} else if (edad > 25 && edad <= 50) {
							precio = 5;
						} else {
							precio = 7;
						}
						break;
					case 'miercoles':
						if (edad <=18) {
							precio = 3;
						} else if (edad > 18 && edad <= 50) {
							precio = 5;
						} else {
							precio = 8;
						}
						break;
					case 'jueves':
						if (edad <= 18) {
							precio = 5;
						} else {
							precio = 7;
						}
						break;
					case 'viernes':
					case 'sabado':
					case 'domingo':
						precio = 10;
					break;
					
				}//end switch
				
				return precio;
			}
			//end:function calcularEntradas (dia,edad)