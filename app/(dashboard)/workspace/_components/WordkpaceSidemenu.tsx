import { Separator } from "@/components/ui/separator"
import CreateWorkspace from "./CreateWorkspace"
import WordkpaceSidemenuItem from "./WordkpaceSidemenuItem"
import { UserNav } from "./UserNav"

const dummyWorkspace = [
  {
    id: 1,
    name: 'Polyuse',
    avatar:'P'
  },
  {
    id: 2,
    name: 'Polyuse Dev',
    avatar:'PD'
  },
  {
    id: 3,
    name: 'Polyuse Material',
    avatar:'PM'
  },
]



function WorkspaceSidemenu() {
  return (
    <div className='w-16 h-full gap-3 flex flex-col items-center px-2 py-5 bg-secondary border-r border-border'>
      {
        dummyWorkspace.map(workspace=>(
          <WordkpaceSidemenuItem key={workspace.id} workspace={workspace} />
        ))
      }
      <Separator className="mt-2"/>
      <CreateWorkspace />
      <div className="mt-auto w-full">
        <UserNav/>
      </div>
      
    </div>
  )
}

export default WorkspaceSidemenu
