function importAll(r) {
  let images = {}
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item) })
  return images
}

const images = importAll(require.context('./deck', false, /\.(png|jpe?g|svg)$/))

const backCards = [
  {card:"backBlue1", src: images['cardBack_blue1.png'].default},
  {card:"backBlue2", src: images['cardBack_blue2.png'].default},
  {card:"backBlue3", src: images['cardBack_blue3.png'].default},
  {card:"backBlue4", src: images['cardBack_blue4.png'].default},
  {card:"backBlue5", src: images['cardBack_blue5.png'].default},

  {card:"backGreen1", src: images['cardBack_green1.png'].default},
  {card:"backGreen2", src: images['cardBack_green2.png'].default},
  {card:"backGreen3", src: images['cardBack_green3.png'].default},
  {card:"backGreen4", src: images['cardBack_green4.png'].default},
  {card:"backGreen5", src: images['cardBack_green5.png'].default},

  {card:"backRed1", src: images['cardBack_red1.png'].default},
  {card:"backRed2", src: images['cardBack_red2.png'].default},
  {card:"backRed3", src: images['cardBack_red3.png'].default},
  {card:"backRed4", src: images['cardBack_red4.png'].default},
  {card:"backRed5", src: images['cardBack_red5.png'].default},

  {card:"Joker", src: images['cardJoker.png'].default},
]
const deck = [
  {card: "2", type: "Clubs", value: 2, src: images['cardClubs2.png'].default},
  {card: "3", type: "Clubs", value: 3, src: images['cardClubs3.png'].default},
  {card: "4", type: "Clubs", value: 4, src: images['cardClubs4.png'].default},
  {card: "5", type: "Clubs", value: 5, src: images['cardClubs5.png'].default},
  {card: "6", type: "Clubs", value: 6, src: images['cardClubs6.png'].default},
  {card: "7", type: "Clubs", value: 7, src: images['cardClubs7.png'].default},
  {card: "8", type: "Clubs", value: 8, src: images['cardClubs8.png'].default},
  {card: "9", type: "Clubs", value: 9, src: images['cardClubs9.png'].default},
  {card: "10", type: "Clubs", value: 10, src: images['cardClubs10.png'].default},
  {card: "Jack", type: "Clubs", value: 11, src: images['cardClubsJ.png'].default},
  {card: "Queen", type: "Clubs", value: 12, src: images['cardClubsQ.png'].default},
  {card: "King", type: "Clubs", value: 13, src: images['cardClubsK.png'].default},
  {card: "Ace", type: "Clubs", value: 14, src: images['cardClubsA.png'].default},

  {card: "2", type: "Clubs", value: 2, src: images['cardDiamonds2.png'].default},
  {card: "3", type: "Clubs", value: 3, src: images['cardDiamonds3.png'].default},
  {card: "4", type: "Clubs", value: 4, src: images['cardDiamonds4.png'].default},
  {card: "5", type: "Clubs", value: 5, src: images['cardDiamonds5.png'].default},
  {card: "6", type: "Clubs", value: 6, src: images['cardDiamonds6.png'].default},
  {card: "7", type: "Clubs", value: 7, src: images['cardDiamonds7.png'].default},
  {card: "8", type: "Clubs", value: 8, src: images['cardDiamonds8.png'].default},
  {card: "9", type: "Clubs", value: 9, src: images['cardDiamonds9.png'].default},
  {card: "10", type: "Clubs", value: 10, src: images['cardDiamonds10.png'].default},
  {card: "Jack", type: "Clubs", value: 11, src: images['cardDiamondsJ.png'].default},
  {card: "Queen", type: "Clubs", value: 12, src: images['cardDiamondsQ.png'].default},
  {card: "King", type: "Clubs", value: 13, src: images['cardDiamondsK.png'].default},
  {card: "Ace", type: "Clubs", value: 14, src: images['cardDiamondsA.png'].default},

  {card: "2", type: "Clubs", value: 2, src: images['cardHearts2.png'].default},
  {card: "3", type: "Clubs", value: 3, src: images['cardHearts3.png'].default},
  {card: "4", type: "Clubs", value: 4, src: images['cardHearts4.png'].default},
  {card: "5", type: "Clubs", value: 5, src: images['cardHearts5.png'].default},
  {card: "6", type: "Clubs", value: 6, src: images['cardHearts6.png'].default},
  {card: "7", type: "Clubs", value: 7, src: images['cardHearts7.png'].default},
  {card: "8", type: "Clubs", value: 8, src: images['cardHearts8.png'].default},
  {card: "9", type: "Clubs", value: 9, src: images['cardHearts9.png'].default},
  {card: "10", type: "Clubs", value: 10, src: images['cardHearts10.png'].default},
  {card: "Jack", type: "Clubs", value: 11, src: images['cardHeartsJ.png'].default},
  {card: "Queen", type: "Clubs", value: 12, src: images['cardHeartsQ.png'].default},
  {card: "King", type: "Clubs", value: 13, src: images['cardHeartsK.png'].default},
  {card: "Ace", type: "Clubs", value: 14, src: images['cardHeartsA.png'].default},

  {card: "2", type: "Clubs", value: 2, src: images['cardSpades2.png'].default},
  {card: "3", type: "Clubs", value: 3, src: images['cardSpades3.png'].default},
  {card: "4", type: "Clubs", value: 4, src: images['cardSpades4.png'].default},
  {card: "5", type: "Clubs", value: 5, src: images['cardSpades5.png'].default},
  {card: "6", type: "Clubs", value: 6, src: images['cardSpades6.png'].default},
  {card: "7", type: "Clubs", value: 7, src: images['cardSpades7.png'].default},
  {card: "8", type: "Clubs", value: 8, src: images['cardSpades8.png'].default},
  {card: "9", type: "Clubs", value: 9, src: images['cardSpades9.png'].default},
  {card: "10", type: "Clubs", value: 10, src: images['cardSpades10.png'].default},
  {card: "Jack", type: "Clubs", value: 11, src: images['cardSpadesJ.png'].default},
  {card: "Queen", type: "Clubs", value: 12, src: images['cardSpadesQ.png'].default},
  {card: "King", type: "Clubs", value: 13, src: images['cardSpadesK.png'].default},
  {card: "Ace", type: "Clubs", value: 14, src: images['cardSpadesA.png'].default}
]

export { deck, backCards }
