//primero crear funcion autoejecutable: pasar por parametros la url e id 
//segundo realizar la clase multimedia y reproductor (extends de multimedia)
//tercero instancia de musica
//llamar método para ejecutar la música: 
//new Reproductor ("link youtube", peliculas)
//play musica.PlayMultimedia
//play.setInicio(100)
const patronAutoEjecutable = (() => {
    const data = (url, id) => {
        id.setAtributte('src', url);
        //id.style.display= "block";
    };
    return{mostrarInfo: (url, id)=> data (url,id)}
})();

class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    }
     getUrl(){
        return this.getUrl();
    }
    setInicio = () => {
        return `Este método es para realizar un cambio en la URL del video`
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        let _id = id;
        this.getId = () => _id;
    }
   playMultimedia = () => {
    patronAutoEjecutable.mostrarInfo(this.url, this.getId());
   } 
   setInicio(tiempo){
       this.getId().setAtributte('src', `${this.url}?start=${tiempo}`)
   }  
}

let music1 = new Reproductor('https://www.youtube.com/embed/bu7nU9Mhpyo', musica);

let peli1 = new Reproductor('https://www.youtube.com/embed/918rOI1gnQ8', peliculas);

let serie1 = new Reproductor('https://www.youtube.com/embed/H2HjT1yvin8', series);




music1.playMultimedia();
peli1.playMultimedia();
serie1.playMultimedia();

music1.setInicio(65);
peli1.setInicio(1900);
serie1.setInicio(321);
//seleccionMedios.addEventListener("click", function(){
  //  console.log(seleccionMedios.value);
//})
