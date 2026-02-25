const pages = {
  introduction: {
    title: "Introduction",
    breadcrumb: "Docs / Introduction",
    toc: ["What is Toaster?", "Design philosophy", "How it works"],
    content: `
      <p class="lead">
        Welcome to Toaster — a fast, minimal, and realistic internet speed testing tool
        built for clarity, sustained accuracy, and modern performance standards.
      </p>

      <hr />

      <h2>What is Toaster?</h2>
      <p>
        Toaster is a browser-based speed testing utility designed to measure real-world
        download throughput using sustained data transfers instead of short synthetic bursts.
      </p>
      <p>
        Many traditional speed tests rely on momentary spikes that can inflate results.
        Toaster instead measures performance over a fixed time window to provide
        numbers that better reflect everyday usage scenarios such as streaming,
        gaming, cloud backups, and large downloads.
      </p>
      <p>
        The entire application runs client-side with no installation,
        no login system, and no tracking mechanisms.
      </p>

      <hr />

      <h2>Design philosophy</h2>
      <p>
        Toaster was built around three principles: simplicity, transparency, and technical honesty.
      </p>
      <p>
        Simplicity ensures the interface remains clean and distraction-free.
        Transparency ensures users understand how measurements are calculated.
        Technical honesty ensures the numbers reflect sustained throughput rather than peak bursts.
      </p>

      <hr />

      <h2>How it works</h2>
      <p>
        Toaster downloads data from globally distributed edge endpoints over a fixed duration.
        The total amount of transferred data is measured and converted into an
        average Mbps value.
      </p>
      <p>
        All processing happens inside your browser.
        No personal information, IP logging, or device fingerprinting occurs.
      </p>
    `,
    next: "installation"
  },

  installation: {
    title: "Installation",
    breadcrumb: "Docs / Installation",
    toc: ["Requirements", "Local setup", "Deployment"],
    content: `
      <p class="lead">
        Setting up Toaster is straightforward and requires no build tools,
        no package managers, and no backend configuration.
      </p>

      <hr />

      <h2>Requirements</h2>
      <p>
        Any modern browser with support for Fetch and Streams APIs is sufficient.
        Chrome, Edge, Firefox, and Safari are fully supported.
      </p>
      <p>
        Because Toaster operates entirely client-side, no databases,
        authentication services, or server runtimes are required.
      </p>

      <hr />

      <h2>Local setup</h2>
      <p>
        Clone the GitHub repository and open the project folder.
        You may open index.html directly, but using a lightweight local server
        such as VS Code Live Server is recommended.
      </p>
      <p>
        Running through HTTP avoids potential browser security restrictions
        that sometimes affect file-based execution.
      </p>

      <hr />

      <h2>Deployment</h2>
      <p>
        Toaster can be deployed on GitHub Pages, Cloudflare Pages,
        Netlify, Vercel, or any static hosting provider.
      </p>
      <p>
        Since the project contains only static assets,
        deployment typically requires no configuration beyond uploading files.
      </p>
    `,
    next: "usage"
  },

  usage: {
    title: "Usage",
    breadcrumb: "Docs / Usage",
    toc: ["Running a test", "Understanding results", "Best practices"],
    content: `
      <p class="lead">
        Toaster is designed to require zero configuration.
        The test begins automatically upon loading.
      </p>

      <hr />

      <h2>Running a test</h2>
      <p>
        Once the page loads, Toaster immediately initiates data transfers
        from distributed endpoints.
      </p>
      <p>
        The test runs for a fixed duration to calculate a stable,
        sustained average throughput.
      </p>

      <hr />

      <h2>Understanding results</h2>
      <p>
        Final results are displayed in megabits per second (Mbps).
        This value represents sustained throughput rather than
        the highest instantaneous spike.
      </p>
      <p>
        Results may vary depending on network congestion,
        Wi-Fi interference, device performance, and VPN usage.
      </p>

      <hr />

      <h2>Best practices</h2>
      <p>
        Close background downloads and streaming applications
        before running the test.
      </p>
      <p>
        For the most accurate measurement, use a wired Ethernet connection
        and run multiple tests to calculate an average.
      </p>
    `,
    next: "accuracy"
  },

  accuracy: {
    title: "Accuracy",
    breadcrumb: "Docs / Accuracy",
    toc: ["Methodology", "Environmental factors", "Limitations"],
    content: `
      <p class="lead">
        Accuracy is a core design objective of Toaster.
        The testing model emphasizes consistency over artificial spikes.
      </p>

      <hr />

      <h2>Methodology</h2>
      <p>
        Instead of capturing peak bursts, Toaster measures
        data transfer over a continuous time window.
      </p>
      <p>
        This smooths out temporary fluctuations and
        provides a result that better reflects real-world performance.
      </p>

      <hr />

      <h2>Environmental factors</h2>
      <p>
        ISP congestion, routing paths, Wi-Fi interference,
        and hardware limitations may affect results.
      </p>
      <p>
        Testing on wired connections typically produces
        more consistent measurements than wireless networks.
      </p>

      <hr />

      <h2>Limitations</h2>
      <p>
        No browser-based speed test can perfectly replicate
        every network condition.
      </p>
      <p>
        Results should be interpreted as a reliable estimate
        of sustained throughput rather than a guaranteed maximum.
      </p>
    `,
    next: "privacy"
  },

  privacy: {
    title: "Privacy",
    breadcrumb: "Docs / Privacy",
    toc: ["Data handling", "Tracking policy", "Transparency"],
    content: `
      <p class="lead">
        Privacy is treated as a first-class priority in Toaster.
      </p>

      <hr />

      <h2>Data handling</h2>
      <p>
        Toaster does not store IP addresses,
        personal identifiers, or usage history.
      </p>
      <p>
        All calculations are performed locally within your browser.
      </p>

      <hr />

      <h2>Tracking policy</h2>
      <p>
        No analytics scripts, tracking pixels,
        or fingerprinting mechanisms are embedded.
      </p>
      <p>
        The application does not use cookies
        for profiling or behavioral tracking.
      </p>

      <hr />

      <h2>Transparency</h2>
      <p>
        Toaster is open source and publicly available on GitHub.
      </p>
      <p>
        Anyone may inspect the source code
        to verify how data is handled.
      </p>
    `,
    next: "credits"
  },

  credits: {
    title: "Credits",
    breadcrumb: "Docs / Credits",
    toc: ["Infrastructure", "Open source"],
    content: `
      <p class="lead">
        Toaster is powered by Cloudflare and GitHub.
      </p>

      <hr />

      <h2>Infrastructure</h2>
      <p>
        Cloudflare speed test endpoints are delivered via distributed edge networks,
        ensuring low latency and global availability.
      </p>
      <p>
        This allows consistent measurements
        regardless of geographic location.
      </p>

      <hr />

      <h2>Open source</h2>
      <p>
        The project is maintained openly on GitHub.
      </p>
      <p>
        Contributions, issue reports, and feature suggestions
        are welcome from the community.
      </p>
    `,
    next: null
  }
};

