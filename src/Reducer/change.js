const instate= 1;


const changeNum =(state =instate,action)=>{

switch(action.type){
    case"INCRIMENT":
    return state +1;

    case"DECRIMENT":
    return state -1 ;

    default: return state
}

}
export default changeNum;