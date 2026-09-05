interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}
 
 
const alumno:Alumno = {
    nombre:"Mar",
    apellido:"Mora",
    edad:100,
    email:"mar@gmail.com",
    nota:1717
 }
 
 console.table(alumno)
 
 let mascotas=['perro','gato','cebra']
 mascotas[1]='Nuevo gato'
 mascotas.push('leon')
 console.log(mascotas)
 
 let tem: (number|string)[]=[]
 tem.push(11)
 tem.push("once")
 console.log(tem)
 