exports.up = function(knex) {
    return knex.schema.createTable('coupons', coupons => {
        coupons.increments();

        coupons
            .string('name', 255)
            .notNullable();

        coupons
            .string('description', 255)
            .notNullable();
        
        coupons
            .string('href', 255)
            .notNullable();

        coupons    
            .boolean('isUsed')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('coupons')
};
