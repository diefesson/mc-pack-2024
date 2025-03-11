ServerEvents.recipes(event => {
    ThermalUtils.setup(event)

    // Makes so Dielectric Paste can only be made in a induction smelter
    // With a new recipe

    event.remove('powah:crafting/dielectric_paste')
    event.remove('powah:crafting/dielectric_paste_2')

    ThermalUtils.smelter_alloy(
        Item.of('powah:dielectric_paste', 4),
        [
            { tag: 'minecraft:coals', count: 2 },
            { item: 'minecraft:clay_ball', count: 1 },
            { item: 'minecraft:quartz', count: 2 }
        ]
    )
})
