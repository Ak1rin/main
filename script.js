// Sample song list
const songs = [
    {title: "Sumeru", src: "music/1-01. Sumeru.mp3"},
    {title: "Song 2", src: "song2.mp3"},
    {title: "Song 3", src: "song3.mp3"},
];

let currentSongIndex = 0;
let audio = new Audio();
let isPlaying = false;

// Populate song list
const songListDiv = document.getElementById('songList');
const ul = document.createElement('ul');
songListDiv.appendChild(ul);
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.onclick = () => {
        playSong(index);
    };
    ul.appendChild(li);
});

// Set up audio and controls
audio.src = songs[currentSongIndex].src;
document.getElementById('songTitle').textContent = songs[currentSongIndex].title;

document.getElementById('playPauseButton').addEventListener('click', playPauseSong);
document.getElementById('nextButton').addEventListener('click', nextSong);

function playSong(index) {
    currentSongIndex = index;
    audio.src = songs[currentSongIndex].src;
    document.getElementById('songTitle').textContent = songs[currentSongIndex].title;
    playPauseSong();
}

function playPauseSong() {
    if (!isPlaying) {
        audio.play();
        document.getElementById('playPauseButton').textContent = 'Pause';
        isPlaying = true;
    } else {
        audio.pause();
        document.getElementById('playPauseButton').textContent = 'Play';
        isPlaying = false;
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].src;
    document.getElementById('songTitle').textContent = songs[currentSongIndex].title;
    playPauseSong();
}
