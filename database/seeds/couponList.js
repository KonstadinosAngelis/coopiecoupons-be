
exports.seed = function(knex) {
  return knex('coupons').truncate()
    .then(function () {
      return knex('coupons').insert([
        {name: "Taco bell Trip", description: "An all expense paid trip to Taco Bell", href: "https://w1.pngwing.com/pngs/164/551/png-transparent-taco-logo-taco-bell-hot-dog-american-cuisine-fast-food-restaurant-yum-brands.png", isUsed: false},
        {name: "Chic-Fil-A Trip", description: "An all expense paid trip to Chic-Fil-A", href: "https://pbs.twimg.com/profile_images/1148729107406041088/emlH0Rv4_400x400.png", isUsed: false},
        {name: "Movie Night", description: "A single movie night with Coopie!", href: "https://cdn3.iconfinder.com/data/icons/tools-solid-icons-vol-4/72/186-512.png", isUsed: true},
      ]);
    });
};
