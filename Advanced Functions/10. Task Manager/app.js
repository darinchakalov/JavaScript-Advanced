function solve() {
    let task = document.querySelector("#task");
    let description = document.querySelector("#description");
    let dueDate = document.querySelector("#date");
    let sections = document.querySelectorAll("section");
    let addBtn = document.querySelector("#add");
    addBtn.type = "button";

    ///REMOVE AFTER
    // task.value = "JS Advanced Exam";
    // description.value = "Lern DOM, Unit Testing and Classes";
    // date.value = "2020.04.08";

    ///

    addBtn.addEventListener("click", function () {
        if (task.value && description.value && dueDate.value) {
            let openDiv = sections[1].children[1];

            openDiv.innerHTML += `<article>
                    <h3>${task.value}</h3>
                    <p>Description: ${description.value}</p>
                    <p>Due Date: ${dueDate.value}</p>
                    <div class="flex">
                        <button class="green">Start</button>
                        <button class="red">Delete</button>
                    </div>
                    </article>`;

            Array.from(sections[1].children[1].querySelectorAll("button")).forEach((btn) => {
                btn.addEventListener("click", function () {
                    if (btn.textContent === "Start") {
                        sections[2].children[1].innerHTML += `<article>
                            <h3>${btn.parentNode.parentNode.children[0].textContent}</h3>
                            <p>${btn.parentNode.parentNode.children[1].textContent}</p>
                            <p>${btn.parentNode.parentNode.children[2].textContent}</p>
                            <div class="flex">
                                <button class="red">Delete</button>
                                <button class="orange">Finish</button>
                            </div>
                            </article>`;

                        btn.parentNode.parentNode.remove();
                    } else if (btn.textContent === "Delete") {
                        btn.parentNode.parentNode.remove();
                    }

                    Array.from(sections[2].children[1].querySelectorAll("button")).forEach((btn) => {
                        btn.addEventListener("click", function () {
                            if (btn.textContent === "Delete") {
                                btn.parentNode.parentNode.remove();
                            } else if (btn.textContent === "Finish") {
                                sections[3].children[1].innerHTML += `<article>
                                <h3>${btn.parentNode.parentNode.children[0].textContent}</h3>
                                <p>${btn.parentNode.parentNode.children[1].textContent}</p>
                                <p>${btn.parentNode.parentNode.children[2].textContent}</p>
                                </article>`;
                                btn.parentNode.parentNode.remove();
                            }
                        });
                    });
                });
            });

            task.value = null;
            description.value = null;
            dueDate.value = null;
        }
    });
}
