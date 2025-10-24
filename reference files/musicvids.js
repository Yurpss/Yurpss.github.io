const videos = [
  "K8GYYzzIpx8", 
  "Ct2qbD3HxDs", 
  "Sbm-O5xdu1A",
  'wsglGcaQd3g',
  'jUahBnEkIw8',
  '2OBhqO0WO8I',
  'hVgvQUJeEVc',
  'Rm-HbYZwXf8',
  'xZf9ZSjUBmk',
  's7xOBr2EGMs',
  'fKqKM-gvK_w',
  'BcKDSC7c-0M',
  '41YqzHoCgk4',
  'RsD6DmqsTJY',
  'ymNFyxvIdaM',
  'cJRP3LRcUFg',
  '4D2qcbu26gs',
  'sQGOlawi6n0',
  'bFgv8Jq4xN0',
  'e_RXSxOpL-g',
  'Pls01adPSps', //confusion the witress//
  'PW1GfcYansk',
  'i-P98B2skts',
  'GhcyQ9fETuk',
  'bYe-bLaqhhY'
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