import ConditionalRendering from "@/components/conditionalrendering/conditionalrendering";
import TaskTracker from "@/components/tasktracker/tasktracker";

export default function Home(){
  return(
    <>
      <TaskTracker/>
      <ConditionalRendering/>
    </>
  )
}