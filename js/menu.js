// Subject Data
let subjects = [
    {
        title: 'Starters',
        info: 'Dipping, rolling and sharing are what our starters and sides were made for. We make everything fresh in-house, from our summer and spring rolls to our pork and lemongrass meatballs. All come with their own sauces, but you can also try them with our delicious table condiments: homemade chilli paste, garlic vinegar, sriracha or fish sauce.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/Pho-PWF-0107.jpg'
    },
    {
        title: 'Salads',
        info: 'Crispy, colourful, tasty and filling, our delicious spicy Vietnamese salads are light years away from mundane lettuce-based salads.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/Pho_Angel_04_05_2018_LRG-43.jpg'
    },
    {
        title: 'Pho',
        info: 'Phở, pronounced ‘fuh,’ is the national dish of Vietnam. It’s a fantastic steaming bowl of rice noodle soup served with a side plate of fresh herbs to add as you please.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/Pho_Angel_04_05_2018_LRG-48.jpg'
    },
    {
        title: 'Curry & Rice',
        info: 'We serve a variety of \'broken rice\' dishes like fragrant Vietnamese curries, aromatic spicy wok-fried rice and colourful, healthy rice bowls topped with veggies and fresh chillies.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/Pho_Angel_04_05_2018_SML-18.jpg'
    },
    {
        title: 'Wok-fried noodles',
        info: 'Phở xao is a wok fried flat noodle served with crunchy greens, protein and a choice of toppings. All are topped with roasted peanuts and fresh beanshoots.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/pho-xao.jpg'
    },
    {
        title: 'Vermicelli noodles',
        info: 'Vermicelli rice noodles (Bún) with a lemongrass and chilli wok-fried topping. Served with fresh herbs, beansprouts, veggie spring roll and peanuts. Noodles served at room temp just like in Vietnam.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/Pho-PWF-0723.jpg'
    },
    {
        title: 'Sides',
        info: 'Grab some sides to boost your meals, or share a few with your starters',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/Pho-Group-Photo-0204.jpg',
    },
    {
        title: 'Desserts',
        info: 'Our desserts range from rich ice creams and refreshing sorbets to our delicious and decadent chocolate truffle or fried banana fritters (which are gluten free and vegan!).',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/Pho-PWF-1027.jpg',
    },
    {
        title: 'Kids',
        info: 'No greens, no onion - not a problem - all our mini mains can be tailored to satisfy the pickiest of eaters, so bring the whole family in to slurp noodles.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/Pho-Kids-PWF-0047.jpg',
    },
    {
        title: 'Cocktails',
        info: '',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/Pho-PWF-0892-1.jpg',
    },
    {
        title: 'Soft Drinks',
        info: '',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/PP-Pho-Summer-Campaign-5.jpg',
    },
    {
        title: 'Beer & Cider',
        info: '',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/Pho-PWF-0824.jpg',
    },
    {
        title: 'Fresh Juices',
        info: '',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/Pho-PWF-0948.jpg',
    },
    {
        title: 'Teas',
        info: '',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/Pho-PWF-0847.jpg',
    },
    {
        title: 'Vietnamese Coffees',
        info: '',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/07/Pho-PWF-0026.jpg',
    },
    {
        title: 'Vegan',
        info: 'More than a quarter of our main menu is vegan, and we\'ve just teamed up THIS isn\'t chicken to launch our first completely vegan menu',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/1-hero.jpg',
    },
    {
        title: 'Gluten Free',
        info: 'Our menu is nearly entirely gluten-free.',
        imgSrc: 'https://www.phocafe.co.uk/wp-content/uploads/2018/06/Pho-PWF-0153.jpg',
    },
];

