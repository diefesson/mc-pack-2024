let entries = [
    'projectred_core:electrotine_silicon_comp',
    'projectred_core:electrotine_silicon',
    'projectred_core:copper_coil',
    'projectred_core:iron_coil',
    'projectred_core:gold_coil',
    'projectred_core:motor',
    'projectred_core:woven_cloth',
    'projectred_core:sail',
    'projectred_core:draw_plate',
    'projectred_core:peridot',
]

ServerEvents.recipes(event => {
    for (let entry of entries) {
        event.remove(entry)
    }
})

ServerEvents.tags('item', event => {
    for(let entry of entries){
        event.add('c:hidden_from_recipe_viewers', entry)
    }
})
