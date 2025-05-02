ServerEvents.tags('item', event => {
    let fixes = {
        'forge:tools/swords': [
            'ae2:certus_quartz_sword',
            'ae2:fluix_sword',
            'ae2:nether_quartz_sword',
            'embers:lead_sword',
            'embers:silver_sword',
            'embers:dawnstone_sword',
            'redstone_arsenal:flux_sword',
            'malum:soul_stained_steel_sword',
        ],
        'forge:tools/axes': [
            'ae2:nether_quartz_axe',
            'ae2:certus_quartz_axe',
            'ae2:fluix_axe',
            'embers:clockwork_axe',
            'embers:lead_axe',
            'embers:silver_axe',
            'embers:dawnstone_axe',
            'redstone_arsenal:flux_axe',
            'malum:soul_stained_steel_axe',
        ],
        'forge:tools/pickaxes': [
            'ae2:certus_quartz_pickaxe',
            'ae2:nether_quartz_pickaxe',
            'ae2:fluix_pickaxe',
            'embers:clockwork_pickaxe',
            'embers:lead_pickaxe',
            'embers:silver_pickaxe',
            'embers:dawnstone_pickaxe',
            'redstone_arsenal:flux_pickaxe',
            'malum:soul_stained_steel_pickaxe',
        ],
        'forge:tools/shovels': [
            'ae2:fluix_shovel',
            'ae2:certus_quartz_shovel',
            'ae2:nether_quartz_shovel',
            'embers:lead_shovel',
            'embers:silver_shovel',
            'embers:dawnstone_shovel',
            'redstone_arsenal:flux_shovel',
            'malum:soul_stained_steel_shovel',
        ],
        'forge:tools/hoes': [
            'ae2:fluix_hoe',
            'ae2:nether_quartz_hoe',
            'ae2:certus_quartz_hoe',
            'embers:lead_hoe',
            'embers:silver_hoe',
            'embers:dawnstone_hoe',
            'malum:soul_stained_steel_hoe',
        ],
        'forge:tools/hammers': [
            'framedblocks:framed_hammer',
            'redstone_arsenal:flux_hammer',
            'immersiveengineering:hammer',
        ],
        'forge:tools/wrenches': [
            'redstone_arsenal:flux_wrench',
            'prettypipes:wrench'
        ],
        'forge:tools/others': [
            'pneumaticcraft:jackhammer',
            'immersiveengineering:buzzsaw',
            'immersiveengineering:drill',
        ],
        'forge:tools/bows': [
            'enderzoology:hunting_bow',
            'redstone_arsenal:flux_bow',
        ],
        'forge:tools/crossbows': [
            'redstone_arsenal:flux_crossbow',
        ],
        'forge:tools': [
            '#forge:tools/swords',
            '#forge:tools/axes',
            '#forge:tools/pickaxes',
            '#forge:tools/shovels',
            '#forge:tools/hoes',
            '#forge:tools/hammers',
            '#forge:tools/wrenches',
            '#forge:tools/others',
        ]
    }

    for (let [key, values] of Object.entries(fixes)) {
        for (let value of values) {
            event.add(key,
                value)
        }
    }
})