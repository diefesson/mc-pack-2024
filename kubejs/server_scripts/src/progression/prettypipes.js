ServerEvents.recipes(event => {
    event.remove('prettypipes:pipe')
    event.shaped(
        '8x prettypipes:pipe',
        [
            'GGG',
            'CTC',
            'GGG',
        ],
        {
            G: '#thermal:glass/hardened',
            C: 'minecraft:copper_ingot',
            T: '#forge:ingots/tin',
        }
    )
})