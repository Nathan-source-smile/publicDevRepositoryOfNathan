// import WebFont from 'webfontloader';

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
let config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: GAME_WIDTH,
    height: GAME_WIDTH,
    backgroundColor: 0x04141E,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    plugins: {
        global: [{
            key: 'WebFontLoader',
            plugin: window.WebFontLoader,
            start: true
        }]
    }

};

let game = new Phaser.Game(config);
const { width, height } = game.config;

let music;
let backsound;
let counter = 0;
let pop;
let total;
let tween;
let total_spin;
let base;
let wheel;
let lights;
let letters;
let coins;
let pin;
let spinwin;
let emitter;
let total_rect;

function preload() {
    console.log("Preload");
    const images = [
        'landing',
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
        'glitter',
        'list',
        'shareText',
        'f',
        't',
        'm',
        'l',
        'or',
        'refer',
    ];
    images.forEach((image) => {
        this.load.image(image, `assets/img/${image}.png`);
    });
    this.load.spritesheet('particles', 'assets/img/flower.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("shiningStar", "assets/img/twinklingstar.png", { frameWidth: 738, frameHeight: 738 });

    this.load.audio('startsound', ['assets/AudioClips/playStart.wav']);
    this.load.audio('pop', ['assets/AudioClips/spinWin.wav']);
    this.load.audio('backsound', ['assets/AudioClips/03_Spinning_Wheel_Music_LOOP.wav']);
    this.load.audio('buttonsound', ['assets/AudioClips/uiButton.wav']);
};

function create() {
    console.log("Create");
    const landing = this.add.sprite(width / 2, height / 2, 'landing');
    landing.setScale(1);
    landing.setOrigin(0.5, 0.5);

    this.standart = this.add.sprite(width / 2, 850, 'standart').setInteractive();
    this.standart.setScale(1);
    this.standart.on('pointerup', showSpinwheelModal, this);

    // blur back of modal
    this.modalBackground = this.add.sprite(0, -20, 'modalBackground');
    this.modalBackground.setOrigin(0);
    this.modalBackground.setAlpha(0.5);
    this.modalBackground.setInteractive();
    this.modalBackground.visible = false;

    //set spinwheel modal
    this.spinwheelmodal = this.add.container(width / 2, height / 2);
    this.spinwheelmodal.setSize(476, 807);

    const spinwheelmodal_rect = this.add.graphics();
    spinwheelmodal_rect.fillStyle('0x072537');
    spinwheelmodal_rect.fillRoundedRect(460 - width / 2, 60 - height / 2, 516, 870, 10);
    const ellipse = this.add.sprite(0, 440 - height / 2, 'ellipse');
    ellipse.setScale(1);
    const title_text = this.add.text(0, 125 - height / 2, `SPIN THE WHEEL`, {
        font: '32px DM Sans'
    });
    title_text.setStyle({
        color: '#F5F5F5',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '32px',
        fontFamily: 'DM Sans',
        bold: 'True',
        lineHeight: '100%',
        letterSpacing: '-1.28px',
        align: 'right',
        textTransform: 'uppercase',
        fontStyle: 'normal',
    });
    title_text.setOrigin(0.5, 0.5);
    total_rect = this.add.graphics();
    total_rect.setPosition(490 - width / 2, 184 - height / 2);
    total_rect.fillStyle('0x010E17');
    total_rect.fillRoundedRect(0, 0, 452, 62, 10);
    this.add.existing(total_rect);
    total_spin = this.add.sprite(- 170, 215 - height / 2, 'total_spin');
    this.totalScore_text = this.add.text(210, 215 - height / 2, `$337,095,568.67`, {
        font: 'bold 32px Inter'
    });
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
    this.spinwheelmodalclose = this.add.sprite(950 - width / 2, 90 - height / 2, 'close').setInteractive();
    this.spinwheelmodalclose.setScale(0.2);
    this.spinwheelmodalclose.on('pointerup', hideSpinWheelModal, this);
    base = this.add.sprite(0, - 220, 'base');
    base.setScale(1);
    this.wheel_container = this.add.container(0, 462 - height / 2);
    wheel = this.add.sprite(0, 0, 'wheel');
    wheel.setDisplaySize(470, 470);
    lights = this.add.sprite(0, 0, 'lights');
    letters = this.add.sprite(0, 0, 'letters');
    coins = this.add.sprite(0, 0, 'coins');
    this.wheel_container.add(wheel);
    this.wheel_container.add(lights);
    this.wheel_container.add(letters);
    this.wheel_container.add(coins);
    this.try_luck = this.add.image(0, 460 - height / 2, 'button');
    this.try_luck.setScale(1);
    this.letter = this.add.sprite(0, 460 - height / 2, 'luck').setInteractive();
    this.letter.setScale(1);
    this.letter.setOrigin(0.5, 0.5);
    pin = this.add.sprite(0, 304 - height / 2, 'pin');
    pin.setScale(1);
    spinwin = this.add.sprite(0, 700 - height / 2, 'spinwin');
    spinwin.setScale(1);
    const shineRound = this.add.sprite(- 150, 700 - height / 2, 'shineRound');
    shineRound.setScale(1);
    const shineRound1 = this.add.sprite(0, 700 - height / 2, 'shineRound');
    shineRound1.setScale(1);
    shineRound.alpha = 0;
    shineRound1.alpha = 1;
    const luckyspin_rect = this.add.graphics();
    luckyspin_rect.setPosition(- 90, 760 - height / 2);
    luckyspin_rect.fillStyle('0x010E17');
    luckyspin_rect.fillRoundedRect(0, 0, 180, 50, 0);
    const luckyspin_text = this.add.text(0, 785 - height / 2, `LCUKY SPIN: 1`, {
        font: '16px Inter bold'
    });
    luckyspin_text.setStyle({
        fontSize: '16px',
        fontFamily: 'Inter',
        color: '#F5F5F5',
        textAlign: 'center',
        bold: 'True',
        lineHeight: '100%',
        letterSpacing: '-1.28px',
        align: 'right',
        textTransform: 'uppercase',
        fontStyle: 'normal',
    });
    luckyspin_text.setOrigin(0.5, 0.5);
    const line = new Phaser.Geom.Line(- 226, 830 - height / 2, 226, 830 - height / 2);
    const line_graphics = this.add.graphics();
    line_graphics.lineStyle(1, 0x293C53);
    line_graphics.strokeLineShape(line);
    const list = this.add.sprite(0, 880 - height / 2, 'list');
    //add to spinwheelmodal
    this.spinwheelmodal.add(spinwheelmodal_rect);
    this.spinwheelmodal.add(ellipse);
    this.spinwheelmodal.add(title_text);
    this.spinwheelmodal.add(this.spinwheelmodalclose);
    this.spinwheelmodal.add(total_rect);
    this.spinwheelmodal.add(total_spin);
    this.spinwheelmodal.add(this.totalScore_text);
    this.spinwheelmodal.add(base);
    this.spinwheelmodal.add(this.wheel_container);
    this.spinwheelmodal.add(this.try_luck);
    this.spinwheelmodal.add(this.letter);
    this.spinwheelmodal.add(pin);
    this.spinwheelmodal.add(spinwin);
    this.spinwheelmodal.add(luckyspin_rect);
    this.spinwheelmodal.add(luckyspin_text);
    this.spinwheelmodal.add(line_graphics);
    this.spinwheelmodal.add(list);
    this.spinwheelmodal.add(shineRound);
    this.spinwheelmodal.add(shineRound1);
    this.spinwheelmodal.setScale(0.3);
    this.spinwheelmodal.visible = false;

    //animation
    //change of lights's alpha 
    lights.alpha = 0.2;
    this.tweens.add({
        targets: lights,
        alpha: 1, // Target alpha values
        duration: 200, // Duration of the animation in milliseconds
        ease: 'Linear', // Easing function
        yoyo: true, // Play the animation in reverse after reaching the target alpha
        repeat: -1, // Repeat the animation indefinitely
    });
    //flow shine area
    const half1 = this.tweens.add({
        targets: shineRound1,
        x: 150, // End position off-screen to the right
        alpha: 0,
        duration: 4000, // Duration of the animation in milliseconds
        ease: 'Quadratic.InOut', // Easing function
        repeat: -1, // Repeat the animation indefinitely
        //yoyo: true,
        // delay: 2000,
    });
    const half = this.tweens.add({
        targets: shineRound,
        x: 0, // End position off-screen to the right
        alpha: 1,
        duration: 4000, // Duration of the animation in milliseconds
        ease: 'Quadratic.InOut', // Easing function
        repeat: -1, // Repeat the animation indefinitely
        //yoyo: true,
    });
    this.scaleTrigger = false;
    this.letter.on('pointerup', spinwheel, this);
    //scaling letter
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
        if (this.scaleTrigger) {
            return;
        }
        else {
            this.tweens.add({
                targets: [this.letter, this.try_luck],
                scaleX: 1, // The initial scale on the x-axis
                scaleY: 1, // The initial scale on the y-axis
                duration: 200, // The duration of the animation in milliseconds
                ease: 'Linear'
            });
        }
    }, this);
    // rotate letter(try luck)
    this.rotation = this.tweens.add({
        targets: this.letter,
        angle: -20, // The final angle of rotation (in degrees)
        duration: 700, // The duration of the animation in milliseconds
        repeat: -1, // -1 means repeat indefinitely, you can set a specific number of repeats if desired
        ease: 'Linear', // The easing function to use for the animation
        yoyo: true // Set to true to make the animation reverse back to its initial state
    });

    //set congratulation modal
    this.modal = this.add.container(width / 2, height / 2 - 300);
    this.modal.setSize(617, 516);

    const modal_rect = this.add.graphics();
    // modal_rect.setPosition(width/2-320, 30);
    modal_rect.fillStyle('0x072537');
    modal_rect.fillRoundedRect(-320, -380, 640, 750, 10);
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
        fontFamily: 'Inter',
        color: '#F5F5F5',
        fontWeight: '600',
        lineHeight: '100%',
        letterSpacing: '-1.28px',
        align: 'center'
    });
    this.cong_text.setOrigin(0.5, 0);
    const line2 = new Phaser.Geom.Line(- 260, 840 - height / 2, 260, 840 - height / 2);
    const line_graphics2 = this.add.graphics();
    line_graphics2.lineStyle(1, 0x293C53);
    line_graphics2.strokeLineShape(line2);
    const share_text = this.add.sprite(0, 150, 'shareText');
    share_text.setScale(0.27)
    const f_icon = this.add.sprite(-120, 200, 'f');
    f_icon.setDisplaySize(50, 50);
    const t_icon = this.add.sprite(-40, 200, 't');
    t_icon.setDisplaySize(50, 50);
    const m_icon = this.add.sprite(40, 200, 'm');
    m_icon.setDisplaySize(50, 50);
    const l_icon = this.add.sprite(120, 200, 'l');
    l_icon.setDisplaySize(50, 50);
    const or_text = this.add.sprite(0, 250, 'or');
    or_text.setScale(0.27);
    const refer_text = this.add.sprite(0, 280, 'refer');
    refer_text.setScale(0.27);
    const link_text = this.add.text(0, 320, `Refer a friend now`, {
        font: '20px DM Sans'
    });
    link_text.setStyle({
        color: '#00A0FF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '20px',
        fontFamily: 'DM Sans',
        bold: 'True',
        lineHeight: '150%',
        letterSpacing: '-0.8px',
        align: 'right',
        textTransform: 'uppercase',
        fontStyle: 'normal',
    });
    link_text.setOrigin(0.5, 0.5);
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
    this.modal.add(line_graphics2);
    this.modal.add(share_text);
    this.modal.add(f_icon);
    this.modal.add(t_icon);
    this.modal.add(m_icon);
    this.modal.add(l_icon);
    this.modal.add(or_text);
    this.modal.add(refer_text);
    this.modal.add(link_text);
    this.modal.setScale(0.3);
    this.modal.visible = false;

    let particleConfig = {
        x: width / 2,
        y: 300,
        key: 'particleKey', // key to use when creating the particle emitter
        frame: { frames: [0, 1, 2, 3], cycle: true }, // frames to use for the particles
        lifespan: 2000, // lifespan of the particles in milliseconds
        speed: { min: 0, max: 800 },
        angle: { min: 0, max: 360 },
        scale: { start: 0.2, end: 0.3 },
        gravityY: 1000, // gravity applied to the particles
        // quantity: 10, // number of particles emitted per second
        // frequency: 100, // time between particle emissions in milliseconds
        // alpha: { start: 1, end: 1 }, // alpha of the particles over their lifespan
        blendMode: 'NORMAL', // blending mode of the particles
        tint: 0xffffff // tint color of the particles
    };

    this.anims.create({
        key: "shine",
        frameRate: 200,
        frames: this.anims.generateFrameNumbers("shiningStar", { start: 0, end: 9 }),
        repeat: -1
    });

    this.anims.create({
        key: "explode",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("shiningStar", { start: 0, end: 2 }),
        repeat: 2
    });

    console.log(Phaser.VERSION);
    // Create a particle emitter manager
    const particleManager = this.add.particles('particles');
    emitter = this.add.particles('particles').createEmitter(particleConfig);
    emitter.stop();

    music = this.sound.add('buttonsound');
    pop = this.sound.add('pop');
    backsound = this.sound.add('backsound');
    startsound = this.sound.add('startsound');
    backsound.autoPlay = true;
    backsound.play({ loop: true });
}
let showValue;
let board;
function spinwheel() {
    // Disable the spin button
    this.letter.disableInteractive();
    this.scaleTrigger = true;
    this.rotation.stop();
    music.play();
    let rounds = Phaser.Math.Between(3, 5);
    let rand = Math.random();
    let sum = 0.0;
    let index = 0;
    for (let i = 0; i < 9; i++) {
        sum += arr_cong[i].percent;
        if (sum > rand) {
            index = i;
            break;
        }
    }
    var degree = index * 40;
    total = rounds * 360 + degree;
    console.log(rand, index, total)
    tween = this.tweens.add({
        targets: this.wheel_container,
        angle: -total - 20,
        ease: "Cubic.easeInOut",
        duration: 6000,
        callbackScope: this,
        onComplete: function () {
            startsound.play();
            this.cong_text.setText(arr_cong[index].text);
            showValue = this.add.sprite(0, -20, `${arr_cong[index].icon}`);
            board = this.add.sprite(0, -170, `${arr_cong[index].board}`);
            board.setDisplaySize(400, 220);
            // board.setScale(0.25);
            this.modal.add(showValue);
            this.modal.add(board);
            console.log(arr[index], index);
            counter = counter + arr[index];
            // music.stop();
            // Enable the spin button
            this.letter.setInteractive();
            this.tweens.add({
                delay: 500,
                targets: this.spinwheelmodal,
                scaleX: 0,
                scaleY: 0,
                ease: 'Back',
                duration: 200,
                onComplete: () => {
                    pop.play();
                    this.spinwheelmodal.setVisible(false);
                    this.modal.visible = true;
                    emitter.explode(100);
                    this.tweens.add({
                        targets: this.modal,
                        scaleX: 1,
                        scaleY: 1,
                        ease: 'Back',
                        duration: 200,
                        onComplete: () => {
                            this.letter.angle = 0;
                            this.rotation.play();
                        }
                    });
                },
            });
            this.modalBackground.setVisible(true);
            this.scaleTrigger = false;
        }
    });
}

function update() {
    console.log("Inside update");
    //let s = Math.random();
    emitter.forEachAlive(function (particle) {
        particle.rotation += 0.6;
        particle.alpha -= 0.01;
    }, this);
}
function hideSuccessModal() {
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
function showSpinwheelModal() {
    startsound.play();
    this.spinwheelmodal.setVisible(true);
    // Enable the spin button
    this.letter.setInteractive();
    // this.wheel_container.angle=0;
    this.modalBackground.setVisible(true);
    this.tweens.add({
        targets: this.spinwheelmodal,
        scaleX: 1,
        scaleY: 1,
        ease: 'Back',
        duration: 200,
    });
}

function hideSpinWheelModal() {
    this.tweens.add({
        targets: this.spinwheelmodal,
        scaleX: 0.8,
        scaleY: 0.8,
        ease: 'Back',
        duration: 100,
        onComplete: () => {
            this.spinwheelmodal.setVisible(false);
            this.modalBackground.setVisible(false);
        },
    });
}