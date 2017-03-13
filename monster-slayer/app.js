new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack: function() {
            this.playerAttacks(3, 10)
        },
        specialAttack: function() {
            this.playerAttacks(10, 20)
        },
        heal: function() {
            var heal = 10
            if (this.playerHealth > 90) {
                heal = 100 - this.playerHealth
            }
            this.playerHealth += heal
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + heal
            })
            this.monsterAttacks()
        },
        giveUp: function() {
            this.gameIsRunning = false
        },
        playerAttacks: function(min, max) {
            var damage = this.calculateDamage(min, max)

            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            })
            if (this.checkWin()) return
            this.monsterAttacks()
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 12)

            this.playerHealth -= damage
            this.turns.unshift({
                isMonster: true,
                text: 'Monster hits player for ' + damage
            })
            this.checkWin()
        },
        calculateDamage: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        checkWin: function() {
            if (this.monsterHealth <= 0 && this.playerHealth <= 0) {
                if(confirm('It\'s a draw! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('You lose! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if (this.monsterHealth <= 0) {
                if (confirm('You win! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            }
            return false
        }
    }
})
