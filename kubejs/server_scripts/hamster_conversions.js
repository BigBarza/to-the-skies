ServerEvents.recipes(event => {
    // Convert AHP items to KubeJS equivalents
    const conversions = [
        ['adorablehamsterpets:cheese',              'kubejs:cheese'],
        ['adorablehamsterpets:hamster_food_mix',    'kubejs:hamster_food_mix'],
        ['adorablehamsterpets:cucumber',            'kubejs:cucumber'],
        ['adorablehamsterpets:sliced_cucumber',     'kubejs:sliced_cucumber'],
        ['adorablehamsterpets:green_beans',         'kubejs:green_beans'],
        ['adorablehamsterpets:steamed_green_beans', 'kubejs:steamed_green_beans'],
    ]

    for (const [input, output] of conversions) {
        event.shapeless(output, [input])
    }

    // Replace AHP recipe outputs with KubeJS equivalents
    for (const [original, replacement] of conversions) {
        event.replaceOutput({ mod: 'adorablehamsterpets' }, original, replacement)
    }
})