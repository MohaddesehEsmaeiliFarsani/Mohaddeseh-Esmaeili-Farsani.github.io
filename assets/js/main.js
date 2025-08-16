// Theme toggle with localStorage
const btn = document.getElementById('themeToggle');
const root = document.documentElement;

// apply saved preference
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('theme-light');
if (saved === 'dark')  root.classList.add('theme-dark');

// update icon based on current state
function updateIcon(){
  const dark =
    root.classList.contains('theme-dark') ||
    (!root.classList.contains('theme-light') && matchMedia('(prefers-color-scheme: dark)').matches);
  btn.textContent = dark ? '☀' : '☾';
}
updateIcon();

btn.addEventListener('click', () => {
  if (root.classList.contains('theme-dark')) {
    root.classList.remove('theme-dark');
    root.classList.add('theme-light');
    localStorage.setItem('theme', 'light');
  } else if (root.classList.contains('theme-light')) {
    root.classList.remove('theme-light');
    root.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
  } else {
    // no manual override yet: flip from system preference
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add('theme-light');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  updateIcon();
});
