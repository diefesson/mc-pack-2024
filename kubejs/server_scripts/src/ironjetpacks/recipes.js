const ELYTRA = 'minecraft:elytra'

const ENDERIUM_INGOT = 'thermal:enderium_ingot'
const CRIMSON_STEEL_INGOT = 'silentgear:crimson_steel_ingot'
const DRAGONSTEEL_INGOT = 'thermal_extra:dragonsteel_ingot'

const REDSTONE_FLUX_COIL = 'thermal:rf_coil'

const JETPACK = 'ironjetpacks:jetpack'

const BASIC_JETPACK = Item.of(JETPACK, { Id: "ironjetpacks:basic"})
const ADVANCED_JETPACK = Item.of(JETPACK, { Id: "ironjetpacks:advanced"})
const ULTIMATE_JETPACK = Item.of(JETPACK, { Id: "ironjetpacks:ultimate"})

ServerEvents.recipes(event => {
    const transferNBT = (inputs, output) => {
        let original = inputs.find(JETPACK);
        let result = output
        if (original.hasNBT()) {
            let nbt = original.nbt
            nbt.Id = output.nbt.Id
            result = output.withNBT(nbt)
        }
        return result
    }

    event.shaped(
        BASIC_JETPACK,
        [
            'ICI',
            'IEI',
            'I I'
        ],
        {
            I: ENDERIUM_INGOT,
            C: REDSTONE_FLUX_COIL,
            E: ELYTRA
        }
    )
    event.shaped(
        ADVANCED_JETPACK,
        [
            'ICI',
            'IJI',
            'I I'
        ],
        {
            I: CRIMSON_STEEL_INGOT,
            C: REDSTONE_FLUX_COIL,
            J: BASIC_JETPACK.weakNBT()
        }
    ).modifyResult(transferNBT)
    event.shaped(
        ULTIMATE_JETPACK,
        [
            'ICI',
            'IJI',
            'I I'
        ],
        {
            I: DRAGONSTEEL_INGOT,
            C: REDSTONE_FLUX_COIL,
            J: ADVANCED_JETPACK.weakNBT()
        }
    ).modifyResult(transferNBT)
})
