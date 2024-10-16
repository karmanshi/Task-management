import { CompletedJSXicon, DashboardIcon, ProgressJSXicon, ProjectJSXicon, TasksJSXicon, TeamsJSXicon, TodoJSXicon } from "./JSXicon";

export const data =[
    {
        name : "Dashboard",
        icon : <DashboardIcon/>,
        to: '/dashboard'
        
    },
    {
        name : "Add Tasks",
        icon : <TasksJSXicon/>,
        to:'/task'
        
    },
    // {
    //     name : "Completed",
    //     icon : <CompletedJSXicon/>,
    //     to :''
        
    // },
    {
        name : "In Progress",
        icon : <ProgressJSXicon/>,
        to : '/progress'
        
    },
    // {
    //     name : "To-Do",
    //     icon: <TodoJSXicon/>,
    //     to : ''
        
        
    // },
    // {
    //     name : "Teams",
    //     icon : <TeamsJSXicon/>,
    //     to : ''
        
    // },
    {
        name: "Projects",
        icon : <ProjectJSXicon/>,
        to : '/project'
    },


]