export function Hero() {
  return `
    <section id="home" class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <!-- Professional Introduction -->
          <div class="hero-intro">
            <h1 class="hero-title">
              <span class="name-highlight">Devendra Darji</span>
              <span class="role-title">Senior Backend Developer</span>
            </h1>
            
            <div class="experience-badge">
              <i class="fas fa-award"></i>
              <span>Senior Level</span>
            </div>
          </div>

          <!-- Value Proposition -->
          <p class="value-description">
            Senior Backend Engineer with 4+ years of experience in microservices and RESTful APIs. Expert in Python, Django, PostgreSQL, Redis, Docker and AWS. Built an end-to-end Claims Management System improving throughput via microservices architecture.          
          </p>

          <!-- Core Skills -->
          <div class="core-skills">
            <div class="skill-tags">
              <span class="skill-tag primary">Python/Django</span>
              <span class="skill-tag primary">PostgreSQL</span>
              <span class="skill-tag primary">React.js</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">AWS Cloud</span>
              <span class="skill-tag">Microservices</span>
              <span class="skill-tag">REST APIs</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="hero-actions">
            <a href="/Devendra_Darji_Resume_Senior_Backend.pdf" target="_blank" rel="noopener noreferrer" class="btn-primary resume-btn">
              <i class="fas fa-download"></i>
              <span>Download Resume</span>
            </a>
            <a href="#contact" class="btn-secondary">
              <i class="fas fa-envelope"></i>
              <span>Contact Me</span>
            </a>
            <a href="https://www.linkedin.com/in/dev-darji/" target="_blank" rel="noopener noreferrer" class="btn-outline">
              <i class="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Professional Profile Visual -->
        <div class="hero-visual">
          <div class="profile-card">
            <div class="profile-image">
              <div class="image-placeholder">
                <i class="fas fa-user-tie"></i>
              </div>
              <div class="status-dot available"></div>
            </div>
            
            <div class="profile-info">
              <h3>Senior Backend Developer</h3>
              <p>Building scalable systems & cloud architecture</p>
            </div>

            <!-- Contact Info -->
            <div class="quick-contact">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:darjidevendra3@gmail.com">darjidevendra3@gmail.com</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>

            <!-- Floating Tech Icons -->
            <div class="floating-tech">
              <div class="tech-icon tech-1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              </div>
              <div class="tech-icon tech-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
              </div>
              <div class="tech-icon tech-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              </div>
              <div class="tech-icon tech-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
              </div>
              <div class="tech-icon tech-5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <div class="tech-icon tech-6">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              </div>
              <div class="tech-icon tech-7">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              </div>
              <div class="tech-icon tech-8">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              </div>
              <div class="tech-icon tech-9">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
              </div>
              <div class="tech-icon tech-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="OpenAI" />
              </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-down">
        <span>View experience & projects</span>
        <div class="scroll-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  `
}
