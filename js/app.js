function fetchGitCommand(url, table) {
  // XHR
  let http = new XMLHttpRequest();
  http.open("get", url, true);
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

      // AFFICHAGE DES COMMANDES
      const insertContent = document.querySelector(table);
      insertContent.insertAdjacentHTML("beforeend", output);

      // COPIE DE LA COMMANDE DANS LE CLIPBOARD
      const copyBtns = document.querySelectorAll(".toCopy");

      copyBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          //e.preventDefault();
          const attr = btn.getAttribute("name");
          navigator.clipboard.writeText(attr);
          console.log(attr);
        });
      });
    }
  };
}

fetchGitCommand("../data/branch.json", ".branches");
fetchGitCommand("../data/commit.json", ".commit");
fetchGitCommand("../data/logs.json", ".logs");
fetchGitCommand("../data/blame.json", ".blame");
fetchGitCommand("../data/clean.json", ".clean");
fetchGitCommand("../data/stash.json", ".stash");
fetchGitCommand("../data/aide.json", ".aide");

// for (let i = 0; i < copyBtn.length; i++) {
//   copyBtn[i].addEventListener("click", function (e) {
//     const attr = copyBtn[i].getAttribute("name");
//     attr.document.execCommand("copy");

//     // Indicate last copied item
//     for (let i = 0; i < copyBtn.length; i++) {
//       copyBtn[i].innerHTML = '<i class="fas fa-clipboard"></i>Copier';
//       copyBtn[i].classList.remove("copied");
//     }
//     this.innerHTML = '<i class="fas fa-check"></i>Copier';

//     this.classList.add("copied");
//   });
// }
