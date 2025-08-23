ServerEvents.recipes(event => {
    let removedRecipes = [
        'bigreactors:misc/book/erguide_alt',
        'bigreactors:reactor/basic/controller_ingots_uranium',
        'bigreactors:reactor/basic/fuelrod_ingots_uranium',
        'bigreactors:reactor/reinforced/controller_ingots_uranium',
        'bigreactors:reactor/reinforced/fuelrod_ingots_uranium',
    ]

    for (let recipe of removedRecipes) {
        event.remove(recipe)
    }
})