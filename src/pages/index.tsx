import ConditionalRendering from "@/components/conditionalrendering/conditionalrendering";
import Counter from "@/components/counter/counter";
import TaskTracker from "@/components/tasktracker/tasktracker";
import { useState } from "react";

export default function Home(){
  const [visable, setVisable] = useState<boolean>(true);
  return(
    <>
      <TaskTracker/>
      <ConditionalRendering/>
      { visable && <Counter/>}
      <button onClick={()=>{setVisable(!visable)}}> Mount / dis~ Timer </button>
    </>
  )
}