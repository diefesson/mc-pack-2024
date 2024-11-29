ServerEvents.recipes(event => {

    const elytra = 'minecraft:elytra'

    const enderiumIngot = Item.of('thermal:enderium_ingot')
    const crimsonSteelIngot = Item.of('silentgear:crimson_steel_ingot')
    const dragonsteelIngot = Item.of('thermal_extra:dragonsteel_ingot')

    const redstoneFluxCoil = Item.of('thermal:rf_coil')

    const jetpackId = Item.of('ironjetpacks:jetpack')

    const basicJetpack = Item.of(jetpackId, { Id: "ironjetpacks:basic" })
    const advancedJetpack = Item.of(jetpackId, { Id: "ironjetpacks:advanced" })
    const ultimateJetpack = Item.of(jetpackId, { Id: "ironjetpacks:ultimate" })

    const transferNBT = (inputs, output) => {
        let original = inputs.find(jetpackId);
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
            'IEI',
            'I I'
        ],
        {
            I: enderiumIngot,
            C: redstoneFluxCoil,
            E: elytra
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
            I: crimsonSteelIngot,
            C: redstoneFluxCoil,
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
            I: dragonsteelIngot,
            C: redstoneFluxCoil,
            J: advancedJetpack.weakNBT()
        }
    ).modifyResult(transferNBT)
})
