ServerEvents.recipes(event => {
    event.remove('immersive_aircraft:gyroscope')
})

ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', 'immersive_aircraft:gyroscope')
})
