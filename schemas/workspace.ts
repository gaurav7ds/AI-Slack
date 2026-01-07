import {z} from 'zod'
export const workspaceSchema = z.object({
    name: z.string().min(1,'Workspace name is required').max(50,'Workspace name must be less than 50 characters'),
})