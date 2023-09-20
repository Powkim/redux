import {createStore} from "redux"
const add=document.getElementById("add");
const minus=document.getElementById("minus");
const number=document.querySelector("span");
//reducer? store의 값을 변경할때 쓸 함수
//action ? 리듀서의 두번째 매개변수
const countModifier= (count=0,action)=>{
 switch(action.type){
  case ADD:
    return count +1;
    case MINUS:
    return count-1;
    default :
    return count;
 }
}
const countStore= createStore(countModifier);
const ADD = "add";
const MINUS = "minus";
const onChange=()=>{
  number.innerText=countStore.getState();
}
//initstate
countStore.subscribe(onChange);
//countmodifier랑 소통할려면 dispatch로 타입 날려줘야함

const handleAdd=()=>{
  countStore.dispatch({type:ADD})
};
const handleMinus=()=>{
  countStore.dispatch({type:MINUS})
};
//dispatch -> countmodifier 두번쨰 인자로 들어감.
 add.addEventListener("click",handleAdd);
 minus.addEventListener("click",handleMinus);
