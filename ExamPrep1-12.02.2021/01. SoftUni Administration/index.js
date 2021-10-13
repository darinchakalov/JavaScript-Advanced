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

    /// create arrays for each div
    // then for each new object (module) push in the array and sort by date
    // create function which will convert the object into html element

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

    let advancedModule = document.createElement("div");
    let advancedH3 = document.createElement("h3");
    advancedModule.id = "advanced";
    advancedModule.classList.add("module");
    advancedH3.textContent = "ADVANCED-MODULE";
    advancedModule.appendChild(advancedH3);

    let dbModule = document.createElement("div");
    let dbH3 = document.createElement("h3");
    dbModule.id = "db";
    dbModule.classList.add("module");
    dbH3.textContent = "DB-MODULE";
    dbModule.appendChild(dbH3);

    let webModule = document.createElement("div");
    let webH3 = document.createElement("h3");
    webModule.id = "web";
    webModule.classList.add("module");
    webH3.textContent = "WEB-MODULE";
    webModule.appendChild(webH3);

    let basicsArr = [];
    let fundamentalsArr = [];

    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (name.value !== "" && date.value !== "" && dropDownModule.value !== "Select module") {
            let [dateValue, timeValue] = date.value.split("T");
            let newDateValue = dateValue.replace(/-/g, "/");
            let currentObj = {
                name: name.value,
                date: newDateValue,
                time: timeValue,
            };
            switch (dropDownModule.value) {
                case "Basics":
                    basicsArr.push(currentObj);
                    basicsArr.sort().reverse();
                    if (!document.querySelector("#basic")) {
                        modulesSection.appendChild(basicsModule);
                    }
                    if (!document.querySelector("#basic > ul")) {
                        basicsModule.appendChild(basicsUl)
                    }
                    
                    console.log(Array.from(document.querySelectorAll("#basic > ul > li")))

                    basicsArr.forEach((element) => {
                        basicsUl.appendChild(objToHtml(element));
                    });
                    
                    break;
               
            }

        }
    });

    function objToHtml(obj) {
        let moduleLi = document.createElement("li");
        let moduleH4 = document.createElement("h4");
        let delBtn = document.createElement("button");
        delBtn.classList.add("red");
        delBtn.textContent = "Del";
        moduleLi.classList.add("flex");
        moduleH4.textContent = `${obj.name} - ${obj.date} - ${obj.time}`;
        moduleLi.appendChild(moduleH4);
        moduleLi.appendChild(delBtn);
        return moduleLi;
    }
}
