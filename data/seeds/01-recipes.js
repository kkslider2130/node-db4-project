exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipe_name: "Japanese Beef Curry" },
    { recipe_name: "Gyudon" },
    { recipe_name: "Corn Chowder" },
    { recipe_name: "Tonkatsu" },
  ]);
};
