ServerEvents.tags('item', event => {
    Item.getList().forEach(item => {
        if (item.id.startsWith('thermal:') && (item.id.contains('ruby') || item.id.contains('sapphire'))){
            event.add('c:hidden_from_recipe_viewers', item.id)
        }
    })
})
