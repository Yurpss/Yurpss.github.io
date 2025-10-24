const videos = [
  "K8GYYzzIpx8", 
  "Ct2qbD3HxDs", 
  "Sbm-O5xdu1A",
  'wsglGcaQd3g',
  'jUahBnEkIw8'

];

let currentIndex = 0;


const player = document.getElementById('player');


function loadVideo(index) {
  const videoId = videos[index];
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}


loadVideo(currentIndex);


document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % videos.length; 
  loadVideo(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length; 
  loadVideo(currentIndex);
});