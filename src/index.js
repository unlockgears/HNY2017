const width = 800
const hieght = 600
const renderer = Phaser.AUTO
const color = ['red','blue','green','aqua','azure','cyan','yellow']
let current = 'red'
var next = ''
let emitter
let game = new Phaser.Game(width,hieght,renderer,'game')

let mainState = {
    preload(){
        game.load.image('firework','assets/particle.png')
    },
    create(){
        game.physics.startSystem(Phaser.Physics.ARCADE)
        game.stage.backgroundColor = '#FFFFF'
        emitter = game.add.emitter(0,0,7000)
        emitter.makeParticles('firework')
        emitter.gravity = 150
        game.input.onDown.add(particleExplosion,this)
        game.time.events.repeat(Phaser.Timer.SECOND,400000,changecolor,this)
    },
    update(){
    },
}

function particleExplosion(pointer){
    emitter.x = pointer.x
    emitter.y = pointer.y
    emitter.start(true,2000,null,50)
}

function Text() {
    var hnytext = game.add.text(150, 250, 'Happy New Year 2018', {
        fontSize: '50px',
        fill: current
    })
}
function changecolor(params) {
        console.log(current, next)
        next = color[Math.floor(Math.random() * color.length)]
        if (current !== next) {
            current = next
        }
        Text()
    }

game.state.add('main',mainState)
game.state.start('main')
