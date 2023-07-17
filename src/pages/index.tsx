import ChildComponent from "@/components/childcomponent/childcomponent";
import ConditionalRendering from "@/components/conditionalrendering/conditionalrendering";
import Counter from "@/components/counter/counter";
import CountReducer from "@/components/countreducer/countreducer";
import TaskTracker from "@/components/tasktracker/tasktracker";
import { useState } from "react";

export default function Home(){
  const [visable, setVisable] = useState<boolean>(true);
  return(
    <>
      <TaskTracker/>
      <br/><br/>
      <ConditionalRendering/>
      <br/> <br/>
      { visable && <Counter/>}
      <button onClick={()=>{setVisable(!visable)}}> Mount / dis~ Timer </button>
      <br/><br/>
      <CountReducer/>
      <br/><br/>
    </>
  )
}