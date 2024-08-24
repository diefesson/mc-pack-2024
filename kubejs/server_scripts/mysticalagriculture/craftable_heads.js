ServerEvents.recipes(event => {
    function headRecipe(output, itemA, itemB) {
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

    headRecipe('variantsandventures:gelid_head', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:ice_essence')
    headRecipe('variantsandventures:thicket_head', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:nature_essence')
    headRecipe('variantsandventures:murk_skull', 'mysticalagriculture:skeleton_essence', 'mysticalagriculture:water_essence')
    headRecipe('variantsandventures:verdant_skull', 'mysticalagriculture:skeleton_essence', 'mysticalagriculture:nature_essence')
})
