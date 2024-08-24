ServerEvents.recipes(event => {
    function headRecipe(itemA, itemB, output) {
        event.shaped(
            output,
            [
                'ABA',
                'BSB',
                'ABA'
            ],
            {
                A: itemA,
                B: itemB,
                S: 'mysticalagriculture:blank_skull'
            }
        )
    }

    headRecipe('mysticalagriculture:zombie_essence', 'mysticalagriculture:ice_essence', 'variantsandventures:gelid_head')
    headRecipe('mysticalagriculture:zombie_essence', 'mysticalagriculture:nature_essence', 'variantsandventures:thicket_head')
    headRecipe('mysticalagriculture:skeleton_essence', 'mysticalagriculture:water_essence', 'variantsandventures:murk_skull')
    headRecipe('mysticalagriculture:skeleton_essence', 'mysticalagriculture:nature_essence', 'variantsandventures:verdant_skull')
})
