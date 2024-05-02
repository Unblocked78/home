javascript: (() => {

  // Ask for game type
  const where = prompt("Do you want games, or (there is nothing)?");

  // Ask for specific game
  const what = prompt("What game?");

  // Generate iframe URL
  const url = `https://unblocked78.github.io/${where}/${what}.html`;  

  // Create iframe element
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = '100%';
  iframe.height = '100%';

  // Set styles
  iframe.style.position = 'absolute';
  iframe.style.top = 0;
  iframe.style.left = 0;

  // Append to body
  document.body.appendChild(iframe);
  
})();


