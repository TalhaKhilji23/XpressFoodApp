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
