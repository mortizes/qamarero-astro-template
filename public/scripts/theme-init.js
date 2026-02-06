// Theme initialization - runs before paint to avoid flicker
try {
  const stored = window.localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const theme = stored ?? (systemPrefersDark ? "dark" : "light");

  document.documentElement.classList.toggle("dark", theme === "dark");
} catch {
  // If anything goes wrong, default to dark (design default)
  document.documentElement.classList.add("dark");
}
