function solve() {
    let name = document.querySelector(
        "body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]"
    );
    let date = document.querySelector(
        "body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]"
    );
    let dropDownModule = document.querySelector(
        "body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select"
    );
    let addBtn = document.querySelector(
        "body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button"
    );
    let modulesSection = document.querySelector("body > main > section.user-view.section-view > div");

    let basicsModule = document.createElement("div");
    let basicsH3 = document.createElement("h3");
    basicsModule.id = "basic";
    basicsModule.classList.add("module");
    basicsH3.textContent = "BASICS-MODULE";
    basicsModule.appendChild(basicsH3);
    let basicsUl = document.createElement("ul");

    let fundamentalsModule = document.createElement("div");
    let fundamentalsH3 = document.createElement("h3");
    fundamentalsModule.id = "fundamentals";
    fundamentalsModule.classList.add("module");
    fundamentalsH3.textContent = "FUNDAMENTALS-MODULE";
    fundamentalsModule.appendChild(fundamentalsH3);
    let fundamentalsUl = document.createElement("ul");

    let advancedModule = document.createElement("div");
    let advancedH3 = document.createElement("h3");
    advancedModule.id = "advanced";
    advancedModule.classList.add("module");
    advancedH3.textContent = "ADVANCED-MODULE";
    advancedModule.appendChild(advancedH3);
    let advancedUl = document.createElement("ul");

    let dbModule = document.createElement("div");
    let dbH3 = document.createElement("h3");
    dbModule.id = "db";
    dbModule.classList.add("module");
    dbH3.textContent = "DB-MODULE";
    dbModule.appendChild(dbH3);
    let dbUl = document.createElement("ul");

    let webModule = document.createElement("div");
    let webH3 = document.createElement("h3");
    webModule.id = "web";
    webModule.classList.add("module");
    webH3.textContent = "WEB-MODULE";
    webModule.appendChild(webH3);
    let webUl = document.createElement("ul");

    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (name.value !== "" && date.value !== "" && dropDownModule.value !== "Select module") {
            switch (dropDownModule.value) {
                case "Basics":
                    addToDiv(basicsUl);
                    if (!document.querySelector("#basic")) {
                        modulesSection.appendChild(basicsModule);
                    }
                    basicsModule.appendChild(basicsUl);
                    sortByDate(basicsUl)
                    break;
                case "Fundamentals":
                    addToDiv(fundamentalsUl);
                    if (!document.querySelector("#fundamentals")) {
                        modulesSection.appendChild(fundamentalsModule);
                    }
                    fundamentalsModule.appendChild(fundamentalsUl);
                    sortByDate(fundamentalsUl)
                    break;
                case "Advanced":
                    addToDiv(advancedUl);
                    if (!document.querySelector("#advanced")) {
                        modulesSection.appendChild(advancedModule);
                    }
                    advancedModule.appendChild(advancedUl);
                    sortByDate(advancedUl)
                    break;
                case "DB":
                    addToDiv(dbUl);
                    if (!document.querySelector("#db")) {
                        modulesSection.appendChild(dbModule);
                    }
                    dbModule.appendChild(dbUl);
                    sortByDate(dbUl)
                    break;
                case "Web":
                    addToDiv(webUl);
                    if (!document.querySelector("#web")) {
                        modulesSection.appendChild(webModule);
                    }
                    webModule.appendChild(webUl);
                    sortByDate(webUl)
                    break;
            }
        }
        Array.from(modulesSection.querySelectorAll("button")).forEach((btn) => {
            btn.addEventListener("click", () => {
                let currentModule = btn.parentNode.parentNode.parentNode;
                let currentUl = btn.parentNode.parentNode;
                if (currentUl.children.length === 1) {
                    currentModule.remove();
                } else {
                    btn.parentNode.remove();
                }
            });
        });
    });

    function sortByDate(ul) {
        let listOfLis = Array.from(ul.children);
        listOfLis.sort((a, b) => a.textContent.localeCompare(b.textContent));
        ul.querySelectorAll("li").forEach((li) => {
            li.remove();
        });
        listOfLis.forEach((li) => {
            ul.appendChild(li);
        });
    }

    function addToDiv(currentUl) {
        //let currentUl = document.createElement("ul");
        let moduleLi = document.createElement("li");
        let moduleH4 = document.createElement("h4");
        let delBtn = document.createElement("button");

        moduleLi.classList.add("flex");
        let [dateValue, timeValue] = date.value.split("T");
        let newDateValue = dateValue.replace(/-/g, "/");
        moduleH4.textContent = name.value + ` - ${newDateValue} - ${timeValue}`;
        delBtn.classList.add("red");
        delBtn.textContent = "Del";

        moduleLi.appendChild(moduleH4);
        moduleLi.appendChild(delBtn);
        currentUl.appendChild(moduleLi);
        //currentDiv.appendChild(moduleUl);
        //modulesSection.appendChild(currentDiv);
    }
}
