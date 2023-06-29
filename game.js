import WebFont from 'webfontloader';

const GAME_WIDTH = 1440;
const GAME_HEIGHT = 1366;
let arr = [0.001, 2, 20, 5, 0.05, 20, 50, 0.1, 6];
let arr_cong = [
    {
        text: "GREAT JOB!", 
        value: "0.001",
        icon: "eth",
        percent: 0.088,
        board: 'luckybonuseth',
    },
    {
        text: "CONGRATULATIONS!", 
        value: "",
        icon: "trx",
        percent: 0.2,
        board: 'luckybonustrx',
    },
    {
        text: "MUCH WOW!", 
        value: "",
        icon: "doge",
        percent: 0.208,
        board: 'luckybonusdoge',
    },
    {
        text: "KEEP UP THE GOOD LUCK!", 
        value: "",
        icon: "usdt",
        percent: 0.104,
        board: 'luckybonususdt',
    },
    {
        text: "CONGRATULATIONS!", 
        value: "",
        icon: "bnb",
        percent: 0.056,
        board: 'luckybonusbnb',
    },
    {
        text: "WELL DONE!", 
        value: "",
        icon: "usdc",
        percent: 0.056,
        board: 'luckybonususdc',
    },
    {
        text: "WELL DONE!", 
        value: "",
        icon: "rake",
        percent: 0.2,
        board: 'luckybonusrake',
    },
    {
        text: "WELL DONE!", 
        value: "",
        icon: "ltc",
        percent: 0.088,
        board: 'luckybonusltc',
    },
    {
        text: "CONGRATULATIONS!",
        value: "",
        icon: "btc",
        percent: 0,
        board: 'luckybonusbtc',
    },
];
let config={
    type:Phaser.AUTO,
    parent: 'game-container',
    width:GAME_WIDTH,
    height:GAME_WIDTH,
    backgroundColor:0x04141E,
    
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene:{
        preload:preload,
        create : create,
        update:update,
    },
    plugins: {
        global: [{
          key: 'WebFontLoader',
          plugin: window.WebFontLoader,
          start: true
        }]
    }
    
};

let game =new Phaser.Game(config);
const { width, height } = game.config;

let music ;
let counter = 0;
let pop;
let rounds;
let degree;
let total;
let tween;
let title;
let background;
let totalScore_panel;
let total_spin;
let ellipse;
let panel_container;
let base;
let wheel_container;
let wheel;
let lights;
let letters;
let coins;
let try_luck;
let letter;
let pin;
let spinwin;
let standart;
let emitter;

