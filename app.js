var numbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28]
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}



var movie ={
    title: 'Bar Monkeys',
    genre: 'horror',
    premiereDate: '17.11.2024',
    duration: '2:34',
    mainActors: 'JON ABRAHAMS, SILVERIO AVELLINO',
    ticketPrice: '800',
    measurements: '3D',
    fantastic : undefined,
}
console.log(movie)



var num = Number(prompt('enter number before 15'))
var convertNum = 0
switch (num) {
    case '1' :
        convertNum = 'I'
        break
    case '2' :
        convertNum = 'II'
        break
    case '3' :
        convertNum = 'III'
        break
    case '4' :
        convertNum = 'IV'
        break
    case '5' :
        convertNum = 'V'
        break
    case '6' :
        convertNum = 'VI'
        break
    case '7' :
        convertNum = 'VII'
        break
    case '8' :
        convertNum = 'VIII'
        break
    case '9' :
        convertNum = 'IX'
        break
    case '10' :
        convertNum = 'X'
        break
    case '11' :
        convertNum = 'XI'
        break
    case '12' :
        convertNum = 'XII'
        break
    case '13' :
        convertNum = 'XIII'
        break
    case '14' :
        convertNum = 'XIV'
        break
    case '15' :
        convertNum = 'IX'
        break
    default:
        console.warn('INVALID NUMBER' )

}
console.log(convertNum + '' + num);