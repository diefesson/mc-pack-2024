ServerEvents.tags('item', event => {
    // Unify Thermal and Immersive Engineering saltpeter
    event.add('forge:gems/saltpeter', 'thermal:niter')
    event.add('forge:dusts/saltpeter', 'thermal:niter_dust')
    event.add('forge:dusts/niter', 'immersiveengineering:dust_saltpeter')
})

ServerEvents.recipes(event => {
    // Allow Immersive Engineering Crusher to process Thermal Niter gems
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 2400,
        input: {
            tag: 'forge:gems/niter'
        },
        result: {
            tag: 'forge:dusts/niter'
        },
        secondaries: [],
    })

    // Immersive Engineering compat for Powah blocks
    event.custom({
        type: 'immersiveengineering:thermoelectric_source',
        singleBlock: 'powah:dry_ice',
        tempKelvin: 0
    })
    event.custom({
        type: 'immersiveengineering:thermoelectric_source',
        singleBlock: 'powah:blazing_crystal_block',
        tempKelvin: 2400
    })

})