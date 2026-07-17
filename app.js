// ==========================================
// 1. PREMIUM PUBLIC DIRECT STREAM DIRECTORY
// ==========================================
const MOVIE_DATABASE = [
    {
        id: "sintel",
        title: "Sintel",
        year: 2010,
        category: "Animation",
        duration: "14:48",
        description: "A beautiful, open-source fantasy animation by the Blender Foundation. It follows a lone warrior named Sintel as she searches for her companion dragon baby.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sintel_poster.jpg",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        magnetLink: "magnet:?xt=urn:btih:3e78f30b91f03d528ef3c99a84b9015c7e96b797&dn=Sintel"
    },
    {
        id: "tears-of-steel",
        title: "Tears of Steel",
        year: 2012,
        category: "Sci-Fi",
        duration: "12:14",
        description: "Set in a dystopian future Amsterdam, a group of scientists try to save the world from destructive giant robots using a cybernetic device.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Tears_of_Steel_poster.jpg",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        magnetLink: "magnet:?xt=urn:btih:8ef3a771e8f2371cb21ffef3759a224a14a382be&dn=Tears+of+Steel"
    },
    {
        id: "night-of-living-dead",
        title: "Night of the Living Dead",
        year: 1968,
        category: "Horror",
        duration: "1h 36m",
        description: "The absolute godfather of modern zombie horror directed by George A. Romero. A mismatched group of survivors barricade themselves in an abandoned farmhouse to escape flesh-eating ghouls.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/1/18/Night_of_the_Living_Dead_theatrical_poster.jpg",
        streamUrl: "https://archive.org/download/Night_of_the_Living_Dead_AVI/Night_of_the_Living_Dead_512kb.mp4",
        magnetLink: "magnet:?xt=urn:btih:51c31872df8849b294318c50b6910a514d7a16db&dn=Night+of+the+Living+Dead"
    },
    {
        id: "charade",
        title: "Charade",
        year: 1963,
        category: "Mystery",
        duration: "1h 53m",
        description: "Commonly called 'the best Hitchcock movie Hitchcock never made'. A romantic thriller starring Audrey Hepburn and Cary Grant, full of double-crosses, humor, and suspense in Paris.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Charade_1963_poster.jpg",
        streamUrl: "https://archive.org/download/Charade_1963_512kb/Charade_1963_512kb.mp4",
        magnetLink: "magnet:?xt=urn:btih:a30f1e8e50bc5fe8a82cf513bc037f68c34f40f0&dn=Charade"
    },
    {
        id: "trip-to-the-moon",
        title: "A Trip to the Moon (Le Voyage dans la Lune)",
        year: 1902,
        category: "Sci-Fi",
        duration: "12:52",
        description: "The legendary silent film masterpiece by Georges Méliès. It features the famous iconic shot of the rocket landing squarely in the eye of the Man in the Moon.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/0/04/Le_Voyage_dans_la_lune.jpg",
        streamUrl: "https://archive.org/download/GeorgeMeliesATripToTheMoon1902/A_Trip_To_The_Moon_512kb.mp4",
        magnetLink: ""
    },
    {
        id: "phantom-opera",
        title: "The Phantom of the Opera",
        year: 1925,
        category: "Classic",
        duration: "1h 33m",
        description: "The chilling silent movie adaptation of Gaston Leroux's novel. Lon Chaney stars as the disfigured Phantom who haunts the Paris Opera House.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Poster_-_Phantom_of_the_Opera_%281925%29_02.jpg",
        streamUrl: "https://archive.org/download/ThePhantomOfTheOpera1925_201904/The%20Phantom%20of%20the%20Opera%20%281925%29.mp4",
        magnetLink: ""
    },
    {
        id: "house-haunted-hill",
        title: "House on Haunted Hill",
        year: 1959,
        category: "Horror",
        duration: "1h 15m",
        description: "An eccentric millionaire offers five strangers $10,000 each if they can survive a night locked inside a spooky, ghost-filled mansion with his bitter wife.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/2/23/House_on_Haunted_Hill_1959_poster.jpg",
        streamUrl: "https://archive.org/download/HouseOnHauntedHill1959/House-On-Haunted-Hill.mp4",
        magnetLink: "magnet:?xt=urn:btih:6274c995ef04d55ea9d79907f9ea1db91880521e&dn=House+on+Haunted+Hill"
    },
    {
        id: "gullivers-travels",
        title: "Gulliver's Travels",
        year: 1939,
        category: "Animation",
        duration: "1h 16m",
        description: "The beautiful, historic Technicolor animated feature film by Fleischer Studios, following Lemuel Gulliver's legendary shipwreck on the island of Lilliput.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Gulliver%27s_Travels_1939_poster.jpg",
        streamUrl: "https://archive.org/download/gullivers-travels-1939_202205/Gulliver%27s%20Travels%20%281939%29.mp4",
        magnetLink: "magnet:?xt=urn:btih:c522f64fa838497ec0be0e527f31be4db8a1923e&dn=Gullivers+Travels"
    },
    {
        id: "his-girl-friday",
        title: "His Girl Friday",
        year: 1940,
        category: "Comedy",
        duration: "1h 32m",
        description: "A fast-talking newspaper editor uses every trick in the book to keep his ex-wife and ace reporter from marrying another man and leaving her career behind.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/5/5a/His_Girl_Friday_1940_poster.jpg",
        streamUrl: "https://archive.org/download/his_girl_friday_1940/his_girl_friday_1940_512kb.mp4",
        magnetLink: "magnet:?xt=urn:btih:3fa8e7343e06fa53cfa39b4b9b9a67448d3db8ba&dn=His+Girl+Friday"
    },
    {
        id: "nosferatu",
        title: "Nosferatu",
        year: 1922,
        category: "Horror",
        duration: "1h 34m",
        description: "The legendary, unauthorized German Expressionist silent vampire masterpiece. Count Orlok travels to Germany, bringing death and a plague in his wake.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Nosferatu_1922_theatrical_poster.jpg",
        streamUrl: "https://archive.org/download/nosferatushortversion/nosferatu_512kb.mp4",
        magnetLink: ""
    },
    {
        id: "big-buck-bunny",
        title: "Big Buck Bunny",
        year: 2008,
        category: "Animation",
        duration: "9:56",
        description: "A giant, gentle forest rabbit decides to get comical revenge on a gang of bullies—three mischievous rodents—who ruined his peaceful morning.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Big_Buck_Bunny_Poster.jpg",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        magnetLink: "magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c&dn=Big+Buck+Bunny"
    },
    {
        id: "sherlock-junior",
        title: "Sherlock Jr.",
        year: 1924,
        category: "Comedy",
        duration: "44:48",
        description: "Buster Keaton stars as a movie projectionist who dreams of being a grand detective. He literally falls asleep and steps into the movie screen to solve a crime.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Sherlock_Jr_Poster_02.jpg",
        streamUrl: "https://archive.org/download/SherlockJr1924/Sherlock%20Jr%20%281924%29.mp4",
        magnetLink: ""
    },
    {
        id: "metropolis",
        title: "Metropolis",
        year: 1927,
        category: "Sci-Fi",
        duration: "2h 33m",
        description: "Fritz Lang's pioneering silent sci-fi masterpiece. Set in a futuristic city split between wealthy industrialists and oppressed workers, it introduces the iconic cinematic robot, the 'Maschinenmensch'.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/9/97/Metropolis_poster_back.jpg",
        streamUrl: "https://archive.org/download/Metropolis1927_201903/Metropolis.mp4",
        magnetLink: ""
    },
    {
        id: "detour",
        title: "Detour",
        year: 1945,
        category: "Mystery",
        duration: "1h 07m",
        description: "A grit-and-shadow masterpiece of zero-budget Film Noir. A hitchhiker's life spirals into an inescapable nightmare after he accidentally takes the identity of a dead man.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/b/be/Detour_%281945%29_poster.jpg",
        streamUrl: "https://archive.org/download/detour_1945/detour_1945.mp4",
        magnetLink: "magnet:?xt=urn:btih:e585f4007886df2fa6bf0fca02d13b3d17911b33&dn=Detour"
    },
    {
        id: "the-general",
        title: "The General",
        year: 1926,
        category: "Comedy",
        duration: "1h 18m",
        description: "Buster Keaton’s masterpiece of silent cinema. A brave locomotive engineer is rejected by the army, but single-handedly chases after Union spies who stole his beloved train.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/b/b3/The_General_%281926_film_poster%29.jpg",
        streamUrl: "https://archive.org/download/TheGeneralBusterKeaton/TheGeneral_512kb.mp4",
        magnetLink: ""
    },
    {
        id: "cabinet-caligari",
        title: "The Cabinet of Dr. Caligari",
        year: 1920,
        category: "Horror",
        duration: "1h 17m",
        description: "The definitive landmark of German Expressionist cinema. A crazed hypnotist uses a brainwashed sleepwalker to commit grisly, nighttime murders.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/1/14/Das_Cabinet_des_Dr_Caligari_poster.jpg",
        streamUrl: "https://archive.org/download/TheCabinetOfDr.Caligari1920/Caligari_512kb.mp4",
        magnetLink: ""
    },
    {
        id: "cosmic-laundromat",
        title: "Cosmos Laundromat",
        year: 2015,
        category: "Animation",
        duration: "12:03",
        description: "An absurdly creative open-source short film by the Blender Foundation. On a desolate island, a suicidal sheep meets a quirky salesman who offers him the ride of his life.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Cosmos_Laundromat_poster.jpg",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        magnetLink: "magnet:?xt=urn:btih:7c66d8e20258169ff55bf689e4722513f59223e7&dn=Cosmos+Laundromat"
    },
    {
        id: "carnival-of-souls",
        title: "Carnival of Souls",
        year: 1962,
        category: "Horror",
        duration: "1h 18m",
        description: "After a drag-racing accident plunges her car off a bridge, a church organist finds herself drawn to a mysterious, deserted lakeside pavilion haunted by ghoulish figures.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/8/87/Carnival_of_Souls_theatrical_release_poster.jpg",
        streamUrl: "https://archive.org/download/CarnivalOfSouls_805/CarnivalOfSouls.mp4",
        magnetLink: "magnet:?xt=urn:btih:571d49f056ecbc865d4d38ca58374fb91e0a8ff2&dn=Carnival+of+Souls"
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
  },
  {
    id: "n3",
    title: "How Multi-CDN Architectures and Edge Caching Power Next-Gen Web Players",
    author: "♣︎leoskyler♣︎",
    source: "CDN Networks",
    link: "https://www.cdnetworks.com/blog/media-delivery/streaming-trends/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    body: "With global web traffic hitting record highs, custom video portals are abandoning single-source hosting. Developers are utilizing multi-CDN routing and edge compute caching to serve raw MP4 streams under 500ms worldwide."
  },
  {
    id: "n4",
    title: "Metadata Standardization: The Secret Weapon for Monetizing Deep Web Catalogs",
    author: "♣︎leoskyler♣︎",
    source: "Streaming Tech Group",
    link: "https://www.wordbank.com/blog/global-trends/10-trends-shaping-streaming-and-entertainment-in-2026/",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
    body: "Acquiring massive indie and public-domain film catalogs is only half the battle. Engineers are leveraging standardized, search-optimized JSON database arrays to dynamically populate and monetize on-demand web players."
  },
  {
    id: "n5",
    title: "The Rise of Open-Source Creative Pipelines in Generative Web Video Production",
    author: "♣︎leoskyler♣︎",
    source: "Trends Digital",
    link: "https://www.trendsdigital.com/post/entertainment-trends-2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    body: "Generative video frameworks are transitioning from niche novelties into standard infrastructure. The democratization of high-fidelity open rendering pipelines allows self-hosted web platforms to build interactive media hubs."
  },
  {
    id: "n6",
    title: "Hybrid Monetization Takes Over Web Streaming as AVOD and FAST Matures",
    author: "♣︎leoskyler♣︎",
    source: "Avenga Tech",
    link: "https://www.avenga.com/magazine/trends-in-the-media-and-entertainment-industry/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    body: "The landscape is shifting away from strict subscription paywalls. Independent platforms are turning toward custom, ad-supported free streaming architectures (FAST) to captivate audiences and diversify web revenues."
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
