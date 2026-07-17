// ==========================================
// 1. ORIGINAL MOVIE & MEDIA DATA DIRECTORY
// ==========================================
const MOVIE_DATABASE = [
  {
    id: "m1",
    title: "Sintel",
    type: "movies",
    tags: ["Trending", "Movies"],
    genre: "Fantasy • Adventure",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop", 
    streamUrl: "https://archive.org/download/Sintel/sintel-2048-surround.mp4",
    magnet: "magnet:?xt=urn:btih:08ada5a7a6183aae1e8d838df40db54a",
    description: "A young woman named Sintel searches desperately for her baby dragon, Scales, in an expansive fantasy world."
  },
  {
    id: "m2",
    title: "Big Buck Bunny",
    type: "anime",
    tags: ["Trending", "Anime"],
    genre: "Comedy • Animation",
    quality: "720p",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    streamUrl: "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4",
    magnet: "magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c",
    description: "A giant, friendly rabbit decides to take sweet, calculated revenge on three bullying forest rodents."
  },
  {
    id: "m3",
    title: "Tears of Steel",
    type: "tv-series",
    tags: ["Movies", "TV Series"],
    genre: "Sci-Fi • Cyberpunk",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    streamUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tears_of_Steel_in_4k_-_Official_Blender_Foundation_release.webm",
    magnet: "magnet:?xt=urn:btih:2b2b1a8dcf8c79cb8e9f2eeea4bb22f872c67bd2",
    description: "A group of scientists in dystopian Amsterdam try to rescue the world from destructive, rogue giant robots."
  },
  {
    id: "m4",
    title: "Cosmos Laundromat",
    type: "movies",
    tags: ["Trending", "Movies"],
    genre: "Surreal • Sci-Fi",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    streamUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Cosmos_Laundromat_-_First_Cycle_-_Official_Blender_Foundation_release.webm",
    magnet: "magnet:?xt=urn:btih:9c3330fca6dbbb80b271cb46fb2627e7f62b2577",
    description: "On a desolate island, a depressed sheep named Franck meets a quirky salesman who offers him the deal of a lifetime."
  }
];

// ==========================================
// 2. LEGITIMATE GEEK & CINEMA NEWS ARTICLES
// ==========================================
const NEWS_DATABASE = [
  {
    id: "n1",
    title: "Leaked Copy of 'Avatar Aang: The Last Airbender' Animated Film Spreads Online",
    author: "♣︎leoskyler♣︎",
    source: "Knight Edge Media",
    link: "https://knightedgemedia.com/2026/04/avatar-aang-movie-leaks-online/",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    body: "An early production build of Paramount's upcoming animated feature leaked due to an accidental distribution email loop. Production communities discuss the vulnerability of digital cloud storage pipelines."
  },
  {
    id: "n2",
    title: "The Battle of Open Media Formats: AV1 vs H.265 in Modern HTML Players",
    author: "♣︎leoskyler♣︎",
    source: "WebM Foundation",
    link: "https://www.webmproject.org/",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    body: "As video portals push toward high-efficiency 4K web pipelines, WebM containers are taking over native browser players, letting designers stream cinematic files without licensing fees."
  }
];

// Initialize local storage states
if (!localStorage.getItem("movies")) {
  localStorage.setItem("movies", JSON.stringify(MOVIE_DATABASE));
}
if (!localStorage.getItem("news")) {
  localStorage.setItem("news", JSON.stringify(NEWS_DATABASE));
}
if (!localStorage.getItem("mylist")) {
  localStorage.setItem("mylist", JSON.stringify([]));
}

// ==========================================
// 3. CORE NAVIGATION ENGINE & ADMIN HOOKS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderMovies();
  renderNews();
  renderMyList();
  initUploadForms();
  initPlayerModal();
});

function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  const contents = document.querySelectorAll(".tab-content");

  // Main Nav Switching
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Admin Avatar Click Action -> Switches to ME/Profile
  const avatarBtn = document.getElementById("avatar-btn");
  if (avatarBtn) {
    avatarBtn.style.cursor = "pointer";
    avatarBtn.addEventListener("click", () => {
      switchTab("profile");
    });
  }

  // Category Pill Filters
  const pills = document.querySelectorAll(".category-pills .pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const category = pill.textContent.trim().toLowerCase();
      renderMovies(category);
    });
  });
}

