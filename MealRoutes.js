const { Router } = require('express');
const {getMeal, saveMeals, deleteMeal, editMeal} = require('./MealController')

const router = Router(); //дороги/маршруты нашего приложения

router.get('/', getMeal)  //getMeal из MealController

router.post('/saveMeals', saveMeals)  //поменять название, сохранить и обновить в соответствии в введеными данными

router.post('/deleteMeal', deleteMeal)

router.put('/editMeal', editMeal)


module.exports = router