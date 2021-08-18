let tilesUp = 0

let firstTurnedPic
let secondTurnedPic

gameManager = {
    startGame: function () {

        //Need to do this, otherwise if you click tiles before you start the game, those tiles will immediately show pictures after you start the game.
        let getAllPictures = document.querySelector( '.picture-tile' )
        getAllPictures.style.visibility = 'hidden'

        let getTile1 = document.getElementById( 'picture1' )
        let getTile2 = document.getElementById( 'picture2' )
        let getTile3 = document.getElementById( 'picture3' )
        let getTile4 = document.getElementById( 'picture4' )
        let getTile5 = document.getElementById( 'picture5' )
        let getTile6 = document.getElementById( 'picture6' )
        let getTile7 = document.getElementById( 'picture7' )
        let getTile8 = document.getElementById( 'picture8' )
        let getTile9 = document.getElementById( 'picture9' )
        let getTile10 = document.getElementById( 'picture10' )
        let getTile11 = document.getElementById( 'picture11' )
        let getTile12 = document.getElementById( 'picture12' )
        let getTile13 = document.getElementById( 'picture13' )
        let getTile14 = document.getElementById( 'picture14' )
        let getTile15 = document.getElementById( 'picture15' )
        let getTile16 = document.getElementById( 'picture16' )

        let numOfPicture = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8 ]

        function getRandomIndex() {
            let randomIndex = numOfPicture[Math.floor( Math.random() * numOfPicture.length )]
            gameManager.removeItemFromArray( numOfPicture, randomIndex )
            return randomIndex
        }

        getTile1.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 1">'
        getTile2.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 2">'
        getTile3.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 3">'
        getTile4.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 4">'
        getTile5.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 5">'
        getTile6.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 6">'
        getTile7.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 7">'
        getTile8.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 8">'
        getTile9.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 9">'
        getTile10.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 10">'
        getTile11.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 11">'
        getTile12.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 12">'
        getTile13.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 13">'
        getTile14.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 14">'
        getTile15.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 15">'
        getTile16.innerHTML = '<img src="Monster pics/monster' + getRandomIndex() + '.svg" alt="picture 16">'

    },
    removeItemFromArray: function ( arr, value ) {
        let index = arr.indexOf( value )
        arr.splice( index, 1 )
        return arr
    },
    turnTile: function ( i ) {
        let getPicture = document.getElementById( i )
        getPicture.style.visibility = 'visible'

        tilesUp++

        if (tilesUp === 1){
            firstTurnedPic = i
        }
        if (tilesUp === 2){
            secondTurnedPic = i
        }
        gameManager.checkForPair(firstTurnedPic, secondTurnedPic)
    },
    checkForPair: function(a, b){
        if(tilesUp === 2){
            console.log("Hi")
            console.log(a)
            console.log(b)

            let getFirstTurnedPic = document.getElementById(a)
            let getSecondTurnedPic = document.getElementById(b)

            let timerOn = true

            setTimeout(function(){

                getFirstTurnedPic.style.visibility = 'hidden'
                getSecondTurnedPic.style.visibility = 'hidden'
                timerOn = false
            }, 5000)

            if(timerOn){

            }

            tilesUp = 0
        }

    }

}