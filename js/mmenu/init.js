// $(document).ready(function() {
//     $('#sidebar').mmenu({ "extensions": ["position-back", "position-right"] });
//     console.log("sidebar initialized.");
// });
const menu = new Mmenu("#sidebar", { "extensions": ["position-back", "position-right"] });
var api = menu.API;
console.log(api);



// Get the API
// var api = menu.API;



//open
$('.btn-menu-nm').click(function() {
    api.open();
    console.log("sidebar opened.");
});