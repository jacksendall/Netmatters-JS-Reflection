// $(document).ready(function() {
//     $('#sidebar').mmenu({ "extensions": ["position-back", "position-right"] });
//     console.log("sidebar initialized.");
// });
const menu = new Mmenu("#sidebar", {
    "extensions": ["position-back", "position-right"]
});


// Get the API
var api = menu.API;
//log api
console.log(api);


api.bind("closeMenu",
    () => {
        $(".content-wrapper").toggleClass("blackout");
        console.log("close");
    }
);
api.bind("openMenu",
    () => {
        $(".content-wrapper").toggleClass("blackout");
        console.log("open");
    }
);





//open
$('.btn-menu-nm').click(function() {
    api.open();
    console.log("sidebar opened.");
    $(".content-wrapper").toggleClass("blackout");

    $('#container').click(function() {
        $(".content-wrapper").toggleClass("blackout");
    });

    $(".content-wrapper").toggleClass("blackout");

});