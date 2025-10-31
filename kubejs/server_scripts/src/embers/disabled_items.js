let _disabledEmbersItems = [
    'embers:silver_sword',
    'embers:silver_shovel',
    'embers:silver_axe',
    'embers:silver_pickaxe',
    'embers:silver_hoe',
]

ServerEvents.recipes(event => {
    for(let item of _disabledEmbersItems){
        event.remove({output: item})
    }
})

ServerEvents.tags('item', event => {
    for(let item of _disabledEmbersItems){
        // event.add('c:hidden_from_recipe_viewers', item)
    }
})