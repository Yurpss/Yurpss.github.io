const videos = [
  "RDK8GYYzzIpx8&start_radio=1", 
  "RDCt2qbD3HxDs&start_radio=1", 
  "RDSbm-O5xdu1A&start_radio=1",
  'RDwsglGcaQd3g&start_radio=1',
  'RDjUahBnEkIw8&start_radio=1'

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