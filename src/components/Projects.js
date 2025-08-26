export function Projects() {
  return `
    <section id="projects" class="projects">
      <div class="container">
        <div class="projects-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-description">
            Production systems showcasing technical expertise and business impact
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <!-- Project 1: Claim Management System -->
          <div class="project-card">
            <div class="project-image">
              <div class="project-icon">
                <i class="fas fa-file-medical"></i>
              </div>
              <div class="project-badge">Enterprise</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Insurance Claims Management Portal - Zuno</h3>
              <p class="project-description">
                Comprehensive insurance claims management portal compliant with IRDAI regulations, serving multiple insurance partners and processing thousands of claims monthly.
              </p>
              <div class="project-metrics">
                <div class="metric">
                  <span class="metric-value">80%</span>
                  <span class="metric-label">Faster Processing</span>
                </div>
                <div class="metric">
                  <span class="metric-value">75%</span>
                  <span class="metric-label">Reduced DB Load</span>
                </div>
              </div>
              <div class="project-tech">
                <span class="tech-item">Django</span>
                <span class="tech-item">DRF</span>
                <span class="tech-item">React.js</span>
                <span class="tech-item">PostgreSQL</span>
                <span class="tech-item">AWS</span>
                <span class="tech-item">Redis</span>
              </div>
              <div class="project-actions">
                <a href="https://claims.hizuno.com/" class="project-btn primary" target="_blank" >
                  <i class="fas fa-external-link-alt"></i>
                  View Details
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2: Real-time Analytics -->
          <div class="project-card">
            <div class="project-image">
              <div class="project-icon analytics">
                <i class="fas fa-robot"></i>
              </div>
              <div class="project-badge">AI-Powered</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">ChatGPT Code Generator</h3>
              <p class="project-description">
                Web application that generates code snippets using OpenAI's GPT Model with seamless code copying functionality and enhanced user experience.
              </p>
              <div class="project-metrics">
                <div class="metric">
                  <span class="metric-value">OpenAI</span>
                  <span class="metric-label">GPT Integration</span>
                </div>
                <div class="metric">
                  <span class="metric-value">Real-time</span>
                  <span class="metric-label">Code Generation</span>
                </div>
              </div>
              <div class="project-tech">
                <span class="tech-item">Django</span>
                <span class="tech-item">Python</span>
                <span class="tech-item">OpenAI API</span>
                <span class="tech-item">Bootstrap</span>
                <span class="tech-item">Prisma JS</span>
              </div>
              <div class="project-actions">
                <a href="https://github.com/Devdarji/Django-ChatGPT.git" class="project-btn secondary" target="_blank" >
                  <i class="fab fa-github"></i>
                  Code
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3: IMDb Web Scraper -->
          <div class="project-card">
            <div class="project-image">
              <div class="project-icon data">
                <i class="fas fa-spider"></i>
              </div>
              <div class="project-badge">Data Processing</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">IMDb Web Scraper</h3>
              <p class="project-description">
                Advanced web scraping system for extracting movie and TV show data from IMDb.com using Python libraries for development and analysis purposes.
              </p>
              <div class="project-metrics">
                <div class="metric">
                  <span class="metric-value">IMDb</span>
                  <span class="metric-label">Data Source</span>
                </div>
                <div class="metric">
                  <span class="metric-value">Automated</span>
                  <span class="metric-label">Data Extraction</span>
                </div>
              </div>
              <div class="project-tech">
                <span class="tech-item">Python</span>
                <span class="tech-item">Django</span>
                <span class="tech-item">BeautifulSoup</span>
                <span class="tech-item">Web Scraping</span>
              </div>
              <div class="project-actions">
                <a href="https://github.com/Devdarji/movie" class="project-btn secondary" target="_blank" >
                  <i class="fab fa-github"></i>
                  Code
                </a>
              </div>
            </div>
          </div>

          <!-- Project 4: Codexterame Educational Platform -->
          <div class="project-card">
            <div class="project-image">
              <div class="project-icon education">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="project-badge">Educational</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Codexterame Educational Platform</h3>
              <p class="project-description">
                User-friendly web application providing free PDFs, tutorials, and blog content on various topics with accessible educational resources.
              </p>
              <div class="project-metrics">
                <div class="metric">
                  <span class="metric-value">Free</span>
                  <span class="metric-label">Educational Content</span>
                </div>
                <div class="metric">
                  <span class="metric-value">Multi-topic</span>
                  <span class="metric-label">Resource Library</span>
                </div>
              </div>
              <div class="project-tech">
                <span class="tech-item">Django</span>
                <span class="tech-item">Python</span>
                <span class="tech-item">HTML/CSS</span>
                <span class="tech-item">Bootstrap</span>
              </div>
              <div class="project-actions">
                <a href="#" class="project-btn secondary" target="_blank">
                  <i class="fab fa-github"></i>
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
