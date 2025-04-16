ServerEvents.tags('item', event => {
    // Tag implications
    event.add('forge:tools', '#forge:tools/hammers')
    event.add('forge:tools', '#forge:tools/excavators')
    event.add('forge:tools', '#forge:tools/sickles')

    // Item tags
    Item.getList().forEach(item => {
        if (!item.id.startsWith('tools_complement:')) {
            return
        }

        // Gear
        if (item.id.contains('helmet')) {
            event.add('forge:armors/helmets', item.id)
        }
        if (item.id.contains('chestplate')) {
            event.add('forge:armors/chestplates', item.id)
        }
        if (item.id.contains('leggings')) {
            event.add('forge:armors/leggings', item.id)
        }
        if (item.id.contains('boots')) {
            event.add('forge:armors/boots', item.id)
        }

        // Vanilla tools
        if (item.id.contains('sword')) {
            event.add('forge:tools/swords', item.id)
        }
        if (item.id.contains('axe')) {
            event.add('forge:tools/axes', item.id)
        }
        if (item.id.contains('pickaxe')) {
            event.add('forge:tools/pickaxes', item.id)
        }
        if (item.id.contains('shovel')) {
            event.add('forge:tools/shovels', item.id)
        }
        if (item.id.contains('hoe')) {
            event.add('forge:tools/hoes', item.id)
        }

        // Modded tools
        if (item.id.contains('hammer')) {
            event.add('forge:tools/hammers', item.id)
        }
        if (item.id.contains('excavator')) {
            event.add('forge:tools/excavators', item.id)
        }
        if (item.id.contains('sickle')) {
            event.add('forge:tools/sickles', item.id)
        }
        if (item.id.contains('knife')) {
            event.add('forge:tools/knives', item.id)
        }
    })
})