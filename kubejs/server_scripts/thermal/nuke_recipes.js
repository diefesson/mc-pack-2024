const ThermalFlags = Java.loadClass('cofh.thermal.lib.util.ThermalFlags')
ThermalFlags.setFlag(ThermalFlags.FLAG_NUCLEAR_EXPLOSIVES, true)

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('thermal:nuke_tnt'),
        [
            'tbt',
            'btb',
            'tbt'
        ],
        {
            t: 'minecraft:tnt',
            b: 'bigreactors:blutonium_block',
        }
    )
    event.shaped(
        Item.of('thermal:nuke_grenade', 3),
        [
            'tbt',
            'bib',
            'tbt'
        ],
        {
            t: 'minecraft:tnt',
            b: 'bigreactors:blutonium_block',
            i: 'minecraft:iron_block'
        }
    )
})
