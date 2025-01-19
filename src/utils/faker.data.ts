export interface WhatToCookInterface {
  recipeName: string;
  recipeId: string;
  recipeImageURL: string;
  savedStatus: boolean;
  recipeDescription: string;
  recipeRatingValue: number
}

export const whatToCook: WhatToCookInterface[] = [
  {
    recipeId: 'tasty-3994',
    recipeName: 'Francare Cake',
    recipeDescription: 'A delicious Francare Cake made with the finest ingredients.',
    savedStatus: false,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 2
  },
  {
    recipeId: 'tasty-3995',
    recipeName: 'Spicy Tofu Stir Fry',
    recipeDescription: 'A quick and healthy stir fry loaded with spicy tofu and vegetables.',
    savedStatus: false,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 3.5
  },
  {
    recipeId: 'tasty-3996',
    recipeName: 'Classic Margherita Pizza',
    recipeDescription: 'A classic Italian pizza with fresh tomatoes, mozzarella, and basil.',
    savedStatus: true,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 2
  },
  {
    recipeId: 'tasty-3997',
    recipeName: 'Chicken Alfredo Pasta',
    recipeDescription: 'Creamy Alfredo sauce paired with tender chicken and fettuccine pasta.',
    savedStatus: true,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 1.5
  },
  {
    recipeId: 'tasty-3998',
    recipeName: 'Vegan Buddha Bowl',
    recipeDescription: 'A nutrient-packed bowl with quinoa, roasted veggies, and tahini dressing.',
    savedStatus: false,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 4
  },
  {
    recipeId: 'tasty-3999',
    recipeName: 'Beef Wellington',
    recipeDescription: 'Tender beef wrapped in puff pastry with mushroom duxelles.',
    savedStatus: true,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 4
  },
  {
    recipeId: 'tasty-4000',
    recipeName: 'Shrimp Tacos',
    recipeDescription: 'Crispy shrimp tacos topped with a tangy lime slaw.',
    savedStatus: false,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 3.5
  },
  {
    recipeId: 'tasty-4001',
    recipeName: 'Apple Pie',
    recipeDescription: 'A timeless dessert with a flaky crust and sweet apple filling.',
    savedStatus: true,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 2.5
  },
  {
    recipeId: 'tasty-4002',
    recipeName: 'Grilled Salmon',
    recipeDescription: 'Perfectly grilled salmon with a honey glaze and fresh herbs.',
    savedStatus: false,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 5.0
  },
  {
    recipeId: 'tasty-4003',
    recipeName: 'Chocolate Lava Cake',
    recipeDescription: 'A decadent dessert with a molten chocolate center.',
    savedStatus: true,
    recipeImageURL: '/what-to-cook/Campervan.jpg',
    recipeRatingValue: 2.5
  },
];