// ─── Build a flat search index from all pages ────────────────────────────────

const searchIndex = [];

Object.entries(pages).forEach(([key, page]) => {
  // Index the page title itself
  searchIndex.push({
    page: key,
    title: page.title,
    section: null,
    excerpt: page.toc.join(" · ")
  });

  // Index each h2 section by stripping HTML from content
  const tmp = document.createElement("div");
  tmp.innerHTML = page.content;
  const headings = tmp.querySelectorAll("h2");
  headings.forEach(h2 => {
    const sectionTitle = h2.textContent.trim();
    let excerpt = "";
    let sibling = h2.nextElementSibling;
    while (sibling && sibling.tagName !== "H2" && sibling.tagName !== "HR") {
      if (sibling.tagName === "P") {
        excerpt += sibling.textContent.trim() + " ";
      }
      sibling = sibling.nextElementSibling;
    }
    searchIndex.push({
      page: key,
      title: page.title,
      section: sectionTitle,
      excerpt: excerpt.trim().slice(0, 120)
    });
  });
});

// ─── Search logic ─────────────────────────────────────────────────────────────

const PAGE_ICONS = {
  introduction: "📖",
  installation: "⚙️",
  usage: "▶️",
  accuracy: "🎯",
  privacy: "🔒",
  credits: "✨"
};

function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\\]\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

