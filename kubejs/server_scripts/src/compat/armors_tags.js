ServerEvents.tags('item', event => {
    let fixes = {
        'forge:armors/helmets': [
            'redstone_arsenal:flux_helmet',
            'productivebees:bee_nest_diamond_helmet',
            'malum:soul_stained_steel_helmet',
            'malum:soul_hunter_cloak',
            'redstone_arsenal:flux_helmet',
        ],
        'forge:armors/chestplates': [
            'redstone_arsenal:flux_chestplate',
            'malum:soul_stained_steel_chestplate',
            'malum:soul_hunter_robe',
        ],
        'forge:armors/leggings': [
            'redstone_arsenal:flux_leggings',
            'malum:soul_stained_steel_leggings',
            'malum:soul_hunter_leggings',
        ],
        'forge:armors/boots': [
            'redstone_arsenal:flux_boots',
            'malum:soul_stained_steel_boots',
            'malum:soul_hunter_boots',
        ],
        'forge:armors': [
            '#forge:armors/helmets',
            '#forge:armors/chestplates',
            '#forge:armors/leggings',
            '#forge:armors/boots',
        ]
    }

    for (let [key, values] of Object.entries(fixes)) {
        for (let value of values) {
            event.add(key,
                value)
        }
    }
})