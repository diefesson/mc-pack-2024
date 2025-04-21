ServerEvents.recipes(event => {
    // Red Alloy Ingot
    event.remove('projectred_core:red_ingot')
    event.shapeless(
        '1x projectred_core:red_ingot',
        [
            '1x #forge:ingots/iron',
            '2x #forge:dusts/redstone',
        ]
    )
    
    // Infused Silicon
    event.remove('projectred_core:infused_silicon')
    event.shapeless(
        '1x projectred_core:infused_silicon',
        [
            '#forge:silicon',
            '2x #forge:dusts/redstone'
        ]
    )

    // Energized Silicon
    event.remove('projectred_core:energized_silicon')
    event.shapeless(
        '1x projectred_core:energized_silicon',
        [
            '#forge:silicon',
            '2x #forge:dusts/glowstone'
        ]
    )
})
