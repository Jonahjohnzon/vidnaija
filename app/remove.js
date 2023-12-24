export const removeScript = () => {
    const scriptElement = document.querySelector('script[src="https://arvigorothan.com/tag.min.js"]');
    if (scriptElement) {
      scriptElement.parentNode.removeChild(scriptElement);
    }
  };