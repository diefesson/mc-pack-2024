ServerEvents.recipes(event => {
    // Hull
    event.remove('immersive_aircraft:hull')
    event.shaped(
        'immersive_aircraft:hull',
        [
            'PPP',
            'SAS',
            'PPP',
        ],
        {
            P: '#forge:treated_wood',
            S: '#forge:storage_blocks/steel',
            A: '#forge:storage_blocks/aluminum'
        },
    )

    // Engine
    event.remove('immersive_aircraft:engine')
    event.shaped(
        'immersive_aircraft:engine',
        [
            'III',
            'IBI',
            'IFI',
        ],
        {
            I: '#forge:ingots/steel',
            B: 'immersive_aircraft:boiler',
            F: 'minecraft:blast_furnace',
        },
    )

    // Sail
    event.remove('immersive_aircraft:sail')
    event.shaped(
        'immersive_aircraft:sail',
        [
            'FFS',
            'FFS',
            'FFS',
        ],
        {
            F: '#forge:fabric_hemp',
            S: '#forge:fiber_hemp',
        },
    )

    // Propeller
    event.remove('immersive_aircraft:propeller')
    event.shaped(
        'immersive_aircraft:propeller',
        [
            'II ',
            ' I ',
            ' II',
        ],
        {
            I: '#forge:ingots/steel'
        },
    )

    // Boiler
    event.remove('immersive_aircraft:boiler')
    event.shaped(
        'immersive_aircraft:boiler',
        [
            'III',
            'I I',
            'IFI',
        ],
        {
            I: '#forge:ingots/bronze',
            F: 'minecraft:blast_furnace',
        },
    )

    // Bomb Bay
    event.remove('immersive_aircraft:bomb_bay')
    event.shaped(
        'immersive_aircraft:bomb_bay',
        [
            'IPI',
            'IPI',
            '   ',
        ],
        {
            I: '#forge:ingots/steel',
            P: '#forge:plates/steel',
        },
    )

    // Enhanced Propeller
    event.remove('immersive_aircraft:enhanced_propeller')
    event.shaped(
        'immersive_aircraft:enhanced_propeller',
        [
            'III',
            'IPI',
            'III',
        ],
        {
            I: '#forge:ingots/bronze',
            P: 'immersive_aircraft:propeller',
        },
    )

    // Eco Engine
    event.remove('immersive_aircraft:eco_engine')
    event.shaped(
        'immersive_aircraft:eco_engine',
        [
            'SIS',
            'IEI',
            'SIS',
        ],
        {
            S: '#forge:slimeballs',
            I: '#forge:ingots/tin',
            E: 'immersive_aircraft:engine',
        },
    )

    // Nether Engine
    event.remove('immersive_aircraft:nether_engine')
    event.shaped(
        'immersive_aircraft:nether_engine',
        [
            'BBB',
            'EIE',
            'BBB',
        ],
        {
            B: '#forge:ingots/nether_brick',
            E: 'immersive_aircraft:engine',
            I: '#forge:ingots/netherite',
        },
    )

    // Steel Boiler
    event.remove('immersive_aircraft:steel_boiler')
    event.shaped(
        'immersive_aircraft:steel_boiler',
        [
            'III',
            'IBI',
            'III',
        ],
        {
            I: '#forge:ingots/steel',
            B: 'immersive_aircraft:boiler',
        }
    )

    // Industrial Gears
    event.remove('immersive_aircraft:industrial_gears')
    event.shaped(
        'immersive_aircraft:industrial_gears',
        [
            ' A',
            'B ',
        ],
        {
            A: '#forge:gears/bronze',
            B: '#forge:gears/steel',
        }
    )

    // Sturdy Pipes
    event.remove('immersive_aircraft:sturdy_pipes')
    event.shaped(
        'immersive_aircraft:sturdy_pipes',
        [
            '  S',
            'BBB',
            'S  ',
        ],
        {
            S: '#forge:ingots/steel',
            B: '#forge:ingots/bronze',
        },
    )

    // Hull Reinforcement
    event.remove('immersive_aircraft:hull_reinforcement')
    event.shaped(
        'immersive_aircraft:hull_reinforcement',
        [
            'III',
            'GHG',
            'III',
        ],
        {
            I: '#forge:ingots/steel',
            G: '#forge:gems/diamond',
            H: 'immersive_aircraft:hull',
        },
    )

    event.remove('immersive_aircraft:improved_landing_gear')
    event.shaped(
        'immersive_aircraft:improved_landing_gear',
        [
            ' II',
            'RRI',
            'RR ',
        ],
        {
            I: '#forge:ingots/steel',
            R: 'thermal:cured_rubber',
        },
    )
})
