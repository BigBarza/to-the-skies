ServerEvents.recipes(event => {
    // remove default mod recipe
    event.remove({ output: 'linearbearing:linear_bearing' })

    // add recipe to make the bearing item
    event.shaped(
        'kubejs:linear_bearing_item',
        [
            ' A ',
            ' I ',
            ' D '
        ],
        {
            A: '#c:slime_balls',
            I: '#c:ingots/andesite_alloy',
            D: '#c:cobblestones/deepslate'
        }
    )
})

// deployer and manual application recipe for linear bearing
ServerEvents.recipes(event => {

    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'linearbearing:linear_casing' },
            { item: 'kubejs:linear_bearing_item' }
        ],
        results: [
            {
                id: 'linearbearing:linear_bearing',
                amount: 1
            }
        ]
    })
})
