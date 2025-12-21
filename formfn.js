// Lists
var tp_list = ['Extra Cheese', "Mushrooms", "Olives", "Onions", 'Peppers', 'Pineapple', 'Bacon', 'Sausage', 'Jalapeños', 'Tomatoes', 'Skyflakes', 'BBQ'];

var img_track = [
    "images/pizzatypes/chicago.jpg",
    "images/pizzatypes/detroit.jpg",
    "images/pizzatypes/newyork.jpg",
    "images/pizzatypes/pinoy-pizza-1.jpg",
    "images/pizzatypes/Pizza-Napoletana.webp",
    "images/pizzatypes/sillican.jpg",
    "images/pizzatypes/Greek-Pizza.jpg",
    "images/pizzatypes/roman.jpg",
    "images/pizzatypes/margherita.jpg",
];

var pztype = [
    {
        name: "Chicago Pizza",
        desc: `Prepared according to one of several styles developed in Chicago.`,
        img: "images/pizzatypes/chicago.jpg"
    },

    {
        name: "Detroit Pizza",
        desc: `Known for its chewy, airy interior, crispy bottom, and signature caramelized cheese edges.`,
        img: "images/pizzatypes/detroit.jpg"
    },

    {
        name: "Greek Pizza",
        desc: `A New England-style American pan pizza with a thick, chewy, and oily crust.`,
        img: "images/pizzatypes/Greek-Pizza.jpg"
    },
    
    {
        name: "Margherita Pizza",
        desc: `Seasoned with hand-crushed peeled tomatoes, mozzarella, fresh basil leaves, and extra virgin olive oil.`,
        img: "images/pizzatypes/margherita.jpg"
    },

    {
        name: "New York Pizza",
        desc: `Large, thin, foldable slices with a crisp yet pliable crust.`,
        img: "images/pizzatypes/newyork.jpg"
    },

    {
        name: "Pinoy Pizza Pizza",
        desc: `Incorporates beloved local staples like longganisa, ham, pineapple, and banana ketchup.`,
        img: "images/pizzatypes/pinoy-pizza-1.jpg"
    },

    {
        name: "Napoletana Pizza",
        desc: `Classic, traditional pizza known for its soft, thin, chewy crust with high, airy edge.`,
        img: "images/pizzatypes/Pizza-Napoletana.webp"
    },

    {
        name: "Roman Pizza",
        desc: `A traditional Italian pizza from Naples, characterized by a soft, thin, chewy base`,
        img: "images/pizzatypes/roman.jpg"
    },

    {
        name: "Sicillian Pizza",
        desc: `A thick, rectangular, focaccia-like pizza with a fluffy, chewy, crispy crust`,
        img: "images/pizzatypes/sillican.jpg"
    },
];

var loc_list = [
    {location: 'Ozamiz City - Carmen Annex', storehours: '4 AM - 9 PM'},
    {location: 'Ozamiz City - Katong red nga gate', storehours: '4 AM - 9 PM'},
    {location: 'Tangub City - Katong usa ka Barangay', storehours: '8 AM - 11:59 PM'},
    {location: 'Japan - Tokyo - Konichiwa guminasay', storehours: '6 AM - 10 PM'},
    {location: 'Cagayan de Oro - Divisoria', storehours: '7 AM - 11 PM'},
    {location: 'Butuan City - Downtown Area', storehours: '5 AM - 11 PM'},
    {location: 'Davao City - SM Mall', storehours: '10 AM - 9 PM'},
    {location: 'Philippines - Quezon City - Cubao', storehours: '9 AM - 10 PM'},
    {location: 'Cebu City - Ayala Mall', storehours: '7 AM - 9 PM'},
    {location: 'Bacolod City - Lacson Street', storehours: '10 AM - 10 PM'},
    {location: 'Makati City - BGC District', storehours: '11 AM - 8 PM'},
    {location: 'Pasig City - Ortigas Center', storehours: '6 AM - 11 PM'},
    {location: 'Caloocan City - North Avenue', storehours: '7 AM - 10 PM'},
    {location: 'Las Piñas City - Puregold', storehours: '8 AM - 9 PM'},
    {location: 'Mandaue City - Banilad', storehours: '9 AM - 10 PM'},
];

