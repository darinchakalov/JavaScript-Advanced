function solve() {
    let author = document.querySelector("#creator");
    let title = document.querySelector("#title");
    let category = document.querySelector("#category");
    let content = document.querySelector("#content");
    let createBtn = document.querySelector("body > div.site > div > aside > section:nth-child(1) > form > button");
    let postsSection = document.querySelector("body > div.site > div > main > section");
    let archiveOl = document.querySelector("body > div.site > div > aside > section.archive-section > ol");

     author.value = "Darin";
     title.value = "Test Article";
     category.value = "Testing";
     content.value = "I have no idea what am I doing here!";

    createBtn.addEventListener("click", (event) => {
        event.preventDefault();
        //   if (author.value && title.value && category.value && content.value) {
        let article = `<article>
            <h1>${title.value}</h1>
            <p>Category:
               <strong>${category.value}</strong>
            </p>
            <p>Creator:
               <strong>${author.value}</strong>
            </p>
            <p>${content.value}</p>
            <div class='buttons'>
               <button class='btn delete'>Delete</button>
               <button class="btn archive">Archive</button>
            </div>
         </article>`;
        postsSection.innerHTML += article;

        Array.from(postsSection.querySelectorAll("button")).forEach((btn) => {
            btn.addEventListener("click", () => {
                let currentArticle = btn.parentNode.parentNode;
                if (btn.textContent === "Archive") {
                    let currentTitle = currentArticle.querySelector("h1");
                    let currentTitleLi = document.createElement("li");
                    currentTitleLi.textContent = currentTitle.textContent;
                    archiveOl.appendChild(currentTitleLi);
                    currentArticle.remove();
                    let listOfLis = Array.from(archiveOl.children);
                    listOfLis.sort((a, b) => a.textContent.localeCompare(b.textContent));
                    //
                    archiveOl.querySelectorAll("li").forEach((li) => {
                        li.remove();
                    });
                    listOfLis.forEach((li) => {
                        archiveOl.appendChild(li);
                    });
                } else if (btn.textContent === "Delete") {
                    currentArticle.remove();
                }
            });
        });
        //}
    });
}
