$("button").on("click", function() {
    start();
});



let matrix = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
let places = [];


function setInitialPlaces() {
    places = [];
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            places.push([i, k]);
        }
    }
}



function start() {
    matrix = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    setInitialPlaces();

    placeBlackSquares();
    printToHtml();
}

function randomMatrix(sayi) {
    return Math.floor(Math.random() * sayi);

}

/**once arryler yazilacak
 * sonra roundum (funtion roundum formulu ) ile kac defa secilecegini bulacak max (25)
 * 
 */

/**
 * sonra for dongusu ile bir artirarak donecek ve kac nokta secegini bulacak 
 * sonra da bu sectigi noktalari roundum olarak yerlestirecek 
 * x=row y=colum
 */
function placeBlackSquares() {
    const blackstone = randomMatrix(25);
    console.log('cemil', blackstone);
    for (let i = 0; i < blackstone; i++) {
        let x = randomMatrix(5);
        let y = randomMatrix(5);
        let coordiantes = getUnsetCoordinates();

        matrix[coordiantes[0]][coordiantes[1]] = 1;
    }
}

function getUnsetCoordinates() {
    const number = randomMatrix(places.length);
    const coordiantes = places[number];
    places.splice(number, 1);
    // console.log('cemil', place, coordiantes);
    return coordiantes;
}



function printToHtml() {
    $("#container").html("");
    for (let i = 0; i < 5; i++) {
        let satir = $("<div class='satir'>");

        for (let k = 0; k < 5; k++) {
            let cell = $("<div class='cell'>");
            if (matrix[i][k] == 1) {
                cell.css("background", "black");
            }
            satir.append(cell);

        }
        $("#container").append(satir);
    }
}