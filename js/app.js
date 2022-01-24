function copyToCommand() {
  
  const commandToCopy = document.querySelector(".git-command-toCopy");
  const commandToPlace = document.querySelector(".git-desc-command-mod");  
  
  const contentToCopy = commandToPlace.innerText = commandToCopy.innerHTML;
  
}
copyToCommand()




// Credit for copyToCliboard(text) function: https://stackoverflow.com/a/33928558

// Copies a string to the clipboard. Must be called from within an
// event handler such as click. May return false if it failed, but
// this is not always possible. Browser support for Chrome 43+,
// Firefox 42+, Safari 10+, Edge and IE 10+.
// IE: The clipboard feature may be disabled by an administrator. By
// default a prompt is shown the first time the clipboard is
// used (per session).

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData('Text', text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported('copy')
  ) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn('Copy to clipboard failed.', ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

var copyBtn = document.getElementsByClassName('toCopy');

for (var i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener('click', function(event) {
    copyToClipboard(this.getAttribute('name'));

    // Indicate last copied item
    for (var i = 0; i < copyBtn.length; i++) {
      copyBtn[i].innerHTML = '<i class="fas fa-clipboard"></i>Copier';
      copyBtn[i].classList.remove('copied');
    }
    this.innerHTML = '<i class="fas fa-check"></i>Copier';

    this.classList.add('copied');
  });
}