function switchTab(targetTab) {
  // Update Header Tab Highlight
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(t => {
    if (t.getAttribute("data-tab") === targetTab) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  // Display targeted Content Panel
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => {
    content.classList.remove("active-content");
  });

  // Map Tab Names to Content Panel IDs
  let idMap = {
    "home": "tab-home",
    "news": "tab-news",
    "upload": "tab-upload",
    "profile": "tab-profile"
  };

  const activeContent = document.getElementById(idMap[targetTab]);
  if (activeContent) {
    activeContent.classList.add("active-content");
  }
}

// ==========================================
// 4. RENDERING VIEWS & DYNAMIC GRIDS
// ==========================================
function renderMovies(filter = "trending") {
  const container = document.getElementById("movies-container");
  if (!container) return;
  container.innerHTML = "";

  const movies = JSON.parse(localStorage.getItem("movies"));

  // Apply real categorization engine
  const filtered = movies.filter(m => {
    if (filter === "trending") return m.tags.includes("Trending");
    if (filter === "movies") return m.type === "movies";
    if (filter === "tv series") return m.type === "tv-series";
    if (filter === "anime") return m.type === "anime";
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="empty-msg">No media entries found in this index category.</p>`;
    return;
  }

  filtered.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop'">
      <div class="movie-card-info">
        <h4>${movie.title}</h4>
        <span>${movie.genre} • ${movie.quality}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      openPlayer(movie);
    });
    container.appendChild(card);
  });
}

function renderNews() {
  const container = document.getElementById("news-container");
  if (!container) return;
  container.innerHTML = "";

  const newsList = JSON.parse(localStorage.getItem("news"));

  newsList.forEach(item => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.style.background = "#141414";
    card.style.margin = "15px 0";
    card.style.borderRadius = "8px";
    card.style.overflow = "hidden";
    card.style.border = "1px solid #222";
    
    card.innerHTML = `
      <img src="${item.image}" style="width:100%; height:180px; object-fit:cover;">
      <div style="padding:15px;">
        <h3 style="margin-top:0; color:#fff;">${item.title}</h3>
        <p style="font-size:13px; color:#888;">Reported by ${item.author} | Source: <a href="${item.link}" target="_blank" style="color:#e50914; text-decoration:none; font-weight:bold;">${item.source} ↗</a></p>
        <p style="font-size:14px; color:#ccc; line-height:1.5;">${item.body}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderMyList() {
  const container = document.getElementById("my-list-container");
  const countBadge = document.getElementById("upload-count");
  if (!container) return;
  container.innerHTML = "";

  const mylist = JSON.parse(localStorage.getItem("mylist"));
  if (countBadge) countBadge.textContent = mylist.length;

  if (mylist.length === 0) {
    container.innerHTML = `<p class="empty-msg" style="color:#666; font-size:13px;">Your watch list is empty. Find a movie and click "+ My List" to bookmark it!</p>`;
    return;
  }

  mylist.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-card-info">
        <h4>${movie.title}</h4>
        <button class="remove-list-btn" style="background:none; border:none; color:#e50914; cursor:pointer; font-size:12px; padding:4px 0;">Remove</button>
      </div>
    `;
    
    // Play on Card Click
    card.querySelector("img").addEventListener("click", () => {
      openPlayer(movie);
    });

    // Remove Action Button
    card.querySelector(".remove-list-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromList(movie.id);
    });

    container.appendChild(card);
  });
}

// ==========================================
// 5. ACTIONS: ADD / REMOVE FROM LIST
// ==========================================
function addCurrentToList(movie) {
  let mylist = JSON.parse(localStorage.getItem("mylist"));
  if (mylist.some(item => item.id === movie.id)) {
    alert(`"${movie.title}" is already in your collection!`);
    return;
  }
  mylist.push(movie);
  localStorage.setItem("mylist", JSON.stringify(mylist));
  renderMyList();
  alert(`Added "${movie.title}" to your list successfully.`);
}

function removeFromList(id) {
  let mylist = JSON.parse(localStorage.getItem("mylist"));
  mylist = mylist.filter(item => item.id !== id);
  localStorage.setItem("mylist", JSON.stringify(mylist));
  renderMyList();
}

// ==========================================
// 6. FORM REGISTRATION INTERFACE
// ==========================================
function initUploadForms() {
  const btnMovie = document.getElementById("btn-upload-movie");
  const btnNews = document.getElementById("btn-upload-news");
  const formMovie = document.getElementById("movie-upload-form");
  const formNews = document.getElementById("news-upload-form");

  if (btnMovie && btnNews) {
    btnMovie.addEventListener("click", () => {
      btnMovie.classList.add("active");
      btnNews.classList.remove("active");
      formMovie.classList.add("active-form");
      formNews.classList.remove("active-form");
    });

    btnNews.addEventListener("click", () => {
      btnNews.classList.add("active");
      btnMovie.classList.remove("active");
      formNews.classList.add("active-form");
      formMovie.classList.remove("active-form");
    });
  }

  // Movie Upload Submission Handler
  if (formMovie) {
    formMovie.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newMovie = {
        id: "custom_" + Date.now(),
        title: document.getElementById("mv-title").value,
        type: "movies",
        tags: ["Movies"],
        genre: document.getElementById("mv-genre").value,
        quality: document.getElementById("mv-quality").value,
        poster: document.getElementById("mv-poster").value,
        streamUrl: document.getElementById("mv-stream").value,
        magnet: document.getElementById("mv-magnet").value,
        description: "Custom user database publication."
      };

      const db = JSON.parse(localStorage.getItem("movies"));
      db.push(newMovie);
      localStorage.setItem("movies", JSON.stringify(db));

      formMovie.reset();
      renderMovies();
      alert("Success! Custom movie broadcast onto local network database.");
      switchTab("home");
    });
  }

  // News Upload Submission Handler
  if (formNews) {
    formNews.addEventListener("submit", (e) => {
      e.preventDefault();

      const newPost = {
        id: "news_" + Date.now(),
        title: document.getElementById("news-title").value,
        author: document.getElementById("news-author").value,
        source: "Independent Publisher",
        link: "https://github.com",
        image: document.getElementById("news-image").value,
        body: document.getElementById("news-body").value
      };

      const db = JSON.parse(localStorage.getItem("news"));
      db.unshift(newPost);
      localStorage.setItem("news", JSON.stringify(db));

      formNews.reset();
      renderNews();
      alert("Published! Article is now live in global feed.");
      switchTab("news");
    });
  }
}

// ==========================================
// 7. CINEMATIC MODAL & STREAMING MEDIA PLAYER
// ==========================================
let activeMovie = null;

function initPlayerModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const addListBtn = document.getElementById("add-list-btn");
  const torrentBtn = document.getElementById("torrent-dl-btn");
  const torrentProgress = document.getElementById("torrent-progress-container");
  const torrentFill = document.getElementById("torrent-fill");
  const torrentStatus = document.getElementById("torrent-status");

  // Hero Static Main Play Action Wrapper
  const heroPlayBtn = document.querySelector(".hero-actions .btn-primary");
  if (heroPlayBtn) {
    heroPlayBtn.removeAttribute("onclick");
    heroPlayBtn.addEventListener("click", () => {
      // Stream Sintel as Featured Movie
      const sintel = JSON.parse(localStorage.getItem("movies")).find(m => m.id === "m1");
      if (sintel) openPlayer(sintel);
    });
  }

  if (addListBtn) {
    addListBtn.addEventListener("click", () => {
      const sintel = JSON.parse(localStorage.getItem("movies")).find(m => m.id === "m1");
      if (sintel) addCurrentToList(sintel);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closePlayer();
    });
  }

  // Resolution Switches Inside Player
  const resBtns = document.querySelectorAll(".res-btn");
  resBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      resBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const selectedRes = btn.getAttribute("data-res");
      document.getElementById("current-res-indicator").textContent = selectedRes.toUpperCase();
    });
  });

  // Simulator for Magnet Seed Downloads
  if (torrentBtn) {
    torrentBtn.addEventListener("click", () => {
      if (!activeMovie) return;
      torrentProgress.style.display = "block";
      torrentFill.style.width = "0%";
      torrentStatus.textContent = "Connecting to P2P Swarm...";
      
      let width = 0;
      const interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval);
          torrentStatus.textContent = "Complete! Movie Saved to Local Device Storage.";
          alert(`Download Successful:\n"${activeMovie.title}" downloaded using magnet registry.`);
        } else {
          width += 10;
          torrentFill.style.width = width + "%";
          torrentStatus.textContent = `Downloading: ${width}% (Peers: 147 | Speed: 11.2 MB/s)`;
        }
      }, 400);
    });
  }
}

function openPlayer(movie) {
  activeMovie = movie;
  const modal = document.getElementById("video-modal");
  const title = document.getElementById("modal-movie-title");
  const video = document.getElementById("main-video");

  if (!modal || !video) return;

  title.textContent = movie.title;
  
  // Set stream direct video file source
  video.src = movie.streamUrl;
  video.load();
  video.play().catch(e => {
    console.log("Auto-play blocked by browser. User interaction required.");
  });

  // Reset Torrent Panel
  document.getElementById("torrent-progress-container").style.display = "none";

  modal.classList.add("active-modal");
}

function closePlayer() {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("main-video");
  if (video) video.pause();
  if (modal) modal.classList.remove("active-modal");
}
