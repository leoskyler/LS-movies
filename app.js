// ==========================================
// 1. PREMIUM PUBLIC DIRECT STREAM DIRECTORY
// ==========================================
const MOVIE_DATABASE = [
  {
    id: "m1",
    title: "Tears of Steel",
    type: "movies",
    tags: ["Trending", "Movies"],
    genre: "Sci-Fi • Cyberpunk",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    magnet: "magnet:?xt=urn:btih:2b2b1a8dcf8c79cb8e9f2eeea4bb22f872c67bd2",
    description: "A group of scientists in dystopian Amsterdam try to rescue the world from destructive, rogue giant robots."
  },
  {
    id: "m2",
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
    id: "m3",
    title: "Big Buck Bunny",
    type: "anime",
    tags: ["Trending", "Anime"],
    genre: "Comedy • Animation",
    quality: "720p",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    magnet: "magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c",
    description: "A giant, friendly rabbit decides to take sweet, calculated revenge on three bullying forest rodents."
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
    description: " Franck meets a quirky salesman who offers him the deal of a lifetime."
  },
  {
    id: "m5",
    title: "Elephants Dream",
    type: "tv-series",
    tags: ["TV Series"],
    genre: "Sci-Fi • Surreal",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    magnet: "magnet:?xt=urn:btih:8c909e390c58a6ee5d0d829bf40db54a",
    description: "Two characters explore a strange, mechanical world that represents their own psychological states."
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

// LocalStorage Sync Keys
if (!localStorage.getItem("movies")) localStorage.setItem("movies", JSON.stringify(MOVIE_DATABASE));
if (!localStorage.getItem("news")) localStorage.setItem("news", JSON.stringify(NEWS_DATABASE));
if (!localStorage.getItem("mylist")) localStorage.setItem("mylist", JSON.stringify([]));

let currentFilter = "all";
let searchQuery = "";
let activeMovie = null;

// ==========================================
// 3. CORE INITIALIZATION ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Splash Screen Timer
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    if (splash) splash.classList.add("fade-out");
  }, 2800);

  // Load Elements & Dynamic Modules
  initNavigation();
  initSearch();
  setupHeroBanner();
  renderMovies();
  renderNews();
  renderMyList();
  initUploadForms();
  initPlayerModal();
});

// ==========================================
// 4. NAVIGATION INTERFACE (TABS & PILLS)
// ==========================================
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchTab(tab.getAttribute("data-tab"));
    });
  });

  // User Profile Avatar Transition Hook
  const avatarBtn = document.getElementById("avatar-btn");
  if (avatarBtn) {
    avatarBtn.style.cursor = "pointer";
    avatarBtn.addEventListener("click", () => switchTab("profile"));
  }

  // Categories Filter Controller
  const pills = document.querySelectorAll(".category-pills .pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      renderMovies();
    });
  });
}

function switchTab(targetTab) {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-tab") === targetTab);
  });

  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => {
    content.classList.remove("active-content");
  });

  const idMap = {
    "home": "tab-home",
    "news": "tab-news",
    "upload": "tab-upload",
    "profile": "tab-profile"
  };

  const activeContent = document.getElementById(idMap[targetTab]);
  if (activeContent) activeContent.classList.add("active-content");
}

// ==========================================
// 5. SEARCH LOGIC ENGINE
// ==========================================
function initSearch() {
  const searchInput = document.getElementById("movie-search-input");
  const clearBtn = document.getElementById("clear-search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      clearBtn.style.display = searchQuery ? "block" : "none";
      renderMovies();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.style.display = "none";
      renderMovies();
    });
  }
}

// ==========================================
// 6. HERO SPOTLIGHT DISPLAY SETUP
// ==========================================
function setupHeroBanner() {
  const heroPlayBtn = document.getElementById("hero-play-btn");
  const heroAddBtn = document.getElementById("hero-add-list-btn");
  const db = JSON.parse(localStorage.getItem("movies"));
  
  // Set first movie (Tears of Steel) as Hero Spotlight banner
  const featured = db.find(m => m.id === "m1") || db[0];
  if (!featured) return;

  document.getElementById("hero-movie-title").textContent = featured.title;
  document.getElementById("hero-movie-meta").textContent = `${featured.genre} • ${featured.quality}`;
  document.getElementById("featured-hero-banner").style.backgroundImage = `linear-gradient(to top, #000 10%, rgba(0,0,0,0.1) 80%), url('${featured.poster}')`;

  if (heroPlayBtn) {
    heroPlayBtn.addEventListener("click", () => openPlayer(featured));
  }
  if (heroAddBtn) {
    heroAddBtn.addEventListener("click", () => addCurrentToList(featured));
  }
}

