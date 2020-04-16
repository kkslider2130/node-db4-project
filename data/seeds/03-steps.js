exports.seed = function (knex) {
  return knex("steps").insert([
    {
      step_number: 1,
      instructions: "small dice onions and sweat",
      recipe_id: 1,
      ingrediants_id: 5,
    },
    {
      step_number: 2,
      instructions: "peel and chop carrots and add to pot",
      recipe_id: 1,
      ingrediants_id: 3,
    },
    {
      step_number: 3,
      instructions: "peel and medium dice potatos and add to pot",
      recipe_id: 1,
      ingrediants_id: 4,
    },
    {
      step_number: 4,

      instructions: "cube and brown steak",
      recipe_id: 1,
      ingrediants_id: 2,
    },
    {
      step_number: 5,

      instructions: "add roux",
      recipe_id: 1,
      ingrediants_id: 7,
    },
    {
      step_number: 6,

      instructions: "bring to simmer for 1 hour",
      recipe_id: 1,
      ingrediants_id: 8,
    },
    {
      step_number: 1,

      instructions: "slice onions and add to pan",
      recipe_id: 2,
      ingrediants_id: 5,
    },
    {
      step_number: 1,

      instructions: "add sake to pan",
      recipe_id: 2,
      ingrediants_id: 19,
    },
    {
      step_number: 2,

      instructions: "add mirin",
      recipe_id: 2,
      ingrediants_id: 20,
    },
    {
      step_number: 3,

      instructions: "add mirin",
      recipe_id: 2,
      ingrediants_id: 20,
    },
    {
      step_number: 4,

      instructions: "add sugar",
      recipe_id: 2,
      ingrediants_id: 21,
    },
    {
      step_number: 5,

      instructions: "add soy sauce",
      recipe_id: 2,
      ingrediants_id: 8,
    },
    {
      step_number: 6,

      instructions:
        "slice sirloin thin and add to pan after it's simmered for 5 minutes. Simmer for another 12 minutes",
      recipe_id: 2,
      ingrediants_id: 18,
    },

    {
      step_number: 1,

      instructions: "dice and add onions",
      recipe_id: 3,
      ingrediants_id: 5,
    },
    {
      step_number: 2,

      instructions: "peel and add potatos",
      recipe_id: 3,
      ingrediants_id: 4,
    },
    {
      step_number: 3,

      instructions: "peel and add carrots",
      recipe_id: 3,
      ingrediants_id: 3,
    },
    {
      step_number: 3,

      instructions: "peel and add carrots",
      recipe_id: 3,
      ingrediants_id: 3,
    },
    {
      step_number: 4,

      instructions: "add corn",
      recipe_id: 3,
      ingrediants_id: 14,
    },
    {
      step_number: 5,

      instructions: "add stock",
      recipe_id: 3,
      ingrediants_id: 6,
    },
  ]);
};
