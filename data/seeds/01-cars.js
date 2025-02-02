// STRETCH
const cars = [
    {
        vin: "1111111111111",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "Manual"
    },
    {
        vin: "1234567899098",
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage",
    },
    {
        vin: "1234567778900",
        make: "ford",
        model: "focus",
        mileage: 15000,
    },
]

exports.seed = function(knex) {
    return knex('cars')
        .truncate().then(() => {
            return knex('cars').insert(cars)
        })
}