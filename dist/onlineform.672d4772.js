function handleProfHcRadios() {
    const adverseEventSelect = document.querySelector("#adverse-event-select");
    const dodeDiv = document.querySelector("#dode-div");
    adverseEventSelect.addEventListener("change", function() {
        if (adverseEventSelect.value === "death") dodeDiv.style.display = "block";
        else dodeDiv.style.display = "none";
    });
}

//# sourceMappingURL=onlineform.672d4772.js.map
