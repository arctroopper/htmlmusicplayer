let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//criar elemento de audio
let track = document.createElement('audio');


//lista com todas as musicas
let All_song = [
   {
     name: "POZE NOS ANOS 80 pt. I",
     path: "assets/music.mp3",
     img: "img/poze80.jpg",
     singer: "MC Poze"
   },
   {
	name: "POZE NOS ANOS 80 pt. II",
	path: "assets/anos80pt2.mp3",
	img: "img/poze80pt2.jpg",
	singer: "MC Poze"
   },
   {
	name: "POZE NOS ANOS 80 pt. III",
	path: "assets/anos80.mp3",
	img: "img/poze80pt3.jpg",
	singer: "MC Poze"

   },
   {
     name: "Kawaii",
     path: "assets/kawaii.mp3",
     img: "img/kawaii.jpg",
     singer: "MC Poze"
   },
   {
     name: "Billie Jean Ft. Michael Jackson",
     path: "assets/jean.mp3",
     img: "img/billie.png",
     singer: "MC Poze"
   },
   {
	name: "Seu Poze Do Rodo",
	path: "assets/jorge.mp3",
	img: "img/seupoze.jpg",
	singer: "MC Poze"

   },
   {
	name: "MC Poze Ft. travis scott",
	path: "assets/PozeXtravis.mp3",
	img: "img/mcpozextravis.jpg",
	singer: "MC Poze"
   },
   {
	name: "Máquina do Tempo Ft. Matuê",
	path: "assets/timamachine.mp3",
	img: "img/matue.png",
	singer: "MC Poze"
   },
   {
	name: "Say Poze",
	path: "assets/saypoze.mp3",
	img: "img/saypoze.png",
	singer: "MC Poze"
   },
   {
	   name: "Tｏ　Vｏａｎｄｏ　Aｌｔｏ",
	   path: "assets/PozeLofi.mp3",
	   img: "img/pozelofi.jpg",
	   singer: "MC Poze"
   },
   {
	name: "LALALA Ft. Y2k",
	path: "assets/lalala.mp3",
	img: "img/lalala.jpg",
	singer: "MC Poze"
   },
   {
	name: "Walk it Talk it",
	path: "assets/WalkItTalkIt.mp3",
	img: "img/migos.jpg",
	singer: "MC Poze"
   },
   {
	name: "Bieber Do Rodo",
	path: "assets/BieberDoRodo.mp3",
	img: "img/bieberdorodo.jpg",
	singer: "MC Poze"
   },
   {
	name: "Old Town Rodo",
	path: "assets/OldTownRodo.mp3",
	img: "img/oldtownrodo.jpg",
	singer: "MC Poze"
   },
   {
	name: "Pozelight",
	path: "assets/Pozelight.mp3",
	img: "img/pozelight.jpg",
	singer: "MC Poze"
   },
   {
	name: "Highest in the Rodo",
	path: "assets/HighestintheRodoFtYunginebriated.mp3",
	img: "img/PozeFTYungInebriated.jpg",
	singer: "MC Poze"
   },
   {
	name: "Crazy In Poze",
	path: "assets/crazyinpoze.mp3",
	img: "img/crazyinpoze.jpg",
	singer: "MC Poze"
   },
   {
	name: "Sanfoneiro do Rodo",
	path: "assets/sanfoneirodorodo.mp3",
	img: "img/sanfoneirodorodo.jpg",
	singer: "MC Poze"
   },
   {
	name: "XXXPoze",
	path: "assets/XXXPoze.mp3",
	img: "img/xxxpoze.jpg",
	singer: "MC Poze"
   },
   {
	name: "ParaPoze",
	path: "assets/PARAFAL Ft. DJ NEGÃO DO BV.mp3",
	img: "img/parafal.jpg",
	singer: "MC Poze"
   },
   {
	name: "Hino Do Brasil",
	path: "assets/hinodobrasil.mp3",
	img: "img/brasil.jpg",
	singer: "MC Poze"
   },
   {
	name: "Pretty Rodo",
	path: "assets/prettyrodo.mp3",
	img: "img/prettyrodo.jpg",
	singer: "MC Poze"
   },
   {
	name: "Old Skool Ft. SKja",
	path: "assets/OldSkoolFtSkjaMc.mp3",
	img: "img/oldskool.jpg",
	singer: "MC Poze"
   },
   {
	name: "Gimme Rodo",
	path: "assets/GIMMERODO.mp3",
	img: "img/gimmerodo.jpg",
	singer: "Poze Brown"
   },
   {
	name: "Soulja Rodo",
	path: "assets/souljapozecrankthatrodo.mp3",
	img: "img/souljarodo.jpg",
	singer: "MC Poze"
   },
   {
	name: "ButterRodo",
	path: "assets/butterrodo.mp3",
	img: "img/butterrodo.jpg",
	singer: "MC Poze"
   },
   {
	name: "DokiDoki Poze",
	path: "assets/dokipoze.mp3",
	img: "img/dokipoze.jpg",
	singer: "MC Poze"
   },
   {
	name: "Poze Ft. Time Impala",
	path: "assets/PozeXTimeImpala .mp3",
	img: "img/time.jpg",
	singer: "MC Poze"
   },
];


// todas as funções


// função de carregar a musica 
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mutar
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


 function reset_slider(){
 	slider.value = 0;
 }


function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// mudar volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// mudar posição do slider
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#303b9e";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }