export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return `
    <footer class="footer">
      <div class="container">
        <p>&copy; ${currentYear} Devendra Darji. All rights reserved.</p>
      </div>
    </footer>
  `
}
