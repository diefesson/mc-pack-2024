heads = [
    'variantsandventures:gelid_head',
    'variantsandventures:thicket_head',
    'variantsandventures:murk_skull',
    'variantsandventures:verdant_skull'
]

ServerEvents.tags('item', event => {
    for (let head of heads) {
        event.add('forge:heads', head)
    }
})

ServerEvents.tags('block', event => {
    for (let head of heads) {
        event.add('forge:heads', head)
    }
})

