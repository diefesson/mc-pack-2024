ServerEvents.recipes(event => {
    MAUtils.setup(event)
    
    MAUtils.headRecipe(
        Item.of('variantsandventures:gelid_head'),
        Item.of('mysticalagriculture:zombie_essence'),
        Item.of('mysticalagriculture:ice_essence'),
    )
    MAUtils.headRecipe(
        Item.of('variantsandventures:thicket_head'),
        Item.of('mysticalagriculture:zombie_essence'),
        Item.of('mysticalagriculture:nature_essence'),
    )
    MAUtils.headRecipe(
        Item.of('variantsandventures:murk_skull'),
        Item.of('mysticalagriculture:skeleton_essence'),
        Item.of('mysticalagriculture:water_essence'),
    )
    MAUtils.headRecipe(
        Item.of('variantsandventures:verdant_skull'),
        Item.of('mysticalagriculture:skeleton_essence'),
        Item.of('mysticalagriculture:nature_essence'),
    )
})
