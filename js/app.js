
let http = new XMLHttpRequest();

http.open("get", "../data/branch.json", true);

http.send();

http.onload = function () {
  
  if (this.readyState == 4 && this.status == 200) {
    
    let commands = JSON.parse(this.responseText);

    let output = "";

    for (let item of commands) {
      output += `
			
          <tr class="alt-header"></tr>
          <tr class="git-command-row">
            <td class="git-command-data git-command-toCopy">${item.def}</td>
            <td class="git-command-data">
              <span class="git-desc-command-mod">${item.def}</span>
              ${item.command}
            </td>
            <td class="git-command-data">
              <button name="${item.command}" class="toCopy" type="button">
                <i class="fas fa-clipboard"></i>Copier
              </button>
            </td>
          </tr>
        
			`;
    }

    const insertContent = document.querySelector(".branches");

    insertContent.insertAdjacentHTML("beforeend", output);
  }
};

//------------------------------//

// Credit for copyToCliboard(text) function: https://stackoverflow.com/a/33928558

// Copies a string to the clipboard. Must be called from within an
// event handler such as click. May return false if it failed, but
// this is not always possible. Browser support for Chrome 43+,
// Firefox 42+, Safari 10+, Edge and IE 10+.
// IE: The clipboard feature may be disabled by an administrator. By
// default a prompt is shown the first time the clipboard is
// used (per session).

// function copyToClipboard(text) {
//   if (window.clipboardData && window.clipboardData.setData) {
//     // IE specific code path to prevent textarea being shown while dialog is visible.
//     return clipboardData.setData('Text', text);
//   } else if (
//     document.queryCommandSupported &&
//     document.queryCommandSupported('copy')
//   ) {
//     var textarea = document.createElement('textarea');
//     textarea.textContent = text;
//     textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
//     document.body.appendChild(textarea);
//     textarea.select();
//     try {
//       return document.execCommand('copy'); // Security exception may be thrown by some browsers.
//     } catch (ex) {
//       console.warn('Copy to clipboard failed.', ex);
//       return false;
//     } finally {
//       document.body.removeChild(textarea);
//     }
//   }
// }

// var copyBtn = document.getElementsByClassName('toCopy');

// for (var i = 0; i < copyBtn.length; i++) {
//   copyBtn[i].addEventListener('click', function(event) {
//     copyToClipboard(this.getAttribute('name'));

//     // Indicate last copied item
//     for (var i = 0; i < copyBtn.length; i++) {
//       copyBtn[i].innerHTML = '<i class="fas fa-clipboard"></i>Copier';
//       copyBtn[i].classList.remove('copied');
//     }
//     this.innerHTML = '<i class="fas fa-check"></i>Copier';

//     this.classList.add('copied');
//   });
// }
