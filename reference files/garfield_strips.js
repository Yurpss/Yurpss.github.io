const images = [ 
  'https://www.mezzacotta.net/garfield/comics/0786.png', 
  '',
  'https://platypuscomix.com/otherpeople/weirdgarfield7.jpg',
  'https://static.wikia.nocookie.net/garfield/images/9/98/2010-08-03.gif/revision/latest/scale-to-width-down/1000?cb=20190509103003',
  'https://static.wikia.nocookie.net/garfield/images/7/77/2010-08-02.gif/revision/latest/scale-to-width-down/1000?cb=20191223031325',
  'https://static.wikia.nocookie.net/garfield/images/d/d6/2010-08-05.gif/revision/latest/scale-to-width-down/1000?cb=20191223031326',
  'https://static.wikia.nocookie.net/garfield/images/5/5b/2025-10-02.gif/revision/latest?cb=20251002114546',
  'https://static.wikia.nocookie.net/garfield/images/3/35/2025-10-05.jpg/revision/latest?cb=20251005090001',
  'https://static.wikia.nocookie.net/garfield/images/7/7c/2025-10-06.gif/revision/latest?cb=20251006150918',
  'https://static.wikia.nocookie.net/garfield/images/4/43/2025-10-24.gif/revision/latest?cb=20251024083214',
  'https://static.wikia.nocookie.net/garfield/images/8/8b/2025-10-20.gif/revision/latest?cb=20251020095508',
  'https://www.mezzacotta.net/garfield/comics/0099.png',
  'https://www.mezzacotta.net/garfield/comics/2543.png',
  'https://www.mezzacotta.net/garfield/comics/2548.png',
  'https://www.mezzacotta.net/garfield/comics/2552.png',
  'https://www.mezzacotta.net/garfield/comics/2553.png',
  'https://www.mezzacotta.net/garfield/comics/2554.png'
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