// ==========================================
// 7. CATALOG RENDER ENGINE
// ==========================================
function renderMovies() {
  const container = document.getElementById("movies-container");
  if (!container) return;
  container.innerHTML = "";

  const movies = JSON.parse(localStorage.getItem("movies"));

  // Apply Filter Pills & Search Queries 
  const filtered = movies.filter(movie => {
    // 1. Filter Check
    let matchesFilter = true;
    if (currentFilter === "trending") matchesFilter = movie.tags.includes("Trending");
    else if (currentFilter === "movies") matchesFilter = movie.type === "movies";
    else if (currentFilter === "tv-series") matchesFilter = movie.type === "tv-series";
    else if (currentFilter === "anime") matchesFilter = movie.type === "anime";

    // 2. Search Query check
    let matchesSearch = true;
    if (searchQuery) {
      const matchTitle = movie.title.toLowerCase().includes(searchQuery);
      const matchGenre = movie.genre.toLowerCase().includes(searchQuery);
      matchesSearch = matchTitle || matchGenre;
    }

    return matchesFilter && matchesSearch;
  });

  const headerTitle = document.getElementById("grid-header-title");
  if (headerTitle) {
    headerTitle.textContent = searchQuery ? `Search Results: "${searchQuery}"` : "Browse Catalog";
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p class="empty-msg" style="grid-column: 1/-1; text-align: center; color: #666; margin-top: 40px; font-size: 14px;">No movies found matching your query.</p>`;
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
    card.addEventListener("click", () => openPlayer(movie));
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
  if (countBadge) countBadge.textContent = mylist.length + " saved";

  if (mylist.length === 0) {
    container.innerHTML = `<p class="empty-msg" style="color:#666; font-size:13px; grid-column: 1/-1;">No movies bookmarked in your watchlist.</p>`;
    return;
  }

  mylist.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-card-info">
        <h4>${movie.title}</h4>
        <button class="remove-list-btn" style="background:none; border:none; color:#e50914; cursor:pointer; font-size:12px; padding:4px 0; font-weight:bold;">Remove</button>
      </div>
    `;
    
    card.querySelector("img").addEventListener("click", () => openPlayer(movie));
    card.querySelector(".remove-list-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromList(movie.id);
    });

    container.appendChild(card);
  });
}

// ==========================================
// 8. ACTIONS: BOOKMARK LIBRARY ACTIONS
// ==========================================
function addCurrentToList(movie) {
  let mylist = JSON.parse(localStorage.getItem("mylist"));
  if (mylist.some(item => item.id === movie.id)) {
    alert(`"${movie.title}" is already in your watchlist!`);
    return;
  }
  mylist.push(movie);
  localStorage.setItem("mylist", JSON.stringify(mylist));
  renderMyList();
  alert(`"${movie.title}" added to your bookmark list.`);
}

function removeFromList(id) {
  let mylist = JSON.parse(localStorage.getItem("mylist"));
  mylist = mylist.filter(item => item.id !== id);
  localStorage.setItem("mylist", JSON.stringify(mylist));
  renderMyList();
}

// ==========================================
// 9. NEW DATABASE ENTRIES SUBMISSIONS
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

  if (formMovie) {
    formMovie.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newMovie = {
        id: "custom_" + Date.now(),
        title: document.getElementById("mv-title").value,
        type: document.getElementById("mv-type").value,
        tags: ["Movies"],
        genre: document.getElementById("mv-genre").value,
        quality: document.getElementById("mv-quality").value,
        poster: document.getElementById("mv-poster").value,
        streamUrl: document.getElementById("mv-stream").value,
        magnet: document.getElementById("mv-magnet").value,
        description: "Custom network stream asset."
      };

      const db = JSON.parse(localStorage.getItem("movies"));
      db.push(newMovie);
      localStorage.setItem("movies", JSON.stringify(db));

      formMovie.reset();
      renderMovies();
      alert("Success! Broadcast metadata added to network index.");
      switchTab("home");
    });
  }

  if (formNews) {
    formNews.addEventListener("submit", (e) => {
      e.preventDefault();

      const newPost = {
        id: "news_" + Date.now(),
        title: document.getElementById("news-title").value,
        author: document.getElementById("news-author").value,
        source: "Community Hub",
        link: "https://github.com",
        image: document.getElementById("news-image").value,
        body: document.getElementById("news-body").value
      };

      const db = JSON.parse(localStorage.getItem("news"));
      db.unshift(newPost);
      localStorage.setItem("news", JSON.stringify(db));

      formNews.reset();
      renderNews();
      alert("Published! News bulletin is now live on feed.");
      switchTab("news");
    });
  }
}

