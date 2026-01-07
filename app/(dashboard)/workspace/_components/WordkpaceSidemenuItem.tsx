
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type PageProps = {
  workspace: {
    id: number
    name: string
    avatar: string
  }
}
const bgColors = ['bg-blue-400 hover:bg-blue-500',
                  'bg-green-400 hover:bg-green-500',
                  'bg-yellow-400 hover:bg-yellow-500',
]
function WordkpaceSidemenuItem({workspace}:PageProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div 
        className={cn("w-full aspect-square rounded-md flex items-center justify-center self-center", bgColors[workspace.id%bgColors.length])}>
            <span className="font-bold">{workspace.avatar}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{workspace.name}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default WordkpaceSidemenuItem
