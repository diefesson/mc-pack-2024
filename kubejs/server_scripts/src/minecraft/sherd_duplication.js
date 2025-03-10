ServerEvents.recipes(event => {
    Item.getList().forEach(item => {
        if (item.hasTag('minecraft:decorated_pot_sherds')){
            event.shaped(
                item,
                [
                    'BSB',
                    'BTB',
                    'BBB'
                ],
                {
                    'B': 'minecraft:brick',
                    'S': item,
                    'T': 'minecraft:terracotta'
                }
            )
        }
    })
})