function preload(){
    console.log("Preload");
    const images = [
        'background',
        'luck',
        'pin',
        'button',
        'title',
        'spinwin',
        'base',
        'wheel',
        'lights',
        'letters',
        'coins',
        'total_spin',
        'standart',
        'ellipse',
        'Frame_6',
        'flower',
        'flower1',
        'flower2',
        'flower3',
        'flower4',
        'button_prize',
        'coinleft',
        'coinright',
        'close',
        'luckybonustrx',
        'signup',
        'eth',
        'usdc',
        'usdt',
        'bnb',
        'trx',
        'doge',
        'ltc',
        'rake',
        'btc',
        'game',
        'betting',
        'customer',
        'tm_icon',
        'visa_icon',
        'apple_icon',
        'google_icon',
        'samsung_icon',
        'modalBackground',
        'coin',
        'ellipse_modal',
        'shineRound',
        'luckybonususdt',
        'luckybonususdc',
        'luckybonustrx',
        'luckybonusrake',
        'luckybonusltc',
        'luckybonuseth',
        'luckybonusdoge',
        'luckybonusbtc',
        'luckybonusbnb',
      ];
    images.forEach((image) => {
    this.load.image(image, `assets/img/${image}.png`);
    });
    this.load.spritesheet('particles', 'assets/img/flower.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('lottery', 'assets/img/flower.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("plane", "assets/img/plane.png", { frameWidth: 512, frameHeight: 512 });

    this.load.audio('audio1', ['spina.mp3']);
    this.load.audio('pop', ['pop.mp3']);
    WebFont.load({
        google: {
            families: ['Inter']
        },
        active: () => {
            // Font is loaded and ready to use
            aaa=this.add.text(100, 100, 'Hello Phaser', { fontFamily: 'Your Font Family', fontSize: '32px', color: '#ffffff' });
            aaa.setDepth(10);
        }
    });

};

function create(){
    console.log("Create");
    const title = this.add.sprite(width / 2, 72, 'title');
    const background = this.add.sprite(width / 2, 400, 'background');
    background.setScale(1);
  
    // Create a sprite for the lottery
    // var lottery = this.add.sprite(400, 300, 'lottery');

    // // Add the blinking animation
    // this.anims.create({
    //     key: 'lottery',
    //     frames: this.anims.generateFrameNumbers('lottery', { start: 1, end: 4 }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    // lottery.anims.play('blink');

    // create a new rectangle shape with border-radius, stroke, and alpha
    const total_rect = this.add.graphics();
    total_rect.setPosition(width/2-242, 188);
    // total_rect.setOrigin(0.5);
    total_rect.fillStyle('0x072537');
    total_rect.fillRoundedRect(0, 0, 484, 70, 10);
    this.add.existing(total_rect);
    const totalScore_panel = this.add.container(width / 2, 225);
    const total_spin = this.add.sprite(-190, 0, 'total_spin');
    this.totalScore_text = this.add.text(230, 0, `$337,095,568.67`, {
        font: 'bold 32px Inter'
      });
    // this.load.font('Inter', 'assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf');
    this.totalScore_text.setStyle({
      color: '#0099F4',
      textAlign: 'center',
      fontWeight: 'bold',
    //   lineHeight: '24px',
    //   backgroundColor: '#ff00ff',
      align: 'right',
      textTransform: 'uppercase'
    });
    this.totalScore_text.setOrigin(1, 0.5);
    totalScore_panel.add(total_spin);
    totalScore_panel.add(this.totalScore_text);
  
    const ellipse = this.add.sprite(width / 2, 470, 'ellipse');
    ellipse.setScale(1);
  
    const panel_container = this.add.container(width / 2, height / 2);
    panel_container.setSize(520, 525);
  
    const base = this.add.sprite(0, -220, 'base');
    base.setScale(1);
    panel_container.add(base);
  
    this.wheel_container = this.add.container(width / 2, 462);
    const wheel = this.add.sprite(0, 0, 'wheel');
    wheel.setDisplaySize(470, 470);
    const lights = this.add.sprite(0, 0, 'lights');
    const letters = this.add.sprite(0, 0, 'letters');
    const coins = this.add.sprite(0, 0, 'coins');
    this.wheel_container.add(wheel);
    this.wheel_container.add(lights);
    this.wheel_container.add(letters);
    this.wheel_container.add(coins);

    lights.alpha = 0.2;
    this.tweens.add({ 
        targets: lights,
        alpha: 1, // Target alpha values
        duration: 200, // Duration of the animation in milliseconds
        ease: 'Linear', // Easing function
        yoyo: true, // Play the animation in reverse after reaching the target alpha
        repeat: -1, // Repeat the animation indefinitely
      });
  
    this.try_luck = this.add.image(width / 2, 460, 'button');
    this.try_luck.setScale(1);
    // this.try_luck.setDepth(10);
    this.letter = this.add.sprite(width / 2, 460, 'luck').setInteractive();
    this.letter.setScale(1);
    this.letter.setOrigin(0.5, 0.5);
    // this.letter.setDepth(1);
    const pin = this.add.sprite(width / 2, 304, 'pin');
    pin.setScale(1);

    const spinwin=this.add.sprite(width/2, 700,'spinwin');
    spinwin.setScale(1);
    
    const shineRound=this.add.sprite(width/2-150, 700,'shineRound');
    shineRound.setScale(1);

    const shineRound1=this.add.sprite(width/2, 700,'shineRound');
    shineRound1.setScale(1);

    shineRound.alpha=0;
    shineRound1.alpha=1;
    this.half1 = this.tweens.add({
        targets: shineRound1,
        x: width/2 + 150, // End position off-screen to the right
        alpha: 0,
        duration: 2000, // Duration of the animation in milliseconds
        ease: 'Quadratic.InOut', // Easing function
        repeat: -1, // Repeat the animation indefinitely
        //yoyo: true,
        // delay: 2000,
    });
    // this.half1.stop();
    this.flowTrigger = false;
    const half = this.tweens.add({
        targets: shineRound,
        x: width/2, // End position off-screen to the right
        alpha: 1,
        duration: 2000, // Duration of the animation in milliseconds
        ease: 'Quadratic.InOut', // Easing function
        repeat: -1, // Repeat the animation indefinitely
        //yoyo: true,
    });
    

    this.standart=this.add.sprite(width/2, 790,'standart').setInteractive();
    this.standart.setScale(1);
    
    this.scaleTrigger = false;
    this.letter.on('pointerup', spinwheel, this);
    this.standart.on('pointerup', spinwheel, this);
    this.letter.on('pointerover', function (pointer, localX, localY, event) {
        // Start the scaling animation when the mouse enters the canvas
        this.tweens.add({
            targets: [this.letter, this.try_luck],
            scaleX: 1.2, // The final scale on the x-axis
            scaleY: 1.2, // The final scale on the y-axis
            duration: 200, // The duration of the animation in milliseconds
            ease: 'Linear',
        });
    }, this);

    this.letter.on('pointerout', function () {
        // Reverse the scaling animation when the mouse leaves the canvas
        if (this.scaleTrigger){
            return;
        }
        else{
            this.tweens.add({
                targets: [this.letter, this.try_luck],
                scaleX: 1, // The initial scale on the x-axis
                scaleY: 1, // The initial scale on the y-axis
                duration: 200, // The duration of the animation in milliseconds
                ease: 'Linear'
            });
        }
    }, this);

    this.rotation = this.tweens.add({
        targets: this.letter,
        angle: -20, // The final angle of rotation (in degrees)
        duration: 700, // The duration of the animation in milliseconds
        repeat: -1, // -1 means repeat indefinitely, you can set a specific number of repeats if desired
        ease: 'Linear', // The easing function to use for the animation
        yoyo: true // Set to true to make the animation reverse back to its initial state
    });

    // this.rotation.play();
    //
    //set footer
    const game_icon = this.add.sprite(350, 920, 'game');
    this.game_text = this.add.text(400, 920, `More than 5000+ online slot games`,{
        wordWrap: { width: 150, useAdvancedWrap: true },
        font: 'DM Sans'
      });
    this.game_text.setStyle({
        color: '#E6E6E6',
        fontSize: '16px',
        fontFamily: 'DM Sans',
        fontWeight: '500',
        lineHeight: '140%',
        align: 'left'
    });
    this.game_text.setOrigin(0, 0.5);
    
    const betting_icon = this.add.sprite(620, 920, 'betting');
    this.betting_text = this.add.text(670, 920, `Seamless sports betting experience`,{
        wordWrap: { width: 150, useAdvancedWrap: true },
        font: 'DM Sans'
      });
    this.betting_text.setStyle({
        color: '#E6E6E6',
        fontSize: '16px',
        fontFamily: 'DM Sans',
        fontWeight: '500',
        lineHeight: '140%',
        align: 'left'
    });
    this.betting_text.setOrigin(0, 0.5);
    const customer_icon = this.add.sprite(890, 920, 'customer');
    this.customer_text = this.add.text(940, 920, `24/7 live chat for customer support`,{
        wordWrap: { width: 150, useAdvancedWrap: true },
        font: 'DM Sans'
      });
    this.customer_text.setStyle({
        color: '#E6E6E6',
        fontSize: '16px',
        fontFamily: 'DM Sans',
        fontWeight: '500',
        lineHeight: '140%',
        align: 'left'
    });
    this.customer_text.setOrigin(0, 0.5);

    const bottom_rect = this.add.graphics();
    bottom_rect.setPosition(width/2-400, 1040);
    // bottom_rect.setOrigin(0.5);
    bottom_rect.fillStyle('0x072537');
    bottom_rect.fillRoundedRect(0, 0, 800, 205, 10);
    this.add.existing(bottom_rect);
    this.bottomTitle_text = this.add.text(width/2, 1087, `Our Payment`,{
        // wordWrap: { width: 150, useAdvancedWrap: true },
        font: 'DM Sans'
      });
    this.bottomTitle_text.setStyle({
        color: '#E6E6E6',
        fontSize: '32px',
        fontFamily: 'DM Sans',
        fontWeight: '700',
        lineHeight: '100%',
        align: 'center',
    });
    this.bottomTitle_text.setOrigin(0.5, 0.5);
    this.bottomExp_text = this.add.text(width/2, 1120, `Purchase crypto with our accepted payment methods`,{
        // wordWrap: { width: 150, useAdvancedWrap: true },
        font: 'DM Sans'
      });
    this.bottomExp_text.setStyle({
        color: '#E6E6E6',
        fontSize: '14px',
        fontFamily: 'DM Sans',
        fontWeight: '500',
        lineHeight: '150%',
        align: 'center',
        letterSpacing: '-0.42px'
    });
    this.bottomExp_text.setOrigin(0.5, 0.5);

    this.tm_icon = this.add.sprite(380, 1180, 'tm_icon');
    this.tm_icon.setOrigin(0.5, 0.5);
    this.visa_icon = this.add.sprite(width/2-160, 1180, 'visa_icon');
    this.visa_icon.setOrigin(0.5, 0.5);
    this.apple_icon = this.add.sprite(width/2, 1180, 'apple_icon');
    this.apple_icon.setOrigin(0.5, 0.5);
    this.google_icon = this.add.sprite(width/2+160, 1180, 'google_icon');
    this.google_icon.setOrigin(0.5, 0.5);
    this.samsung_icon = this.add.sprite(1040, 1180, 'samsung_icon');
    this.samsung_icon.setOrigin(0.5, 0.5);

    this.modalBackground = this.add.sprite(0, -20, 'modalBackground');
    this.modalBackground.setOrigin(0);
    this.modalBackground.setAlpha(0.5);
    this.modalBackground.setInteractive();

    this.modalBackground.visible=false;

    //set modal
    this.modal = this.add.container(width/2, height/2 - 300);
    this.modal.setSize(617, 516);

    const modal_rect = this.add.graphics();
    // modal_rect.setPosition(width/2-320, 30);
    modal_rect.fillStyle('0x072537');
    modal_rect.fillRoundedRect(-320, -380, 640, 520, 10);
    // this.add.existing(modal_rect);

    const ellipse_modal = this.add.sprite(0, -80, 'ellipse_modal');
    ellipse_modal.setScale(1);
    const button_prize = this.add.sprite(0, -20, 'button_prize');
    button_prize.setScale(0.25);
    const coinleft = this.add.sprite(-230, -20, 'coinleft');
    coinleft.setScale(0.59);
    const coinRight = this.add.sprite(230, -20, 'coinright');
    coinRight.setScale(0.6);
    this.close = this.add.sprite(280, -350, 'close').setInteractive();
    this.close.setScale(0.2);
    this.signup = this.add.sprite(0, 70, 'signup').setInteractive();
    this.signup.setScale(1);
    // this.signup.setOrigin(0.5);

    this.cong_text = this.add.text(0, -340, "");
    this.cong_text.setStyle({
      fontSize: '32px',
      fontFamily: 'Gilroy',
      color: '#F5F5F5',
      fontWeight: '600',
      lineHeight: '100%',
      letterSpacing: '-1.28px',
      align: 'center'
    });

    this.cong_text.setOrigin(0.5, 0);
    this.close.on('pointerup', hideSuccessModal, this);
    this.signup.on('pointerup', hideSuccessModal, this);

    this.modal.add(modal_rect);
    this.modal.add(ellipse_modal);
    this.modal.add(button_prize);
    this.modal.add(coinleft);
    this.modal.add(coinRight);
    this.modal.add(this.close);
    this.modal.add(this.cong_text);
    this.modal.add(this.signup);
    // Phaser.Display.Align.In.Center(this.modal, this.add.zone(0, 0, game.config.width, game.config.height));
    this.modal.setScale(0.3);
    this.modal.visible=false;

    let particleConfig = {
        x: width/2,
        y: 300,
        key: 'particleKey', // key to use when creating the particle emitter
        frame: { frames: [0, 1, 2, 3], cycle: true }, // frames to use for the particles
        lifespan: 2000, // lifespan of the particles in milliseconds
        speed: { min: 0, max: 800 },
        angle: { min: 0, max: 360 },
        scale: { start: 0.2, end: .5 },
        gravityY: 1000, // gravity applied to the particles
        // quantity: 10, // number of particles emitted per second
        // frequency: 100, // time between particle emissions in milliseconds
        alpha: { start: 1, end: 1}, // alpha of the particles over their lifespan
        blendMode: 'ADD', // blending mode of the particles
        // tint: 0xff0000 // tint color of the particles
    };

    this.anims.create({
        key: "fly",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("plane", { start: 3, end: 5 }),
        repeat: -1
    });

    this.anims.create({
        key: "explode",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("plane", { start: 0, end: 2 }),
        repeat: 2
    });

    emitter = this.add.particles('particles').createEmitter(particleConfig);
    emitter.stop();

    music = this.sound.add('audio1');
    pop = this.sound.add('pop');
    
}
let showValue;
let board;
function spinwheel(){
    // Disable the spin button
    this.letter.disableInteractive();
    this.standart.disableInteractive();

    this.scaleTrigger=true;
    this.rotation.stop();

    music.play();
    let rounds = Phaser.Math.Between(3,5);
    let rand = Math.random();
    let sum=0.0;
    let index=0;
    for (let i=0; i<9; i++){
        sum+=arr_cong[i].percent;
        if(sum>rand){
            index = i;
            break;
        }
    }
    var degree=index*40;
    total=rounds*360+degree;
    console.log(rand, index, total)
    tween = this.tweens.add({
        targets:this.wheel_container,
        angle:-total,
        ease:"Cubic.easeInOut",
        duration:6000,
        callbackScope:this,
        onComplete:function(){
            this.modal.visible=true;
            this.tweens.add({
                targets: this.modal,
                scaleX: 1,
                scaleY: 1,
                ease: 'Back',
                duration: 200,
            });

            this.cong_text.setText(arr_cong[index].text);
            showValue = this.add.sprite(0, -20, `${arr_cong[index].icon}`);
            board = this.add.sprite(0, -170, `${arr_cong[index].board}`);
            board.setDisplaySize(400, 220);
            // board.setScale(0.25);
            this.modal.add(showValue);
            this.modal.add(board);
            emitter.explode(100);
            console.log(arr[index], index);
            counter = counter + arr[index];
            music.stop();
            pop.play();
            // this.game_text.setText("You won "+(9-(degree/40)));
            // this.totalScore_text.setText('$'+ counter);
            // this.add.text(w/2,h/2,(12-(degree/30)),this.font_style);
            // text.ScaleX+=1;
            
            // Enable the spin button
            this.letter.setInteractive();
            this.standart.setInteractive();
            // this.wheel_container.angle=0;
            this.modalBackground.setVisible(true);
            this.scaleTrigger=false;
            this.letter.angle=0;
            this.rotation.play();
        }
    });
}

function update(){
    console.log("Inside update");
}
function hideSuccessModal() {
    // this.modal.visible = false;
    this.tweens.add({
        targets: this.modal,
        scaleX: 0.8,
        scaleY: 0.8,
        ease: 'Back',
        duration: 100,
        onComplete: () => {
            this.modal.setVisible(false);
            showValue.destroy();
            board.destroy();
            emitter.stop();
            this.modalBackground.setVisible(false);
        },
      });
    
    this.rotation.play();
    
}
// window.WebFont.load({
//     custom: {
//       families: ['Inter'],
//       urls: ['assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf', ]
//     }
//   });
// scene.load.scenePlugin({
//     key: 'rexuiplugin',
//     url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
//     sceneKey: 'rexUI'
// });