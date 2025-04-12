ServerEvents.recipes(event => {
    event.remove({ output: '#upgrade_aquatic:bedrolls' })
})

ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', '#upgrade_aquatic:bedrolls')
})