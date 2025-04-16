ServerEvents.recipes(event => {
    let hammers = [
        'embers:tinker_hammer',
        'immersiveengineering:hammer'
    ]

    let plateMaterials = [
        'dawnstone',
        'iron',
        'gold',
        'copper',
        'netherite',
        'tin',
        'lead',
        'silver',
        'nickel',
        'steel',
        'rose_gold',
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium',
        'aluminum',
        'uranium',
        'zinc',
        'brass',
    ]

    let dustMaterials = [
        'iron',
        'copper',
        'gold',
        'tin',
        'lead',
        'silver',
        'nickel',
        'aluminum',
        'uranium',
    ]

    function removeToolCrafting(event, shape, tools, materials) {
        for (let material of materials) {
            event.remove({ input: tools, output: `#forge:${shape}/${material}` })
        }
    }

    function addToolCrafting(event, inCount, outCount, inShape, outShape, tools, materials) {
        for (let material of materials) {
            let input = `forge:${inShape}/${material}`
            let output = getPreferred(`forge:${outShape}/${material}`)
            if (!output) {
                console.error(`no valid output for ${inShape}/${material} => ${outShape}/${material}`)
                continue
            }
            event.shapeless(
                { count: outCount, item: output.id },
                []
                    .concat(Array(inCount).fill({ tag: input }))
                    .concat([tools])

            ).id(`diefalpha:${inShape}_to_${outShape}_${material}`)
        }
    }

    // Plates from ingots hammering
    removeToolCrafting(event, 'plates', hammers, plateMaterials)
    addToolCrafting(event, 2, 1, 'ingots', 'plates', hammers, plateMaterials)

    // Dusts from ores and raw materials
    removeToolCrafting(event, 'dusts', hammers, dustMaterials)
    addToolCrafting(event, 1, 1, 'ores', 'dusts', hammers, dustMaterials)
    addToolCrafting(event, 1, 1, 'raw_materials', 'dusts', hammers, dustMaterials)

})