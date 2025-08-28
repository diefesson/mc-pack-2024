ServerEvents.recipes(event => {
    let removedRecipes = [
        'bigreactors:misc/book/erguide_alt',
        'bigreactors:reactor/basic/controller_ingots_uranium',
        'bigreactors:reactor/basic/fuelrod_ingots_uranium',
        'bigreactors:reactor/reinforced/controller_ingots_uranium',
        'bigreactors:reactor/reinforced/fuelrod_ingots_uranium',
        'bigreactors:smelting/graphite_from_coal',
        'bigreactors:smelting/graphite_from_charcoal',
        'bigreactors:blasting/graphite_from_coal',
        'bigreactors:blasting/graphite_from_charcoal',
    ]

    for (let recipe of removedRecipes) {
        event.remove(recipe)
    }

    event.shapeless(
        'bigreactors:graphite_dust',
        [
            '1x #forge:slimeballs',
            '4x minecraft:charcoal',
        ],
    )

    event.shapeless(
        'bigreactors:graphite_dust',
        [
            '1x #forge:slimeballs',
            '2x minecraft:coal',
        ],
    )

    event.shapeless(
        'bigreactors:graphite_dust',
        [
            '1x #forge:slimeballs',
            '1x immersiveengineering:coal_coke',
        ],
    )
})