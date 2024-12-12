ServerEvents.recipes(event => {
    const recipesIds = [
        'chargedcharms:charged_regeneration_charm',
        'chargedcharms:charged_absorption_charm',
        'chargedcharms:charged_glowup_charm',
        'chargedcharms:charged_totem_charm',
        'chargedcharms:charged_speed_charm',
    ]

    for (let id of recipesIds) {
        event.replaceInput(
            { id: id },
            { item: 'minecraft:iron_nugget' },
            { item: 'minecraft:iron_ingot' }
        )
        event.replaceInput(
            { id: id },
            { item: 'minecraft:gold_nugget' },
            { item: 'minecraft:gold_ingot' }
        )
    }
})