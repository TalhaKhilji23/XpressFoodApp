export const filterData = [
  {name: 'Fast Food', image: require('../assests/fastFood.jpg'), id: '0'},
  {name: 'Burgers', image: require('../assests/burger.jpg'), id: '1'},
  {name: 'Salads', image: require('../assests/salad.png'), id: '2'},
  {name: 'Hotdog', image: require('../assests/hotdogs.jpg'), id: '3'},
  {name: 'Chinese', image: require('../assests/chinese.jpg'), id: '4'},
  {name: 'Mexican', image: require('../assests/mexican.jpg'), id: '5'},
  {name: 'Sea food', image: require('../assests/sea-food.jpg'), id: '6'},
];

export const filterData2 = [
  {
    name: 'Fast food',
    image:
      'https://www.freepnglogos.com/uploads/fried-chicken-png/fried-chicken-fry-food-png-transparent-fry-food-images-pluspng-35.png',
    id: '0',
  },
  {
    name: 'Burgers',
    image:
      'https://media.istockphoto.com/photos/the-concept-of-american-cuisine-italian-double-king-burger-with-on-picture-id1199148347?b=1&k=20&m=1199148347&s=170667a&w=0&h=vCNSeoTODQ0vZ5X_-ghsS_F0sR716F9S2aZI6FAM4mc=',
    id: '1',
  },
  {
    name: 'Salads',
    image:
      'https://i.pinimg.com/736x/40/2a/99/402a99c710f1da71b9f1f95632b70e08.jpg',
    id: '2',
  },
  {
    name: 'Hotdog',
    image:
      'https://p.kindpng.com/picc/s/75-757687_hot-dog-png-image-hot-dog-png-transparent.png',
    id: '3',
  },
  {
    name: 'Chinese',
    image:
      'https://p.kindpng.com/picc/s/64-646731_untitled-2image-chinese-food-dishes-png-transparent-png.png',
    id: '4',
  },
  {
    name: 'Mexican',
    image:
      'https://www.pngkey.com/png/full/438-4384378_enjoy-our-delicious-authentic-mexican-food-mexican-food.png',
    id: '5',
  },
  {
    name: 'Sea food',
    image:
      'https://w7.pngwing.com/pngs/127/35/png-transparent-cooked-fish-with-vegetables-jamaican-cuisine-fried-fish-escabeche-seafood-fried-fish-food-animals-recipe-thumbnail.png',
    id: '6',
  },
  {
    name: 'Chinese Food',
    image:
      'https://png.pngitem.com/pimgs/s/489-4894417_chinese-food-png-chinese-noodle-dishes-png-transparent.png',
    id: '7',
  },
  {
    name: 'Mexican pie',
    image:
      'https://e7.pngegg.com/pngimages/830/359/png-clipart-calorie-take-out-food-nachos-hamburger-chicken-chili-food-recipe-thumbnail.png',
    id: '8',
  },
  {
    name: 'Ocean dish',
    image:
      'https://mpng.subpng.com/20180130/rse/kisspng-seafood-lobster-dish-fish-as-food-spice-spicy-lobster-aberdeen-5a70ea654e4769.2283390115173494773206.jpg',
    id: '9',
  },
];

export const restaurantsData = [
  {
    restaurantName: 'Mc Donalds',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images:
      'https://www.freepnglogos.com/uploads/food-png/download-food-png-file-png-image-pngimg-1.png',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {
      lat: -26.1888612,
      ing: 28.246325,
    },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps, Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',
      },
    ],
    id: 0,
  },

  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images:
      'https://p.kindpng.com/picc/s/166-1663535_transparent-fried-chicken-clipart-buffalo-chicken-wings-hd.png',
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, ing: 22.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: 'Chicken, Chicken wings...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=',
      },
    ],
    id: 1,
  },

  {
    restaurantName: 'Steers',
    farAway: '5',
    businessAddress: ' 17 Olivia Rd, Johannesburg',
    images:
      'https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png',
    coordinates: {
      lat: -26.1886781,
      Ing: 28.244879,
    },
    averageReview: 4.9,
    numberofReview: 12,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=',
      },
    ],
    id: 2,
  },

  {
    restaurantName: 'Roman Pizza',
    farAway: '7',
    businessAddress: '15 Atlas Rd, Kempton Park',
    images:
      'https://www.nicepng.com/png/detail/254-2542258_non-veg-pizza-california-style-pizza.png',
    averageReview: 4.3,
    numberofReview: 7,
    coordinates: {lat: -26.1845336, Ing: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=',
      },
    ],
    id: 3,
  },
];

export const menuData = [
  {title: 'BEEF', special: false, key: 0},
  {title: 'CHICKEN', special: false, key: 1},
  {title: 'VEGGIE BURGER', special: false, key: 2},
  {title: 'FRIES& CORN', special: false, key: 3},
  {title: 'SALADS', special: false, key: 4},
  {title: 'HAPPY MEALS', special: false, key: 5},
  {title: 'SAHRE BOX', special: false, key: 6},
  {title: 'MILKSHAKES', special: false, key: 7},
  {title: 'COLD DRINKS', special: false, key: 8},
  {title: 'DESSERTS', special: false, key: 9},
  {title: 'HOT DRINKS', special: false, key: 10},
];

export const specialData = [
  {title: 'LIMITED OFFER', key: 0},
  {title: 'GO CHILLI', key: 1},
  {title: 'GO CHEESE', key: 2},
  {title: 'MCCHICKEN DELUXE PROMO', key: 3},
];

export const menu = [
  {key: 1, title: 'BEEF'},
  {key: 2, title: 'CHICKEN'},
  {key: 3, title: 'VEGGIE BURGER'},
  {key: 4, title: 'SHARE BOX'},
  {key: 5, title: 'Happy Meals'},
  {key: 6, title: 'Fries'},
  {key: 7, title: 'Sides'},
  {key: 8, title: 'Milkshakes'},
];

export const menuDetailedData = [
  {
    meal: 'Big Mac',
    price: 70.2,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Chicken Burger',
    price: 45.7,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
    details: '',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: 'Big Mac',
    price: 50.8,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'Big Mac',
    price: 70.2,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5,
  },
];
