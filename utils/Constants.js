import {
    Dashboard,
    Email,
    Chat,
    Kanban,
    Contact,
    Calendar,
    Courses,
    Shop,
    Invoices,
    Settings,
    Dashboard_hover,
    Email_hover,
    Chat_hover,
    Kanban_hover,
    Contact_hover,
    Calendar_hover,
    Courses_hover,
    Shop_hover,
    Invoices_hover,
    Settings_hover,
    America,
    India

} from "../public/assets"

export const sidebar_comp=[
    {
        id:1,
        name:"Dashboard",
        url:Dashboard,
        url_hover:Dashboard_hover
    },
    {
        id:2,
        name:"Email",
        url:Email,
        url_hover:Email_hover
    },
    {
        id:3,
        name:"Chat",
        url:Chat,
        url_hover:Chat_hover
    },
    {
        id:4,
        name:"Kanban",
        url:Kanban,
        url_hover:Kanban_hover
    },
    {
        id:5,
        name:"Contact",
        url:Contact,
        url_hover:Contact_hover
    },
    {
        id:6,
        name:"Calendar",
        url:Calendar,
        url_hover:Calendar_hover
    },
    {
        id:7,
        name:"Courses",
        url:Courses,
        url_hover:Courses_hover
    },
    {
        id:8,
        name:"Shop",
        url:Shop,
        url_hover:Shop_hover
    },
    {
        id:9,
        name:"Invoices",
        url:Invoices,
        url_hover:Invoices_hover
    },
    {
        id:10,
        name:"Settings",
        url:Settings,
        url_hover:Settings_hover
    },
]

export const Language= [
    {
        id:1,
        language:"English",
        url:"/assets/icons/America.png"
    },
    {
        id:2,
        language:"Hindi",
        url:"/assets/icons/India.jpg"
    },
]

export const Main_Container=[
    {
        head:"To-Do List (24)",
       data:
       [ 
        {
            id:1,
            headText:"Important",
            Content:"Create sign up sheet for holiday student/parent conferences.",
            color:"yellow",
            hash_color:"#FFAB2D"
        },
        {
            id:2,
            headText:"Instructor Meeting",
            Content:"Plan holiday demonstration program. Create outline.",
            color:"pink",
            hash_color:"#E328AF"
        },
        {
            id:3,
            headText:"Database",
            Content:"Determine how many boards need to be ordered for testing and demo.",
            color:"green",
            hash_color:"#38E25D"
        }
       ]
    },
    {
        head:"In Progress (2)",
       data:
       [ 
        {
            id:1,
            headText:"Video",
            Content:"Create sparring tutorial video for the weekly class.",
            color:"green",
            hash_color:"#38E25D"
        },
        {
            id:2,
            headText:"BUGS FIXING",
            Content:"Payment gateway needs reauthorization.",
            color:"orange",
            hash_color:"#FF4A55"
        },
       ]
    },
    {
        head:"Done (3)",
       data:
       [ 
        {
            id:1,
            headText:"BUGS FIXING",
            Content:"Action Button needed for Google Maps visits.",
            color:"orange",
            hash_color:"#FF4A55"
        },
        {
            id:2,
            headText:"Database",
            Content:"Update new instructor photos.",
            color:"green",
            hash_color:"#38E25D"
        },
        {
            id:3,
            headText:"Instructor Meeting",
            Content:"Review/correct yellow belt techniques.",
            color:"pink",
            hash_color:"#E328AF"
        }
       ]
    },
    {
        head:"Revised",
       data:[]
    },
]