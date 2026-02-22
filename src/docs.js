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
        Toaster is powered Cloudflare and GitHub.
      </p>

      <hr />

      <h2>Infrastructure</h2>
      <p>
        Cloudflare speed test endpoints are used to delivered via distributed edge networks,
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

const navItems = document.querySelectorAll(".nav");
const doc = document.querySelector(".doc");
const toc = document.querySelector(".toc");

function loadPage(key) {
  const page = pages[key];
  if (!page) return;

  navItems.forEach(n => n.classList.remove("active"));
  document.querySelector(`.nav[data-page="${key}"]`)?.classList.add("active");

  // Fade out
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

    // Fade in
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