// ==========================================
// 10. MODAL, LIVE STREAM & BLOB DOWNLOAD ENGINE
// ==========================================
function initPlayerModal() {
  const closeBtn = document.getElementById("close-modal-btn");
  const modalBookmarkBtn = document.getElementById("add-to-watchlist-modal-btn");
  const downloadBtn = document.getElementById("direct-download-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closePlayer);
  }

  if (modalBookmarkBtn) {
    modalBookmarkBtn.addEventListener("click", () => {
      if (activeMovie) addCurrentToList(activeMovie);
    });
  }

  // Stream Resolution Switcher Interface
  const resBtns = document.querySelectorAll(".res-btn");
  resBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      resBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const resVal = btn.getAttribute("data-res");
      document.getElementById("current-res-indicator").textContent = resVal.toUpperCase();
    });
  });

  // Direct Binary Blob Saver - Forces Local Storage Download
  if (downloadBtn) {
    downloadBtn.addEventListener("click", async () => {
      if (!activeMovie) return;
      
      const dlBox = document.getElementById("dl-progress-box");
      const dlFill = document.getElementById("dl-fill-progress");
      const dlStatus = document.getElementById("dl-status-text");

      dlBox.style.display = "block";
      dlFill.style.width = "0%";
      dlStatus.textContent = "Connecting to file stream nodes...";

      try {
        const response = await fetch(activeMovie.streamUrl);
        if (!response.ok) throw new Error("Network stream block refused connection.");
        
        const contentLength = response.headers.get('content-length');
        if (!contentLength) {
          // No content-length header fallback simulation
          let fakeProgress = 0;
          dlStatus.textContent = "Streaming source binary data...";
          const interval = setInterval(() => {
            fakeProgress += 15;
            if (fakeProgress >= 100) {
              clearInterval(interval);
            } else {
              dlFill.style.width = `${fakeProgress}%`;
            }
          }, 400);
        }

        // Setup real streaming download progress monitoring
        const reader = response.body.getReader();
        const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
        let receivedBytes = 0;
        let chunks = [];

        while(true) {
          const { done, value } = await reader.read();
          if (done) break;

          chunks.push(value);
          receivedBytes += value.length;

          if (totalBytes > 0) {
            const percentage = Math.round((receivedBytes / totalBytes) * 100);
            dlFill.style.width = `${percentage}%`;
            dlStatus.textContent = `Saving: ${percentage}% finished`;
          } else {
            dlStatus.textContent = `Saving: ${(receivedBytes / (1024 * 1024)).toFixed(1)} MB saved...`;
          }
        }

        // Assemble byte segments and launch filesystem trigger
        const blob = new Blob(chunks, { type: "video/mp4" });
        const downloadUrl = URL.createObjectURL(blob);
        
        const fileLink = document.createElement("a");
        fileLink.href = downloadUrl;
        fileLink.download = `${activeMovie.title}.mp4`;
        document.body.appendChild(fileLink);
        fileLink.click();

        // Clean memory references
        document.body.removeChild(fileLink);
        URL.revokeObjectURL(downloadUrl);

        dlFill.style.width = "100%";
        dlStatus.textContent = "Download complete! Saved to local device.";
      } catch (err) {
        console.error(err);
        dlStatus.textContent = "Direct download failed. Routing to backup tab stream saver...";
        
        // Backup link-open fallback
        setTimeout(() => {
          const a = document.createElement("a");
          a.href = activeMovie.streamUrl;
          a.setAttribute("download", `${activeMovie.title}.mp4`);
          a.target = "_blank";
          a.click();
          dlBox.style.display = "none";
        }, 1500);
      }
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
  video.src = movie.streamUrl;
  video.load();
  video.play().catch(() => {
    console.log("Browser auto-play rules delayed playback. Interaction required.");
  });

  // Reset Download box
  document.getElementById("dl-progress-box").style.display = "none";
  modal.classList.add("active-modal");
}

function closePlayer() {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("main-video");
  if (video) video.pause();
  if (modal) modal.classList.remove("active-modal");
}
