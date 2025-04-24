ServerEvents.recipes(event => {
    let dyes = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink',
    ]

    let rockwools = dyes.map(dye => `thermal:${dye}_rockwool`)

    // Remove current rockwool recipes
    event.remove('thermal:rockwool/white_rockwool_from_smelting')
    event.remove('thermal:rockwool/white_rockwool_from_blasting')
    event.remove({ output: '#thermal:rockwool' })

    // Rockwool from slag and wool
    for (let dye of dyes) {
        event.shapeless(
            `thermal:${dye}_rockwool`,
            [
                '#forge:slag',
                `minecraft:${dye}_wool`,
            ]
        )
    }

    // Rockwool recoloring
    for (let dye of dyes) {
        let validRockwools = rockwools.filter(rockwool => rockwool != `thermal:${dye}_rockwool`)
        event.shapeless(
            `thermal:${dye}_rockwool`,
            [
                `#forge:dyes/${dye}`,
                validRockwools,
            ]
        )
    }
})