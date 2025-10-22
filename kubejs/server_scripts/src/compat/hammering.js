ServerEvents.recipes(event => {
    let hammers = [
        'embers:tinker_hammer',
        'immersiveengineering:hammer'
    ]

    let craftingHammers = [
        'immersiveengineering:hammer',
    ]

    let rodMaterials = [
        'iron',
        'steel',
        'aluminum'
    ]

    let plateMaterials = [
        'dawnstone',
        'iron',
        'gold',
        'copper',
        'lead',
        'silver',
        'nickel',
        'steel',
        'electrum',
        'constantan',
        'aluminum',
        'uranium',
    ]

    let dustMaterials = [
        'iron',
        'copper',
        'gold',
        'lead',
        'silver',
        'nickel',
        'aluminum',
        'uranium',
    ]

    let rodPattern = [
        'TI',
        ' I',
    ]

    let platePattern = [
        'T ',
        'II',
    ]

    let dustPattern = [
        'TI',
    ]

    function removeToolCrafting(event, shape, tools, materials) {
        for (let material of materials) {
            event.remove({ input: tools, output: `#forge:${shape}/${material}` })
        }
    }

    function addToolCrafting(event, outCount, inShape, outShape, tools, pattern, materials) {
        for (let material of materials) {
            let input = `forge:${inShape}/${material}`
            let output = getPreferred(`forge:${outShape}/${material}`)
            if (output == 'minecraft:air') {
                console.error(`no valid output for ${outShape}/${material}`)
                continue
            }
            event.shaped(
                { count: outCount, item: output },
                pattern,
                {
                    T: tools,
                    I: {tag: input}
                }
            ).id(`diefalpha:${material}_${inShape}_to_${outShape}`)
        }
    }

    // Rods from ingots hammering
    event.remove('immersiveengineering:crafting/stick_iron')
    event.remove('immersiveengineering:crafting/stick_steel')
    event.remove('immersiveengineering:crafting/stick_aluminum')
    addToolCrafting(event, 2, 'ingots', 'rods', craftingHammers, rodPattern, rodMaterials)

    // Plates from ingots hammering
    removeToolCrafting(event, 'plates', hammers, plateMaterials)
    addToolCrafting(event, 1, 'ingots', 'plates', craftingHammers, platePattern, plateMaterials)

    // Dusts from ores and raw materials
    removeToolCrafting(event, 'dusts', hammers, dustMaterials)
    addToolCrafting(event, 1, 'ores', 'dusts', craftingHammers, dustPattern, dustMaterials)
    addToolCrafting(event, 1, 'raw_materials', 'dusts', craftingHammers, dustPattern, dustMaterials)

})