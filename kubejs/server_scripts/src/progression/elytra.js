ServerEvents.recipes(event => {
    // Immersive Engineering's Glider will be the base
    // - Minecraft Elytra
    event.shaped(
        'minecraft:elytra',
        [
            ' P ',
            'PGP',
            ' P ',
        ],
        {
            'P': 'diefalpha:phantom_plate',
            'G': 'immersiveengineering:glider'
        }
    )

    // - Redstone Arsenal Flux Elytra
    event.replaceInput(
        'redstone_arsenal:flux_elytra',
        'minecraft:elytra',
        'immersiveengineering:glider',
    )

    // - Iron Jetpacks jetpacks
    const baseJetpack = Item.of('ironjetpacks:jetpack')
    const enderiumJetpack = Item.of(baseJetpack, { Id: "ironjetpacks:enderium" })

    event.shaped(
        enderiumJetpack,
        [
            'ICI',
            'IGI',
            'I I'
        ],
        {
            I: 'thermal:enderium_ingot',
            C: 'thermal:rf_coil',
            G: 'immersiveengineering:glider'
        }
    )
})