// Starters Data
let starters = [
    {
        name: 'SUMMER ROLLS',
        info: 'Fresh rice paper summer rolls with vermicelli & pickle. Veggie, chicken, prawn, or vegan chicken',
        type: [
            'vegan', 'vegetarian', 'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'SPICY SALAD ROLLS',
        info: 'spicy salad rolls with enoki, chilli & herbs (carb free)',
        type: [
            'vegan', 'vegetarian', 'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'CRISPY BABY SQUID',
        info: 'Tender fried baby squid with a salt, pepper & lime dip',
        type: [
            'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'SPRING ROLLS',
        info: 'Crispy spring rolls served with lettuce & herbs to wrap & dip. Veggie or pork.',
        type: [
            'vegan', 'vegetarian', 'dairy free', '<500 cal'
        ]
    },
    {
        name: 'SEAFOOD SPRING ROLL',
        info: 'Large crispy spring roll of tiger prawn, crab & pork with nước chấm dipping sauce',
        type: [
            'dairy free', '<500 cal'
        ]
    },
    {
        name: 'CHICKEN WINGS',
        info: 'Seasoned, crispy chicken wings served with sriracha',
        type: [
            'dairy free', 'gluten free'
        ]
    },
    {
        name: 'BEEF BETEL',
        info: 'Beef wrapped in betel leaves, served with rice vermicelli sheets & nuoc cham',
        type: [
            'dairy free', 'gluten free'
        ]
    },
    {
        name: 'PORK MEATBALLS',
        info: 'Homemade pork & lemongrass meatballs with lettuce & herbs to wrap & dip',
        type: [
            'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'VIETNAMESE PANCAKE',
        info: 'Savoury Vietnamese crispy crepe with rice papers & herbs. Chicken & prawn, tofu or vegan chicken',
        type: [
            'vegan', 'vegetarian', 'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'LOTUS STEMS',
        info: 'Fresh rice paper summer rolls with vermicelli & pickle. Veggie, chicken, prawn, or vegan chicken',
        type: [
            'vegan', 'vegetarian', 'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'MORNING GLORY',
        info: 'Stir fried morning glory (water spinach) in garlic',
        type: [
            'vegan', 'vegetarian', 'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'STIR FRIED CHINESE LEAF',
        info: 'In soy sauce',
        type: [
            'vegan', 'vegetarian', 'dairy free', 'gluten free', '<500 cal'
        ]
    },
];

// Salads Data
let salads = [
    {
        name: 'CHICKEN SALAD',
        info: 'Shredded chicken salad with Vietnamese herbs, peppers and a chilli ginger dressing',
        type: [
            'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'VEGGIE SALAD',
        info: 'Same as Goi Ga, minus the chicken, or you can add in vegan THIS isn\'t chicken',
        type: [
            'vegan', 'vegetarian', 'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'GREEN PAPAYA SALAD',
        info: 'Crunchy green papaya salad with peanuts & prawn crackers. Veggie, prawn or vegan THIS isn\'t chicken',
        type: [
            'dairy free', 'gluten free', '<500 cal'
        ]
    },
    {
        name: 'GREEN PAPAYA SALAD',
        info: 'Spicy green mango salad topped with pork, dried shrimp & peanuts',
        type: [
            'dairy free', 'gluten free', '<500 cal'
        ]
    },
];



// Event when clicking nav-item in Desktop Nav
const rowListItem = document.querySelector(".list_item-h .row");
const menuDesktop = document.querySelector(".nav_menu-h .nav_desktop-h");
const a_MenuDesktops = document.querySelectorAll(".nav_menu-h .nav_desktop-h a");

window.onload = function() {
    a_MenuDesktops[0].classList.add('active');
    a_MenuDesktops[0].click();
}

for (let i = 0; i < a_MenuDesktops.length; i++) {
    console.log(a_MenuDesktops[i].innerText.toLowerCase());

    a_MenuDesktops[i].addEventListener("click", function (e) {

        for (let i = 0; i < a_MenuDesktops.length; i++) {
            a_MenuDesktops[i].classList.remove("active");
        }

        let subject = subjects.find((sub) => {
            return sub.title.toLowerCase() === this.innerText.toLowerCase();
        })

        $(".menu_display-h .wrapper_image-h .title-h").html(subject.title);
        $(".menu_display-h .wrapper_image-h .info-h").html(subject.info);
        $(".menu_display-h .wrapper_image-h img").attr("src", subject.imgSrc);

        // Event when click checkbox for filter menu
        let items = document.querySelectorAll(".list_item-h .wrapper_item-h");
        const boxFilters = document.querySelectorAll(".menu_display-h .filter_box-h");

        for (let i = 0; i < boxFilters.length; i++) {
            boxFilters[i].addEventListener("click", function() {
                if (boxFilters[i].classList.contains("active")) {
                    boxFilters[i].classList.remove("active");
                    items.forEach(function (item) {
                        item.classList.remove("inFilter");
                        item.classList.remove("outFilter");
                    });
                } else {
                    boxFilters[i].classList.add("active");
                    items.forEach(function (item) {
                        
                        let filteredListName = starters.filter(function(starter) {
                            return starter.type.includes(boxFilters[i].innerText.toLowerCase());
                        }).map(function(filteredItem) {
                            return filteredItem.name.toLowerCase();
                        });

                        if (filteredListName.includes(item.children[0].innerText.toLowerCase())) {
                            item.classList.add("inFilter");
                            item.classList.remove("outFilter");
                        } else {
                            item.classList.add("outFilter");
                            item.classList.remove("inFilter");
                        }
                    });
                }
            });
        }

        rowListItem.innerHTML = "";
        switch (this.innerText.toLowerCase()) {
            case 'starters': {
                
                this.classList.add("active");

                for (var i = 0; i < starters.length; i++) {
                    rowListItem.innerHTML += `
                        <div class="col-md-6 col-sm-12">
                            <div class="wrapper_item-h">
                                <h3>${starters[i].name}</h3>
                                <p>${starters[i].info}</p>
                            </div>
                        </div>
                    `
                }

                

                break;
            }

            case 'salads': {
                this.classList.add("active");

                for (var i = 0; i < salads.length; i++) {
                    rowListItem.innerHTML += `
                        <div class="col-md-6 col-sm-12">
                            <div class="wrapper_item-h">
                                <h3>${salads[i].name}</h3>
                                <p>${salads[i].info}</p>
                            </div>
                        </div>
                    `;
                }
                break;
            }

        }

        // Cập nhật danh sách item
        items = document.querySelectorAll(".list_item-h .wrapper_item-h");
                

    });
}

// Event when selecting option in Mobile Nav
const menuMobile = document.querySelector(".nav_menu-h .nav_mobile-h");

menuMobile.addEventListener("change", function() {
    let valueTitle = menuMobile.options[menuMobile.selectedIndex].value;

    let subject = subjects.find((sub) => {
        return sub.title.toLowerCase() === valueTitle.toLowerCase();
    })

    $(".menu_display-h .wrapper_image-h .title-h").html(subject.title);
    $(".menu_display-h .wrapper_image-h .info-h").html(subject.info);
    $(".menu_display-h .wrapper_image-h img").attr("src", subject.imgSrc);


    


    rowListItem.innerHTML = "";
    switch (valueTitle.toLowerCase()) {
        case 'starters': {
            for (var i = 0; i < starters.length; i++) {
                rowListItem.innerHTML += `
                    <div class="col-md-6 col-sm-12">
                        <div class="wrapper_item-h">
                            <h3>${starters[i].name}</h3>
                            <p>${starters[i].info}</p>
                        </div>
                    </div>
                `
            }
            break;
        }

        case 'salads': {
            for (var i = 0; i < salads.length; i++) {
                rowListItem.innerHTML += `
                    <div class="col-md-6 col-sm-12">
                        <div class="wrapper_item-h">
                            <h3>${salads[i].name}</h3>
                            <p>${salads[i].info}</p>
                        </div>
                    </div>
                `;
            }
            break;
        }
    }
})



