const COLORS = [
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
    'pink'
];

const IRON_NUGGET = 'minecraft:iron_nugget'
const IRON_INGOT = 'minecraft:iron_ingot'
const GOLD_INGOT = 'minecraft:gold_ingot'

const MINECRAFT_CHEST = 'minecraft:chest'
const MINECRAFT_BARREL = 'minecraft:barrel'
const PLANKS = '#forge:planks'

const UPGRADE_COLUMN = 'compact_storage:upgrade_column';
const UPGRADE_ROW = 'compact_storage:upgrade_row';

ServerEvents.recipes(event => {
    COLORS.forEach(color => {
        let dye = `minecraft:${color}_dye`
        let wool = `minecraft:${color}_wool`

        let chest = `compact_storage:compact_chest_${color}`
        let barrel = `compact_storage:compact_barrel_${color}`
        let backpack = `compact_storage:backpack_${color}`

        let chestRecipe = `compact_storage:compact_chest_${color}`
        let barrelRecipe = `compact_storage:compact_barrel_${color}`
        let backpackRecipe = `compact_storage:backpack_${color}`

        event.remove(chestRecipe)
        event.remove(barrelRecipe)
        event.remove(backpackRecipe)

        event.shaped(
            chest,
            [
                'III',
                'DCD',
                'III'
            ],
            {
                I: IRON_INGOT,
                D: dye,
                C: MINECRAFT_CHEST
            }
        )

        event.shaped(
            barrel,
            [
                'III',
                'DBD',
                'III'
            ],
            {
                I: IRON_INGOT,
                D: dye,
                B: MINECRAFT_BARREL
            }
        )

        event.shaped(
            backpack,
            [
                'III',
                'WCW',
                'III'
            ],
            {
                I: IRON_INGOT,
                W: wool,
                C: MINECRAFT_CHEST
            }
        )
    });

    event.remove({ id: UPGRADE_COLUMN })
    event.remove({ id: UPGRADE_ROW })

    event.shaped(
        UPGRADE_COLUMN,
        [
            'PIP',
            ' I ',
            'PIP'
        ],
        {
            P: PLANKS,
            I: IRON_INGOT,
        }
    )

    event.shaped(
        UPGRADE_ROW,
        [
            'P P',
            'III',
            'P P'
        ],
        {
            P: PLANKS,
            I: IRON_INGOT,
        }
    )
})