var reviews_list = [
    "I've never had such delicious Pizzas Before!",
    "5 stars kay naay libre kung e 5 stars",    
    "Tubig kaba? kasi di ako mabuhay kapag wala ka",
    "This is a review that has 5 stars",
    "This is also another review that also has 5 stars",
    "Mas lami pa sa iyot",
    "Sana mauyab ka nako",
    "Ambot lang unsay e butang diri",
    "Debyat bahog belat",
    "5 stars kay naay libre kung e 5 stars",
    "Tubig kaba? kasi di ako mabuhay kapag wala ka",
    "This is a review that has 5 stars"
];

var pzSize_selection = [
    "Small",
    "Medium",
    "Large",
    "Extra Large",
    "Oh my gosh",
];

// pizza size selection using table (Quite Useless future me)

var getSizeSelector_cont = document.getElementById("select");

for (let i = 0; i < pzSize_selection.length; i++) {
    var option = document.createElement('option');
    option.value = pzSize_selection[i];
    option.innerHTML = pzSize_selection[i]

    $(getSizeSelector_cont).append(option);
};

// add toppings using table

var tp_cont = document.getElementById("top-container");

for (let i = 0; i < tp_list.length; i++) {
    $(tp_cont).append(`
        <label class="top-card"><input type="checkbox" name="" id="tp` + i + 
        `"><div class="top-label" for="tp` + i + `">
        <p>` + tp_list[i] + `</p></div></label>`);
};

// add pizza types using table

var pztype_cont = document.getElementById("piz-type");

for (let i = 0; i < pztype.length; i++) {
    var pzNODE = `
        <label class="card" style="background: linear-gradient(135deg, rgb(18, 18, 18) 0%, rgba(0, 0, 0, .2) 100%), url(`+ pztype[i].img +`); background-size: cover; background-position: center center;">    
            <input type="radio" id="pz`+i+`" name="pz-sel">
            <label class="card-content" style="z-index: 10;" for="pz`+i+`">
                <p class="card-title">`+pztype[i].name+`</p>
                <p class="card-description">`+pztype[i].desc+`</p>
            </label>
        </label>
    `;
    $(pztype_cont).append(pzNODE);
};

// add locations using table

var loc_cont = document.getElementById('loc-div');

for (let i = 0; i < loc_list.length; i++) {
    var p = document.createElement('p');
    p.classList.add('loc-rel', 'animated-scroll-side');
    p.append(loc_list[i].location);

    var span = document.createElement('span');
    span.innerHTML = 'Store Hours: '+loc_list[i].storehours;
    p.append(span);

    $(loc_cont).append(p);
};

// add fake reviews using table

var review_limit = 20;

var rev_cont = document.getElementById('rev-cont');

for (let i = 0; i < review_limit; i++) {
    var revNODE = `
        <div class="review-container">
            <div class="stars">
                <img src="images/assets/star.png" draggable="false">
                <img src="images/assets/star.png" draggable="false">
                <img src="images/assets/star.png" draggable="false">
                <img src="images/assets/star.png" draggable="false">
                <img src="images/assets/star.png" draggable="false">
            </div>
            <hr>
            <p>`+reviews_list[i % reviews_list.length]+`</p>
        </div>
    `

    $(rev_cont).append(revNODE)
};

// add moving track using table

var img_track_amount = 15;
var img_track_cont = document.getElementById('img-track-root');

for (let i = 0; i < img_track_amount; i++) {
    var div = document.createElement(`img`);
    div.className = 'img-mv';
    div.src = img_track[i % img_track.length];

    $(img_track_cont).append(div)
}