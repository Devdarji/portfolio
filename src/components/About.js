export function About() {
  return `
    <section id="about" class="about">
      <div class="container">
        <div class="about-header">
          <h2 class="section-title">Professional Background</h2>
          <p class="section-description">
            Passionate about building robust, scalable systems • Actively seeking new opportunities
          </p>
        </div>

        <div class="about-content">
          <!-- Core Expertise Areas -->
          <div class="expertise-highlights">
            <div class="expertise-card">
              <div class="expertise-icon">
                <i class="fas fa-server"></i>
              </div>
              <h3>System Architecture</h3>
              <p>Designing distributed systems that handle enterprise-scale workloads with reliability</p>
              <div class="tech-tags">
                <span>Microservices</span>
                <span>Event-Driven</span>
                <span>CQRS</span>
              </div>
            </div>

            <div class="expertise-card">
              <div class="expertise-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>Performance Engineering</h3>
              <p>Optimizing systems for speed, efficiency, and cost-effectiveness at scale</p>
              <div class="tech-tags">
                <span>Caching</span>
                <span>Load Balancing</span>
                <span>Query Optimization</span>
              </div>
            </div>

            <div class="expertise-card">
              <div class="expertise-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Security & Compliance</h3>
              <p>Implementing secure authentication, authorization, and data protection standards</p>
              <div class="tech-tags">
                <span>OAuth2/JWT</span>
                <span>GDPR</span>
                <span>Encryption</span>
              </div>
            </div>
          </div>

          <!-- Professional Philosophy -->
          <div class="professional-summary">
            <div class="summary-content">
              <h3>Approach & Philosophy</h3>
              <p>
                I believe in <strong>pragmatic engineering</strong> - choosing the right tool for the job 
                while maintaining code quality and system reliability. My focus is on delivering 
                business value through well-architected, maintainable solutions.
              </p>
              
              <div class="key-principles">
                <h4>Core Principles</h4>
                <ul>
                  <li>🎯 <strong>Business Impact:</strong> Technology should solve real problems and drive results</li>
                  <li>🔧 <strong>Maintainability:</strong> Clean, documented code that teams can evolve</li>
                  <li>📈 <strong>Scalability:</strong> Systems designed to grow with business needs</li>
                  <li>🤝 <strong>Collaboration:</strong> Cross-functional teamwork and knowledge sharing</li>
                </ul>
              </div>
            </div>

            <div class="current-focus">
              <h3>Current Interests</h3>
              <div class="focus-grid">
                <div class="focus-item">
                  <i class="fas fa-robot"></i>
                  <span>AI/ML Integration</span>
                </div>
                <div class="focus-item">
                  <i class="fas fa-network-wired"></i>
                  <span>System Design</span>
                </div>
                <div class="focus-item">
                  <i class="fas fa-users"></i>
                  <span>Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
