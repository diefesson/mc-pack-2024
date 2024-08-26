ServerEvents.recipes(event => {
    const headRecipe = global['headRecipe']

    headRecipe(
        event,
        'variantsandventures:gelid_head',
        'mysticalagriculture:zombie_essence',
        'mysticalagriculture:ice_essence'
    )
    headRecipe(
        event,
        'variantsandventures:thicket_head',
        'mysticalagriculture:zombie_essence',
        'mysticalagriculture:nature_essence'
    )
    headRecipe(
        event,
        'variantsandventures:murk_skull',
        'mysticalagriculture:skeleton_essence',
        'mysticalagriculture:water_essence'
    )
    headRecipe(
        event,
        'variantsandventures:verdant_skull',
        'mysticalagriculture:skeleton_essence',
        'mysticalagriculture:nature_essence'
    )
})
