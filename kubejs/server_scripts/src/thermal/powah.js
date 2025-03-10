ServerEvents.recipes(event => {
    ThermalUtils.setup(event)

    // Makes so Dielectric Paste can only be made in a induction smelter
    // With a new recipe

    event.remove('powah:crafting/dielectric_paste')
    event.remove('powah:crafting/dielectric_paste_2')

    ThermalUtils.smelter_alloy(
        Item.of('powah:dielectric_paste', 4),
        [
            Item.of('#minecraft:coals', 2),
            Item.of('minecraft:clay_ball', 1),
            Item.of('minecraft:quartz', 4)
        ]
    )
})
