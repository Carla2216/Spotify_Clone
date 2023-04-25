console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs_1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Cangote - Zé Vaqueiro", filePath: "songs_1.mp3", coverPath: "1.jpg"},
    {songName: "SE FOR AMOR-JOÃO GOMES E VITOR FERNANDES ", filePath: "songs_2.mp3", coverPath: "2.jpg"},
    {songName: "ACASO- Vitor Fernandes", filePath: "songs_3.mp3", coverPath: "3.jpg"},
    {songName: "BEAT IMATUR0 -(FUNK REMIX)", filePath: "songs_4.mp3", coverPath: "4.jpg"},
    {songName: "ALOK & Bruno Martini feat. Marcos Zeeba-Hear Me Now", filePath: "songs_5.mp3", coverPath: "5.jpg"},
    {songName: "Eric Land e Zé Vaqueiro - O Povo Gosta é Do Piseiro", filePath: "songs_6.mp3", coverPath: "6.jpg"},
    {songName: "Simples e Romântico-Nicolas Germano", filePath: "songs_7.mp3", coverPath: "7.jpg"},
    {songName: "Nosso Plano-Tribo da Periferia", filePath: "songs_8.mp3", coverPath: "8.jpg"},
    {songName: "Quando a gente briga-Erix x Rakky", filePath: "songs_9.mp3", coverPath: "9.jpg"},
    {songName: "SORRISO - GABRIELLA SARAIVAH E DONATTO", filePath: "songs_10.mp3", coverPath: "10.jpg"},
    {songName: "ALÔ AMBEV - DJ LUCAS BEAT (FUNK REMIX)", filePath: "songs_11.mp3", coverPath: "11.jpg"},
    {songName: "Quando a bad bater-Luan Santana", filePath: "songs_12.mp3", coverPath: "12.jpg"},  
    {songName: "Morena-NATTAN", filePath: "songs_13.mp3", coverPath: "13.jpg"},
    {songName: "Flores, amor e pudim -Luan Santana ", filePath: "songs_14.mp3", coverPath: "14.jpg"},
    {songName: "Me CHAMA - Vitor Fernandes", filePath: "songs_15.mp3", coverPath: "15.jpg"},
    {songName: "Metade de um abraço - Zé Vaqueiro", filePath: "songs_16.mp3", coverPath: "16.jpg"},
    {songName: "Ignore-Luan Santana", filePath: "songs_17.mp3", coverPath: "17.jpg"},
    {songName: "ALIANÇA - Vitor Fernandes", filePath: "songs_18.mp3", coverPath: "18.jpg"},
    {songName: "Tenho Medo - Zé Vaqueiro", filePath: "songs_19.mp3", coverPath: "19.jpg"},
    {songName: "Meu Investimento-Luan Santana", filePath: "songs_20.mp3", coverPath: "20.jpg"},
    {songName: "Investe em Mim-Zé Vaqueiro Estilizado", filePath: "songs_21.mp3", coverPath: "21.jpg"},
    {songName: "Nosso Amor-MC Pedrinho", filePath: "songs_22.mp3", coverPath: "22.jpg"},
    {songName: "Volta comigo bb -Zé Vaqueiro", filePath: "songs_23.mp3", coverPath: "23.jpg"},
    {songName: "Vingança-Luan Santana", filePath: "songs_24.mp3", coverPath: "24.jpg"},  
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs_${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songInd11>=23){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs_${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs_${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
