export const incement = () => {

    return {
        type: "INCRIMENT"
    }


}



export const decriment = () => {
    return {
        type: "DECRIMENT"
    }
}

export const add = (x) => {
    console.log("payload", x);
    return {
        type: "ADD",
        payload: x
    }
}