function runSearch(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return searchIndex
    .filter(item => {
      const haystack = [item.title, item.section, item.excerpt]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, 8);
}

// ─── Dropdown rendering ───────────────────────────────────────────────────────

const searchInput = document.getElementById("search-input");
const dropdown = document.getElementById("search-dropdown");
let activeIndex = -1;
let currentResults = [];

function renderDropdown(query) {
  const results = runSearch(query);
  currentResults = results;
  activeIndex = -1;
  dropdown.innerHTML = "";

  if (!query || query.length < 2) {
    dropdown.classList.add("hidden");
    return;
  }

  if (results.length === 0) {
    dropdown.innerHTML = `
      <div class="search-empty">
        <div class="search-empty-icon">🔍</div>
        No results for <strong>"${query}"</strong>
      </div>`;
    dropdown.classList.remove("hidden");
    return;
  }

  const header = document.createElement("div");
  header.className = "search-dropdown-header";
  header.textContent = \
  `${results.length} result${results.length !== 1 ? "s" : ""}`;
  dropdown.appendChild(header);

  results.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "search-result-item";
    el.dataset.index = i;

    const label = item.section ? item.section : item.title;
    const subLabel = item.section ? item.title : item.excerpt;

    el.innerHTML = `
      <div class="search-result-icon">${PAGE_ICONS[item.page] || "📄"}</div>
      <div class="search-result-body">
        <div class="search-result-title">${highlight(label, query)}</div>
        <div class="search-result-excerpt">${highlight(subLabel || "", query)}</div>
      </div>
      <div class="search-result-tag">${item.title}</div>
    `;

    el.addEventListener("mousedown", e => {
      e.preventDefault();
      navigateTo(item);
    });

    dropdown.appendChild(el);
  });

  const footer = document.createElement("div");
  footer.className = "search-footer";
  footer.innerHTML = `
    <span class="search-footer-hint"><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
    <span class="search-footer-hint"><kbd>↵</kbd> select</span>
    <span class="search-footer-hint"><kbd>Esc</kbd> close</span>
  `;
  dropdown.appendChild(footer);

  dropdown.classList.remove("hidden");
}

function setActive(index) {
  const items = dropdown.querySelectorAll(".search-result-item");
  items.forEach(el => el.classList.remove("active"));
  if (index >= 0 && index < items.length) {
    items[index].classList.add("active");
    items[index].scrollIntoView({ block: "nearest" });
  }
  activeIndex = index;
}

function navigateTo(item) {
  loadPage(item.page);
  closeDropdown();
  searchInput.value = "";
}

function closeDropdown() {
  dropdown.classList.add("hidden");
  activeIndex = -1;
  currentResults = [];
}

searchInput.addEventListener("input", e => {
  renderDropdown(e.target.value.trim());
});

searchInput.addEventListener("keydown", e => {
  const items = dropdown.querySelectorAll(".search-result-item");
  if (e.key === "ArrowDown") {
    e.preventDefault();
    setActive(Math.min(activeIndex + 1, items.length - 1));
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    setActive(Math.max(activeIndex - 1, 0));
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (activeIndex >= 0 && currentResults[activeIndex]) {
      navigateTo(currentResults[activeIndex]);
    } else if (currentResults.length > 0) {
      navigateTo(currentResults[0]);
    }
  } else if (e.key === "Escape") {
    closeDropdown();
    searchInput.blur();
  }
});

document.addEventListener("mousedown", e => {
  if (!e.target.closest(".search-wrapper")) {
    closeDropdown();
  }
});

searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim().length >= 2) {
    renderDropdown(searchInput.value.trim());
  }
});

// ─── Page navigation ──────────────────────────────────────────────────────────

const navItems = document.querySelectorAll(".nav");
const doc = document.getElementById("doc");
const toc = document.getElementById("toc");

function loadPage(key) {
  const page = pages[key];
  if (!page) return;

  navItems.forEach(n => n.classList.remove("active"));
  document.querySelector(`.nav[data-page="${key}"]`)?.classList.add("active");

  doc.style.opacity = 0;

  setTimeout(() => {
    doc.innerHTML = `
      <p class="breadcrumb">${page.breadcrumb}</p>
      <h1>${page.title}</h1>
      ${page.content}
      ${
        page.next
          ? `<div class="next">
              <span>Next</span>
              <a href="#" id="next-btn">${pages[page.next].title} →</a>
            </div>`
          : ""
      }
      <p class="updated">Last updated on February 11, 2026</p>
    `;

    doc.style.opacity = 1;

    toc.innerHTML = `<p class="toc-title">On this page</p>`;
    page.toc.forEach(t => {
      const a = document.createElement("a");
      a.textContent = t;
      toc.appendChild(a);
    });

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
      nextBtn.onclick = e => {
        e.preventDefault();
        loadPage(page.next);
      };
    }
  }, 150);
}

navItems.forEach(nav => {
  nav.onclick = () => loadPage(nav.dataset.page);
});

doc.style.transition = "opacity 0.25s ease";
loadPage("introduction");