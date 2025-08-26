export function Skills() {
  return `
    <section id="skills" class="skills">
      <div class="container">
        <div class="skills-header">
          <h2 class="section-title">Technical Proficiencies</h2>
          <p class="section-description">
            Comprehensive skill set across modern backend technologies and enterprise solutions
          </p>
        </div>

        <!-- Core Competencies -->
        <div class="core-competencies">
          <div class="competency-category">
            <div class="category-header">
              <div class="category-icon">
                <i class="fas fa-code"></i>
              </div>
              <h3>Programming Languages</h3>
            </div>
            <div class="skills-grid">
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <div class="skill-details">
                  <h4>Python</h4>
                  <p>Django, Flask, Celery</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 95%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                <div class="skill-details">
                  <h4>SQL</h4>
                  <p>MySQL, PostgreSQL</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <div class="skill-details">
                  <h4>JavaScript/Node.js</h4>
                  <p>Express, TypeScript</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 68%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" />
                <div class="skill-details">
                  <h4>Go</h4>
                  <p>Gin</p>
                  <!-- <p>Gin, Gorilla, Microservices</p> -->
                  <div class="skill-level">
                    <div class="level-bar" style="width: 30%"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div class="competency-category">
            <div class="category-header">
              <div class="category-icon">
                <i class="fas fa-database"></i>
              </div>
              <h3>Database Technologies</h3>
            </div>
            <div class="skills-grid">
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                <div class="skill-details">
                  <h4>PostgreSQL</h4>
                  <p>Complex queries, indexing, partitioning</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 92%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                <div class="skill-details">
                  <h4>MySQL</h4>
                  <p>Complex queries, indexing, partitioning</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 92%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
                <div class="skill-details">
                  <h4>Redis</h4>
                  <p>Caching, pub/sub, clustering</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="competency-category">
            <div class="category-header">
              <div class="category-icon">
                <i class="fab fa-aws"></i>
              </div>
              <h3>Cloud & Infrastructure</h3>
            </div>
            <div class="skills-grid">
              <div class="skill-card primary">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                <div class="skill-details">
                  <h4>AWS</h4>
                  <p>EC2, Lambda, S3, ECS, CloudWatch</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                <div class="skill-details">
                  <h4>Docker</h4>
                  <p>Multi-stage builds, optimization</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>

              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" />
                <div class="skill-details">
                  <h4>Nginx</h4>
                  <p>Load balancing, reverse proxy, caching</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>

              <div class="skill-card primary">
                <img src="https://docs.gunicorn.org/en/stable/_static/gunicorn.png" alt="Gunicorn" />
                <div class="skill-details">
                  <h4>Gunicorn</h4>
                  <p>WSGI HTTP Server, Worker Management, Process Control</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>

              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
                <div class="skill-details">
                  <h4>Linux</h4>
                  <p>System Administration, Shell Scripting, Server Management</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="competency-category">
            <div class="category-header">
              <div class="category-icon">
                <i class="fas fa-layer-group"></i>
              </div>
              <h3>Frameworks & Libraries</h3>
            </div>
            <div class="skills-grid">
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
                <div class="skill-details">
                  <h4>Django</h4>
                  <p>REST Framework, ORM, Authentication</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 95%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card">
                <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" />
                <div class="skill-details">
                  <h4>FastAPI</h4>
                  <p>Async APIs, Pydantic, OpenAPI</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 35%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                <div class="skill-details">
                  <h4>Express.js</h4>
                  <p>Middleware, routing, REST APIs</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 60%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="competency-category">
            <div class="category-header">
              <div class="category-icon">
                <i class="fas fa-tools"></i>
              </div>
              <h3>Tools & Development Workflow</h3>
            </div>
            <div class="skills-grid">
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <div class="skill-details">
                  <h4>Git & GitHub</h4>
                  <p>Version control, branching, CI/CD</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" />
                <div class="skill-details">
                  <h4>Jenkins</h4>
                  <p>Pipeline automation, deployment</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 75%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" />
                <div class="skill-details">
                  <h4>Jira & Confluence</h4>
                  <p>Project management, documentation</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 90%"></div>
                  </div>
                </div>
              </div>
              <div class="skill-card primary">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                <div class="skill-details">
                  <h4>IDE & Editors</h4>
                  <p>VS Code, PyCharm, Sublime, Notepad++</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 92%"></div>
                  </div>
                </div>
              </div>

              <div class="skill-card primary">
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                <div class="skill-details">
                  <h4>Postman</h4>
                  <p>API Testing, Collections, Automation</p>
                  <div class="skill-level">
                    <div class="level-bar" style="width: 92%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Specialized Skills -->
        <div class="specialized-skills">
          <h3>Specialized Competencies</h3>
          <div class="specialization-grid">
            <div class="specialization-item">
              <span class="specialization-label">API Design</span>
              <div class="specialization-tags">
                <span>RESTful APIs</span>
                <span>JWT (Authentication)</span>
                <span>Django REST Framework (DRF)</span>
                <span>OpenAPI</span>
              </div>
            </div>
            <div class="specialization-item">
              <span class="specialization-label">Message Systems</span>
              <div class="specialization-tags">
                <span>RabbitMQ</span>
                <span>AWS SQS/SNS</span>
              </div>
            </div>
            <div class="specialization-item">
              <span class="specialization-label">Monitoring</span>
              <div class="specialization-tags">
                <span>Sentry</span>
                <span>AWS CloudWatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
