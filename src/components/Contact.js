export function Contact() {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-header">
          <h2 class="section-title">Let's Connect</h2>
          <p class="section-description">
            Open to new opportunities • Ready to discuss how I can contribute to your team
          </p>
        </div>

        <!-- Main Contact Section -->
        <div class="contact-main">
          <!-- Left Column: Contact Info -->
          <div class="contact-left">
            <h3 class="contact-section-title">
              <i class="fas fa-address-book"></i>
              Contact Information
            </h3>
            
            <div class="contact-list">
              <div class="contact-card primary-contact">
                <div class="contact-icon-wrapper">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-info-text">
                  <h4>Email</h4>
                  <a href="mailto:darjidevendra3@gmail.com">darjidevendra3@gmail.com</a>
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-icon-wrapper">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-info-text">
                  <h4>Phone</h4>
                  <a href="tel:+91 9714241860">+91 9714241860</a>
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-icon-wrapper">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-info-text">
                  <h4>Location</h4>
                  <span>Ahmedabad, Gujarat</span>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-section">
              <h4>Professional Profiles</h4>
              <div class="social-grid">
                <a href="https://www.linkedin.com/in/dev-darji/" target="_blank" rel="noopener noreferrer" class="social-card linkedin">
                  <i class="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Devdarji" target="_blank" rel="noopener noreferrer" class="social-card github">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://x.com/_devenofficial_" target="_blank" rel="noopener noreferrer" class="social-card twitter">
                  <i class="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a>
                <a href="mailto:darjidevendra3@gmail.com" class="social-card email">
                  <i class="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact Form -->
          <div class="contact-right">
            <h3 class="contact-section-title">
              <i class="fas fa-paper-plane"></i>
              Send a Message
            </h3>
            
            <form class="contact-form" id="contact-form" action="#" method="POST">
              <div class="form-grid">
                <div class="form-field">
                  <label for="contact-name">Name *</label>
                  <input type="text" id="contact-name" name="name" placeholder="Your full name" required>
                </div>
                <div class="form-field">
                  <label for="contact-email">Email *</label>
                  <input type="email" id="contact-email" name="email" placeholder="your.email@company.com" required>
                </div>
              </div>
              
              <div class="form-field">
                <label for="contact-company">Company</label>
                <input type="text" id="contact-company" name="company" placeholder="Your company name (optional)">
              </div>
              
              <div class="form-field">
                <label for="contact-subject">Subject *</label>
                <select id="contact-subject" name="subject" required>
                  <option value="">Select inquiry type</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="form-field">
                <label for="contact-message">Message *</label>
                <textarea id="contact-message" name="message" placeholder="Tell me about the opportunity, project requirements, or how I can help..." rows="4" required></textarea>
              </div>
              
              <button type="submit" class="form-submit">
                <i class="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
}
