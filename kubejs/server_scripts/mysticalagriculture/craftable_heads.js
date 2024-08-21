ServerEvents.recipes(event => {
    function headRecipe(itemA, itemB, output) {
        event.shaped(
            Item.of(output, 1),
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

    let MA = (i) => `mysticalagriculture:${i}`
    let VV = (i) => `variantsandventures:${i}`
    let TC = (i) => `tconstruct:${i}`

    headRecipe('mysticalagriculture:zombie_essence', 'mysticalagriculture:ice_essence', 'variantsandventures:gelid_head')
    headRecipe('mysticalagriculture:zombie_essence', 'mysticalagriculture:nature_essence', 'variantsandventures:thicket_head')
    headRecipe('mysticalagriculture:skeleton_essence', 'mysticalagriculture:water_essence', 'variantsandventures:murk_skull')
    headRecipe('mysticalagriculture:skeleton_essence', 'mysticalagriculture:nature_essence', 'variantsandventures:verdant_skull')
    headRecipe('mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence', 'tconstruct:enderman_head')
    headRecipe('mysticalagriculture:skeleton_essence', 'mysticalagriculture:ice_essence', 'tconstruct:stray_head')
    headRecipe('mysticalagriculture:zombie_essence', 'mysticalagriculture:fire_essence', 'tconstruct:husk_head')
    headRecipe('mysticalagriculture:zombie_essence', 'mysticalagriculture:water_essence', 'tconstruct:drowned_head')
    headRecipe('mysticalagriculture:spider_essence', 'mysticalagriculture:spider_essence', 'tconstruct:spider_head')
    headRecipe('mysticalagriculture:spider_essence', 'mysticalagriculture:stone_essence', 'tconstruct:cave_spider_head')
    headRecipe('mysticalagriculture:pig_essence', 'mysticalagriculture:iron_essence', 'tconstruct:piglin_head')
    headRecipe('mysticalagriculture:pig_essence', 'mysticalagriculture:gold_essence', 'tconstruct:piglin_brute_head')
    headRecipe('mysticalagriculture:pig_essence', 'mysticalagriculture:zombie_essence', 'tconstruct:zombified_piglin_head')
})
