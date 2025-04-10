ServerEvents.recipes(event => {
    event.remove('friendsandfoes:copper_button')
    event.shapeless(
        'friendsandfoes:copper_button',
        [
            'minecraft:stone_button',
            '#forge:nuggets/copper'
        ]
    )
})
