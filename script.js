const imgSign = "sign.jpg";
const imgBunker = "bunker.jpg";
const imgRooftop = "rooftop.jpg";

let btnSeq1 = document.getElementById("btnSequence1");
let btnSeq2 = document.getElementById("btnSequence2");

let storyTitle = document.getElementById("story-title");
let imgBeginning = document.getElementById("img-beginning");
let descBeginning = document.getElementById("desc-beginning");

let imgMiddle = document.getElementById("img-middle");
let descMiddle = document.getElementById("desc-middle");

let imgEnd = document.getElementById("img-end");
let descEnd = document.getElementById("desc-end");

function loadSequence1() {
    storyTitle.innerHTML = "Sequence 1: The Call to Action";
    
    imgBeginning.src = imgSign;
    descBeginning.innerHTML = "<strong>Beginning:</strong> The Bat-Signal lights up the night sky.";

    imgMiddle.src = imgBunker;
    descMiddle.innerHTML = "<strong>Middle:</strong> Bruce Wayne prepares and puts on the suit.";

    imgEnd.src = imgRooftop;
    descEnd.innerHTML = "<strong>End:</strong> Batman stands tall on the rooftop overlooking Gotham.";
}

function loadSequence2() {
    storyTitle.innerHTML = "Sequence 2: The Weary Protector";
    
    imgBeginning.src = imgRooftop;
    descBeginning.innerHTML = "<strong>Beginning:</strong> Batman stands alone, exhausted after a long night.";

    imgMiddle.src = imgBunker;
    descMiddle.innerHTML = "<strong>Middle:</strong> He reflects back on the quiet, heavy moments in the armory.";

    imgEnd.src = imgSign;
    descEnd.innerHTML = "<strong>End:</strong> A new Bat-Signal cuts through the fog, pulling him back in.";
}

btnSeq1.addEventListener("click", loadSequence1);
btnSeq2.addEventListener("click", loadSequence2);

loadSequence1();