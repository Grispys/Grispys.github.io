let images = {};


// did this to preload the images, as prior it would take a very long time for the images to switch.
document.addEventListener("DOMContentLoaded", () => {
    images["ketchup"] = new Image();
    images["ketchup"].src = "./corndogImages/corndog_ketchup.png";

    images["mustard"] = new Image();
    images["mustard"].src = "./corndogImages/corndog_mustard.png";

    images["hotdog"] = new Image();
    images["hotdog"].src = "./corndogImages/corndog_hotdog.png";

    images["donut"] = new Image();
    images["donut"].src = "./corndogImages/corndog_donut.png";

    images["website"] = new Image();
    images["website"].src = "./corndogImages/corndog_website.png";

    images["chili"] = new Image();
    images["chili"].src = "./corndogImages/corndog_chili.png";

    images["chile"] = new Image();
    images["chile"].src = "./corndogImages/corndog_chile.png";

    images["pepper"] = new Image();
    images["pepper"].src = "./corndogImages/corndog_pepper.png";

    images["milk"] = new Image();
    images["milk"].src = "./corndogImages/corndog_milk.png";

    images["beauty"] = new Image();
    images["beauty"].src = "./corndogImages/corndog_beauty.png";

    images["patch"] = new Image();
    images["patch"].src = "./corndogImages/corndog_patch.png";

    images["loser"] = new Image();
    images["loser"].src = "./corndogImages/corndog_loser.png";
});





function ketchup() {
    document.getElementById("corndog").src = images["ketchup"].src;
}

function mustard() {
    document.getElementById("corndog").src = images["mustard"].src;
}

function hotdog() {
    document.getElementById("corndog").src = images["hotdog"].src;
}

function donut() {
    document.getElementById("corndog").src = images["donut"].src;
}

function website() {
    document.getElementById("corndog").src = images["website"].src;
}

function chili() {
    document.getElementById("corndog").src = images["chili"].src;
}

function chile() {
    document.getElementById("corndog").src = images["chile"].src;
}

function pepper() {
    document.getElementById("corndog").src = images["pepper"].src;
}

function milk() {
    document.getElementById("corndog").src = images["milk"].src;
}

function beauty() {
    document.getElementById("corndog").src = images["beauty"].src;
}

function patch() {
    document.getElementById("corndog").src = images["patch"].src;
}

function loser() {
    document.getElementById("corndog").src = images["loser"].src;
}

