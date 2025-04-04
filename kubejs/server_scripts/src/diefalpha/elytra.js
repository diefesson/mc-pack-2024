ServerEvents.recipes(event => {
    // Remove Elytra Trims unwanted recipes
    event.remove('elytratrims:glow')
    event.remove('elytratrims:animation')
    event.remove('elytratrims:patterns')

    // Immersive Engineering's Glider will be the base
    // - Minecraft Elytra
    event.shaped(
        'diefalpha:phantom_plate',
        [
            ' M ',
            'MPM',
            ' M '
        ],
        {
            M: 'minecraft:phantom_membrane',
            P: '#forge:plates/aluminum'
        }
    )
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
    const basicJetpack = Item.of(baseJetpack, { Id: "ironjetpacks:basic" })
    const advancedJetpack = Item.of(baseJetpack, { Id: "ironjetpacks:advanced" })
    const ultimateJetpack = Item.of(baseJetpack, { Id: "ironjetpacks:ultimate" })

    const transferNBT = (inputs, output) => {
        let original = inputs.find(baseJetpack);
        let result = output
        if (original.hasNBT()) {
            let nbt = original.nbt
            nbt.Id = output.nbt.Id
            result = output.withNBT(nbt)
        }
        return result
    }

    event.shaped(
        basicJetpack,
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
    event.shaped(
        advancedJetpack,
        [
            'ICI',
            'IJI',
            'I I'
        ],
        {
            I: 'thermal:lumium_ingot',
            C: 'thermal:rf_coil',
            J: basicJetpack.weakNBT()
        }
    ).modifyResult(transferNBT)
    event.shaped(
        ultimateJetpack,
        [
            'ICI',
            'IJI',
            'I I'
        ],
        {
            I: 'thermal_extra:dragonsteel_ingot',
            C: 'thermal:rf_coil',
            J: advancedJetpack.weakNBT()
        }
    ).modifyResult(transferNBT)
})
