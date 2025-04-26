let solclassicRemovedContent = [
    'solclassic:basket',
    'solclassic:wicker_basket'
]

ServerEvents.recipes(event => {
    for(let content of solclassicRemovedContent){
        event.remove(content)
    }
})

ServerEvents.tags('item', event => {
    for(let content of solclassicRemovedContent){
        event.add('c:hidden_from_recipe_viewers', content)
    }
})