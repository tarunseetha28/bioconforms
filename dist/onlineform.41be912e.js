function togglerechallenge() {
    var yesRadio = document.querySelector('input[name="rechallenge"][value="rechallenge-p"]');
    var rechallengeDiv = document.querySelector("#rechallenge-p");
    rechallengeDiv.style.display = "none";
    yesRadio.addEventListener("click", function() {
        rechallengeDiv.style.display = "block";
    });
    var noRadios = document.querySelectorAll('input[name="rechallenge"]:not([value="rechallenge-p"])');
    for(var i = 0; i < noRadios.length; i++)noRadios[i].addEventListener("click", function() {
        rechallengeDiv.style.display = "none";
    });
}
togglerechallenge();

//# sourceMappingURL=onlineform.41be912e.js.map
