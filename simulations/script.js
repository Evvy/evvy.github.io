document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addSimButton");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeButton");
    const simForm = document.getElementById("simForm");
    const simList = document.getElementById("simList");

    addButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    simForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const classSelect = document.getElementById("class");
        const titleInput = document.getElementById("title");
        const urlInput = document.getElementById("url");

        const simItem = document.createElement("div");
        simItem.classList.add("sim-item");
        simItem.innerHTML = `
            <h3>${classSelect.value}</h3>
            <p>${titleInput.value}</p>
            <a href="${urlInput.value}" target="_blank">${urlInput.value}</a>
        `;

        simList.appendChild(simItem);

        modal.style.display = "none";
        simForm.reset();
    });
});
