//primero crear funcion autoejecutable: pasar por parametros la url e id 
//segundo realizar la clase multimedia y reproductor (extends de multimedia)
//tercero instancia de musica
//llamar método para ejecutar la música: 
//new Reproductor ("link youtube", peliculas)
//play musica.PlayMultimedia
//play.setInicio(100)
let Myapp = (()=>{
    let parametros = (url, id) =>{
        id.setAtributte("src", url);
        id.style.display= "block";
    };
    return{mostrarTodo: (url, id)=> parametros(url,id)}
})();

class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () =>_url;
    }
     getUrl(){
        return this._getUrl();
    }
    setInicio = () =>{
        return `Este método es para realizar un cambio en la URL del video`
    }
}
class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        let _id = id;
        this._getId = () => _getId;
    }
   playMultimedia = () =>{
        Myapp.mostrarTodo(this.url, this.getId())
   } 
   setInicio(time){
       this.getId().setAtributte("src", `${this.url}?start=${tiempo}`)
   }  
}

let peli1 = new Reproductor('https://www.youtube.com/embed/Ur_DIHs92NM', peliculas);
let music1 = new Reproductor('https://www.youtube.com/embed/5hJLHzBTXQQ', musica);
let serie1 = new Reproductor('https://www.youtube.com/embed/H2HjT1yvin8', series);

music1.playMultimedia();
music1.setInicio(75);

//seleccionMedios.addEventListener("click", function(){
  //  console.log(seleccionMedios.value);
//})
