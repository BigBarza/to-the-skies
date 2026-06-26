// Listen to item registry event
StartupEvents.registry('item', event => {
  console.info("Adding replacements for hampter mod's fuckass items...")

  event.create('cheese')
  event.create('hamster_food_mix')
  event.create('cucumber')
  event.create('sliced_cucumber')
  event.create('green_beans')
  event.create('steamed_green_beans')

})