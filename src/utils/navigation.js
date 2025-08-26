export function initializeNavigation() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('#hamburger')
  const navMenu = document.querySelector('#nav-menu')
  const navbar = document.querySelector('#navbar')
  const navProgressBar = document.querySelector('#nav-progress-bar')

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active')
      navMenu.classList.toggle('active')
      
      // Prevent body scroll when mobile menu is open
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        document.body.style.overflow = ''
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        document.body.style.overflow = ''
      }
    })
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const navbarHeight = navbar.offsetHeight
        const targetPosition = target.offsetTop - navbarHeight - 20
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })

  // Enhanced scroll effects
  let lastScrollTop = 0
  let scrollTimeout

  function updateNavbarOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollProgress = (scrollTop / documentHeight) * 100

    // Update progress bar
    if (navProgressBar) {
      navProgressBar.style.width = `${Math.min(scrollProgress, 100)}%`
    }

    // Add scrolled class
    if (scrollTop > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }

    // Hide/show navbar on scroll (optional)
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scrolling down
      navbar.classList.add('navbar-hidden')
      navbar.classList.remove('navbar-visible')
    } else {
      // Scrolling up
      navbar.classList.remove('navbar-hidden')
      navbar.classList.add('navbar-visible')
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  }

  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(updateNavbarOnScroll, 10)
  })

  // Active navigation link highlighting
  function updateActiveNavLink() {
    let current = ''
    const sections = document.querySelectorAll('section')
    const navbarHeight = navbar.offsetHeight
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navbarHeight - 100
      const sectionHeight = section.clientHeight
      const scrollPosition = window.pageYOffset
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id')
      }
    })

    // Update active states
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active')
      }
    })
  }

  window.addEventListener('scroll', updateActiveNavLink)
  updateActiveNavLink() // Initial call

  // Logo click to scroll to top
  const logo = document.querySelector('.logo-container')
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active')
      navMenu.classList.remove('active')
      document.body.style.overflow = ''
    }
  })

  // Enhanced hover effects for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)'
    })
    
    link.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.transform = 'translateY(0) scale(1)'
      }
    })
  })

  // Intersection Observer for better performance
  const observerOptions = {
    root: null,
    rootMargin: `-${navbar.offsetHeight}px 0px -50% 0px`,
    threshold: 0
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.getAttribute('id')
      const navLink = document.querySelector(`a[href="#${sectionId}"]`)
      
      if (entry.isIntersecting) {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active')
        })
        // Add active class to current link
        if (navLink) {
          navLink.classList.add('active')
        }
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section)
  })

  // Add loading animation to nav items
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach((item, index) => {
    item.style.animationDelay = `${(index + 1) * 0.1}s`
  })

  // Navbar resize handler
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      // Close mobile menu on resize to desktop
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        document.body.style.overflow = ''
      }
    }, 250)
  })

  // Initialize navbar state
  updateNavbarOnScroll()
  
  // Add smooth reveal animation
  setTimeout(() => {
    navbar.style.transform = 'translateY(0)'
    navbar.style.opacity = '1'
  }, 100)
}
