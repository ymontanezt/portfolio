// Theme script to prevent hydration mismatch
export const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme') || 'dark';
      document.documentElement.className = theme;
    } catch (e) {
      document.documentElement.className = 'dark';
    }
  })();
`;
