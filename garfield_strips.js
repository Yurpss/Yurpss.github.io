const images = [ 
  'https://www.mezzacotta.net/garfield/comics/0786.png', 
  'https://static.wikia.nocookie.net/garfield/images/8/83/2010-11-04.gif/revision/latest/scale-to-width-down/340?cb=20180812062921',
  'https://platypuscomix.com/otherpeople/weirdgarfield7.jpg'
]; 

const btn = document.getElementById('rndBtn'); 
const img = document.getElementById('rndImg'); 

// Optional: preload images
images.forEach(src => { const i = new Image(); i.src = src; }); 

function pickRandom(arr, exclude) { 
  let filtered = arr.filter(src => src !== exclude);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

btn.addEventListener('click', () => { 
  img.src = pickRandom(images, img.src); 
});