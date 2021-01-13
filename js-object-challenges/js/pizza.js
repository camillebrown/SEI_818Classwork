let menu = {
    pepperoni: {
      toppings: ['pepperoni', 'cheese', 'sauce'],
      price: '$10'
      },
    veggie: {
      toppings: ['tomatoes', 'olives', 'onion'],
      price: '$15'
      },
    hawaiian: {
      toppings: ['pineapple', 'ham', 'peppers'],
      price: '$15'
      },
    meatlovers: {
      toppings: ['sausage', 'pepperoni', 'bacon'],
      price: '$20'
      },
    margherita: {
      toppings: ['tomatoes', 'basil', 'mozzerella'],
      price: '$15'
      }         
  };
  
  console.log(Object.keys(menu))
  console.log(menu.hasOwnProperty("banana"))