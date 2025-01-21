enum Direction {
    up= 1,
    down,
    left,
    right
}

function move(direction:Direction){
    console.log(direction);
}

move(Direction.left)



enum ResponseStatus {
    success = 200,
    error = 500,
    notFound = 404,
    forbidden = 403,
    unauthorized = 401,
    badRequest = 400
}

const state = ResponseStatus.forbidden
console.log(state)