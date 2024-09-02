ServerEvents.recipes(event => {
    console.warn('here')
    event.remove({output: 'silentgear:bronze_ingot'})
})