// Hide CB Microblock items
ServerEvents.tags('item', event => {
    Item.getList().forEach(item => {
        if (item.id.startsWith('cb_microblock:')) {
            event.add('c:hidden_from_recipe_viewers', item.id)
        }
    })
})

// Remove CB Microblock item recipes
ServerEvents.recipes(event => {
    Item.getList().forEach(item => {
        if (item.id.startsWith('cb_microblock:')) {
            event.remove({ output: item.id })
        }
    })
})
