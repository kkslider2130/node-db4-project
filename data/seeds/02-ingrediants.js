exports.seed = function (knex) {
  return knex("ingrediants").insert([
    { ingrediant_name: "Curry Roux", quantity: "1 box", recipe_id: 1 },
    {
      ingrediant_name: "Chuck or Rump roast beef",
      quantity: "1.5 pounds",
      recipe_id: 1,
    },
    { ingrediant_name: "Carrots", quantity: "2 cups", recipe_id: 1 },
    { ingrediant_name: "russet potatos", quantity: "4-5 large", recipe_id: 1 },
    { ingrediant_name: "Onion", quantity: "1", recipe_id: 1 },
    { ingrediant_name: "beef stock", quantity: "7 cups", recipe_id: 1 },
    {
      ingrediant_name: "worcestershire sauce",
      quantity: "2 tbsp",
      recipe_id: 1,
    },
    { ingrediant_name: "soy sauce", quantity: "1 tbsp", recipe_id: 1 },
    { ingrediant_name: "Panko", quantity: "4 cups", recipe_id: 4 },
    {
      ingrediant_name: "boneless pork chops",
      quantity: "6 pieces",
      recipe_id: 4,
    },
    { ingrediant_name: "flour", quantity: "1/2 cup", recipe_id: 4 },
    { ingrediant_name: "starch", quantity: "1/2 cup", recipe_id: 4 },
    { ingrediant_name: "raw cabbage", quantity: "half a head", recipe_id: 4 },
    { ingrediant_name: "corn", quantity: "2 cups", recipe_id: 3 },
    { ingrediant_name: "heavy cream", quantity: "2 cups", recipe_id: 3 },
    { ingrediant_name: "salt", quantity: "2 tbsp", recipe_id: 3 },
    { ingrediant_name: "pepper", quantity: "1 tbsp", recipe_id: 3 },
    { ingrediant_name: "sirloin", quantity: "1 lb", recipe_id: 2 },
    { ingrediant_name: "sake", quantity: "1/2 cup", recipe_id: 2 },
    { ingrediant_name: "mirin", quantity: "1/2 cup", recipe_id: 2 },
    { ingrediant_name: "sugar", quantity: "1 tbsp", recipe_id: 2 },
  ]);
};
