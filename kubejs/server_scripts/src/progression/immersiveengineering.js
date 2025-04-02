ServerEvents.tags('item', event => {
    // Unify Thermal and Immersive Engineering saltpeter
    event.add('forge:gems/saltpeter', 'thermal:niter')
    event.add('forge:dusts/saltpeter', 'thermal:niter_dust')
    event.add('forge:dusts/niter', 'immersiveengineering:dust_saltpeter')
})

ServerEvents.recipes(event => {
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
})