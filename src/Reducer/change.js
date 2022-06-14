const instate= 0;


const changeNum =(state =instate,action)=>{
console.log(action );
switch(action.type){
    case"INCRIMENT":
    return state+1;

    case"DECRIMENT":
    return state-1;

    case"ADD":
    return state+action.payload

    default: return state
}

}
export default changeNum;