
document.addEventListener("DOMContentLoaded", function () {
    updateDOM()
});

var counting = true;

function updateDOM() {
    var interval = setInterval(increment, 1000);

    function increment() {
        if (counting === true) {
            document.getElementById("counter").innerHTML = document.getElementById("counter").innerHTML % 360 + 1;
        }
    }

}

// can increase and decrease counter////////////

document.getElementById("plus").addEventListener("click", increaseCounter);

function increaseCounter() {
    document.getElementById("counter").innerHTML = parseInt(document.getElementById("counter").innerHTML) + 1;

}

document.getElementById("minus").addEventListener("click", decreaseCounter);

function decreaseCounter() {
    document.getElementById("counter").innerHTML = parseInt(document.getElementById("counter").innerHTML) - 1;

}

// can use like button and count likes
// I am adding custom data attributes to save the counter and the number of likes 
// and since i have the custom data attributes I can find existing numbers and add likes

document.getElementById("heart").addEventListener("click", likeCounter);

function likeCounter() {

    number = document.getElementById("counter").innerHTML;
    var ul = document.getElementById("list");
    els = ul.getElementsByTagName("li");

    let found = false;
    for (let i = 0; i < els.length; i++) {
        if (els[i].getAttribute("data-number") === number) {
            elLikes = parseInt(els[i].getAttribute("data-likes"));
            elLikes++;
            els[i].setAttribute("data-likes", elLikes.toString());
            els[i].innerHTML = `${number} has this many likes: ${elLikes}`;
            found = true;
            break;
        }
    }

    if (found === false) {
        var li = document.createElement("li");
        li.setAttribute("data-number", number);
        li.setAttribute("data-likes", "1");
        li.innerHTML = `${number} has this many likes: 1`;
        ul.appendChild(li);
    }
}

// can pause
document.getElementById("pause").addEventListener("click", toggleCounter);

function toggleCounter() {
    counting = !counting;
    // counting is opposite of value of counting (true/false)
    document.getElementById("minus").disabled = !counting;
    document.getElementById("plus").disabled = !counting;
    document.getElementById("heart").disabled = !counting;
    document.getElementById("submit").disabled = !counting;

    document.getElementById("pause").innerHTML = counting ? "pause" : "resume";
    // if contidion ? "true" : "false" 
    // if this true return the first one if this is false return the second one


}

// can submit comment and can see if after you submit it

var form = document.getElementById("comment-form");
form.addEventListener('submit', (e) => { e.preventDefault(); });




document.getElementById("submit").addEventListener("click", () => {
    var x = document.getElementById("comment-input").value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(x));
    ul.appendChild(li);
    document.getElementById("comment-input").value = "";

});





