import { createContext } from 'react'

// For better auto-completion
export const projects = createContext({
    projectSelectedId: undefined,
    projects: [],
    tasks: []
})

export default function ProjectProvider()
{
    
}