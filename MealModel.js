const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // встроенный валидатор для подтверждения текстового ввода
    }
})

module.exports = mongoose.model('Meal', mealSchema)

//второй аргумент 'mealSchema' тот же, что и выше описанный "const mealSchema...."