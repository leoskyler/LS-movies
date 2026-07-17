// Local Storage Database (Pre-filled with samples matching your system requirements)
const MOVIE_DB = [
  {
    title: "Suits LA",
    genre: "Drama / Legal",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=300&auto=format&fit=crop",
    stream: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    magnet: "magnet:?xt=urn:btih:suitsla1080p"
  },
  {
    title: "Deadpool & Wolverine",
    genre: "Action / Comedy",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop",
    stream: "https://sample-videos.com/video321/mp4/480/big_buck_bunny_480p_1mb.mp4",
    magnet: "magnet:?xt=urn:btih:deadpoolwolv"
  },
  {
    title: "Money Heist",
    genre: "Thriller / Crime",
    quality: "720p",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=300&auto=format&fit=crop",
    stream: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    magnet: "magnet:?xt=urn:btih:moneyheist"
  }
];

const NEWS_DB = [
  {
    title: "Netflix announces renewal of Avatar: The Last Airbender",
    author: "♣︎leoskyler♣︎",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500&auto=format&fit=crop",
    body: "The hit series has been renewed for two more seasons, wrapping up the legend of Aang. Filming is slated to begin early next month with improved special effect sequences."
  }
];

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
  renderNews();
  initTabRouting();
  initUploadForm();
});

// Render Movies on Feed
function renderMovies() {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';
  
  MOVIE_DB.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openPlayer(movie.title, movie.quality, movie.stream);
    
    card.innerHTML = `
      <div class="movie-poster" style="background-image: url('${movie.poster}')">
        <span class="quality-tag">${movie.quality}</span>
      </div>
      <div class="movie-info">
        <h4>${movie.title}</h4>
        <p>${movie.genre}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Movie News
function renderNews() {
  const container = document.getElementById('news-container');
  container.innerHTML = '';
  
  NEWS_DB.forEach(article => {
    const item = document.createElement('div');
    item.className = 'news-item';
    item.innerHTML = `
      <div class="news-image" style="background-image: url('${article.image}')"></div>
      <div class="news-content">
        <div class="news-meta">By ${article.author} • APPROVED</div>
        <h3>${article.title}</h3>
        <p>${article.body}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

// Switch between Main Navigation Tabs
function initTabRouting() {
  const tabs = document.querySelectorAll('.nav-tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active-content'));
      
      tab.classList.add('active');
      const activeId = `tab-${tab.getAttribute('data-tab')}`;
      document.getElementById(activeId).classList.add('active-content');
    });
  });
}

// Form Upload Switch Logic
function initUploadForm() {
  const btnMovie = document.getElementById('btn-upload-movie');
  const btnNews = document.getElementById('btn-upload-news');
  const formMovie = document.getElementById('movie-upload-form');
  const formNews = document.getElementById('news-upload-form');

  btnMovie.addEventListener('click', () => {
    btnMovie.classList.add('active');
    btnNews.classList.remove('active');
    formMovie.classList.add('active-form');
    formNews.classList.remove('active-form');
  });

  btnNews.addEventListener('click', () => {
    btnNews.classList.add('active');
    btnMovie.classList.remove('active');
    formNews.classList.add('active-form');
    formMovie.classList.remove('active-form');
  });

  // Handle Movie Submissions
  formMovie.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMovie = {
      title: document.getElementById('mv-title').value,
      poster: document.getElementById('mv-poster').value,
      stream: document.getElementById('mv-stream').value,
      magnet: document.getElementById('mv-magnet').value,
      quality: document.getElementById('mv-quality').value,
      genre: document.getElementById('mv-genre').value,
    };
    MOVIE_DB.unshift(newMovie);
    renderMovies();
    formMovie.reset();
    
    // Update Upload Counts in User Profile
    document.getElementById('upload-count').innerText = MOVIE_DB.length - 1;
    alert('SUCCESS: Movie added to network catalogue!');
  });

  // Handle News Submissions
  formNews.addEventListener('submit', (e) => {
    e.preventDefault();
    const newArticle = {
      title: document.getElementById('news-title').value,
      author: '♣︎leoskyler♣︎',
      image: document.getElementById('news-image').value,
      body: document.getElementById('news-body').value
    };
    NEWS_DB.unshift(newArticle);
    renderNews();
    formNews.reset();
    alert('SUCCESS: Article posted to community news tab!');
  });
}

// ================= VIDEO PLAYER & TORRENT SIMULATION LOGIC =================
const modal = document.getElementById('video-modal');
const closeBtn = document.getElementById('close-modal-btn');
const video = document.getElementById('main-video');
const currentResIndicator = document.getElementById('current-res-indicator');

function openPlayer(title, currentRes, videoSrc) {
  document.getElementById('modal-movie-title').innerText = title;
  video.src = videoSrc;
  currentResIndicator.innerText = currentRes.toUpperCase();
  modal.style.display = 'flex';
  video.play();

  // Highlight active resolution in modal
  document.querySelectorAll('.res-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-res') === currentRes) {
      btn.classList.add('active');
    }
  });
}

// Close Modal
closeBtn.onclick = () => {
  modal.style.display = 'none';
  video.pause();
  resetTorrentEngine();
};

// Handle Streaming Quality Resolution Swaps
document.querySelectorAll('.res-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const targetRes = e.target.getAttribute('data-res');
    
    document.querySelectorAll('.res-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentResIndicator.innerText = targetRes.toUpperCase();

    // Simulate minor stream disruption when changing video quality
    video.pause();
    setTimeout(() => {
      video.play();
    }, 400);
  });
});

// Interactive Torrent Download Sim Engine
const torrentBtn = document.getElementById('torrent-dl-btn');
const progressContainer = document.getElementById('torrent-progress-container');
const progressFill = document.getElementById('torrent-fill');
const progressStatus = document.getElementById('torrent-status');
let downloadInterval = null;

torrentBtn.addEventListener('click', () => {
  if (downloadInterval) return; // Download in progress
  
  progressContainer.style.display = 'block';
  torrentBtn.innerText = "⏳ Initializing Torrent Client...";
  
  let percentage = 0;
  progressStatus.innerText = "Fetching metadata from peers...";
  
  downloadInterval = setInterval(() => {
    percentage += Math.floor(Math.random() * 15) + 5;
    if (percentage >= 100) {
      percentage = 100;
      clearInterval(downloadInterval);
      progressStatus.innerText = "DOWNLOAD COMPLETED (Saved locally)";
      torrentBtn.innerText = "✅ Download Finished!";
    } else {
      progressStatus.innerText = `Downloading: ${percentage}% (6.8 MB/s)`;
    }
    progressFill.style.style = `width: ${percentage}%`;
    progressFill.style.width = `${percentage}%`;
  }, 1200);
});

function resetTorrentEngine() {
  if (downloadInterval) {
    clearInterval(downloadInterval);
    downloadInterval = null;
  }
  progressContainer.style.display = 'none';
  progressFill.style.width = '0%';
  torrentBtn.innerText = "📥 Magnet Link (Torrent Download)";
}
