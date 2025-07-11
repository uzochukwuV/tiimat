"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { UpdateModal } from "../components/UpdateModal"
import { editAdminCertificate, editAdminCourse, editAdminCurriculum, editAdminFaculty, editAdminMessage, editTrimesterFaculty, updateAppData } from "@/services/actions"
import { delCurriculum, deleteCourse, deleteFaculty, delMessage, delSemester } from "@/services/read"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

import { AppDataType } from "@/services/types"

// Example columns for AppDataType
export const appDataColumns: ColumnDef<AppDataType>[] = [
  {
    id: "details",
header: "Details",
cell: ({ row }) => {
  const data = row.original;
  return (
    <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 shadow-lg p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <span className="material-icons bg-blue-100 text-blue-600 rounded-full w-[150px] py-3 px-4">location_on</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Address</div>
            <div className="font-medium text-gray-800">{data.address}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-icons bg-green-100 text-green-600 rounded-full w-[150px] py-3 px-4">call</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Phone</div>
            <div className="font-medium text-gray-800">{data.phone}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-icons bg-red-100 text-red-600 rounded-full w-[150px] py-3 px-4">email</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Email</div>
            <div className="font-medium text-gray-800">{data.email}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-icons bg-blue-100 text-blue-700 rounded-full w-[150px] py-3 px-4">facebook</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Facebook</div>
            <div className="font-medium text-gray-800 truncate">{data.facebook}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-icons bg-blue-50 text-blue-400 rounded-full w-[150px] py-3 px-4">twitter</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Twitter</div>
            <div className="font-medium text-gray-800 truncate">{data.twitter}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-icons bg-pink-100 text-pink-500 rounded-full w-[150px] py-3 px-4">instagram</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Instagram</div>
            <div className="font-medium text-gray-800 truncate">{data.instagram}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-icons bg-blue-200 text-blue-800 rounded-full w-[150px] py-3 px-4">linkedin</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">LinkedIn</div>
            <div className="font-medium text-gray-800 truncate">{data.linkedin}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-icons bg-yellow-100 text-yellow-600 rounded-full w-[150px] py-3 px-4">emoji_objects</span>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Motto</div>
            <div className="font-medium text-gray-800 italic">{data.motto}</div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-icons text-gray-400">schedule</span>
          <span className="text-xs text-gray-500 font-semibold">Office Hours</span>
        </div>
        <div className="font-medium text-gray-800 mb-2">{data.officeHours}</div>
        <div className="text-xs text-gray-500 font-semibold mb-1">About</div>
        <div className="text-gray-700 italic">{data.about.slice(0, 120)}...</div>
      </div>
    </div>
  );
},
 
},
  {
    id: "actions",
    cell: ({ row }) => {
      let payment = row.original
      
      return (
        <div className="flex gap-2">
        
        <UpdateModal data={payment} action={updateAppData} />
        </div>
      )
    },
  },
]

// import { toast } from "sonner"

 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Faculty = {
  id: string
  name: string
  description: string
  image: string
}

export const facultyColums: ColumnDef<Faculty>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "description",
    header: "description",
    cell:({row})=> {
      const value = row.getValue<string>("description").slice(0, 100);

      return <div>{value}</div>
    }
  },
  {
    accessorKey: "image",
    header: "image",
    cell:({row})=> {
      const value = row.getValue<string>("image").slice(0, 30);

      return <div>{value}...</div>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      
      const navigate = useNavigate()
      return (
        <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild >
            <Button  variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-200">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent align="end" className=" bg-white text-black">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
             <DropdownMenuItem
             onClick={() => {
             
                navigate(`dashboard/semester/${payment.id}`)
              
             }}>  Go To Semester </DropdownMenuItem>
            <DropdownMenuItem
             onClick={() => {
              let confirmDelete = confirm(`you are about to delete ${payment.name}`)
              if(confirmDelete){
                deleteFaculty(payment.id)
                toast("Deleted", {
                  className:"bg-blue-50"
                })
              }
              
             }}
            >Delete</DropdownMenuItem>
            
           
          </DropdownMenuContent>
        </DropdownMenu>
        <UpdateModal data={payment} action={editAdminFaculty} />
        </div>
      )
    },
  },
]




export type Course = {
  id: string
  name: string
  description: string,
  image:string
  price:string,
  duration:string,
  certification:string,
}

export const courseColumns: ColumnDef<Course>[]=[
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          duration
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "certification",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          certification
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "description",
    header: "description",
    cell:({row})=> {
      const value = row.getValue<string>("description").slice(0, 100);

      return <div className="" >{value}</div>
    }
  },
  {
    accessorKey: "price",
    header: "price",
    cell:({row})=> {
      const value = row.getValue<string>("price").slice(0, 100);

      return <div className="" >{value}</div>
    }
  },
  {
    accessorKey: "image",
    header: "image",
    cell:({row})=> {
      const value = row.getValue<string>("image").slice(0, 30);

      return <div className=" w-1/3">{value}...</div>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      let payment = row.original
      if(!payment.duration){
        payment.duration = "null"
      }
      if(!payment.certification){
        payment.certification = "null"
      }
        const navigate = useNavigate()
      return (
        <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild >
            <Button  variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-200">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" bg-white text-black">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
             <DropdownMenuItem
             onClick={() => {
             
                navigate(`/dashboard/semester/${payment.id}`)
              
             }}>  Go To Semester </DropdownMenuItem>
            <DropdownMenuItem
             onClick={() => {
              let confirmDelete = confirm(`you are about to delete ${payment.name}`)
              if(confirmDelete){
                deleteCourse(payment.id)
                toast("Deleted", {
                  className:"bg-blue-50"
                })
              }
              
             }}
            >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpdateModal data={payment} action={editAdminCourse} />
        </div>
      )
    },
  },
]


export type Trimester = {
  id: string
  name: string
  description: string,
  certificates: string,
  duration: string,
  index: string
}



export const trimesterColumns: ColumnDef<Trimester>[]=[
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "index",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Index
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
   {
    accessorKey: "duration",	
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Duration
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "certificates",  
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Certificates
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
   
  {
    accessorKey: "description",
    header: "description",
    cell:({row})=> {
      const value = row.getValue<string>("description") || "error";

      return <div className="" >{value}</div>
    }
  },
  
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      const navigate = useNavigate()
      return (
        <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild >
            <Button  variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-200">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" bg-white text-black">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
             onClick={() => {
             
                navigate(`/dashboard/curriculum/${payment.id}`)
              
             }}>  Go To Currculums </DropdownMenuItem>
            <DropdownMenuItem
             onClick={() => {
              let confirmDelete = confirm(`you are about to delete ${payment.name}`)
              if(confirmDelete){
                delSemester(payment.id)
                toast("Deleted", {
                  className:"bg-blue-50"
                })
              }
              
             }}
            >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpdateModal data={payment} action={editTrimesterFaculty} />
        </div>
      )
    },
  },
]



export type Curriculum = {
  id: string
  title: string
  topics: string,
  course: string,
}




export const curriculumColumns: ColumnDef<Curriculum>[]=[
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
   {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  
  {
    accessorKey: "semesterId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Course
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  
  {
    accessorKey: "topics",
    header: "topics",
    cell:({row})=> {
      const value = row.getValue<string>("topics") || "error";

      return <div className="" >{value}</div>
    }
  },
  
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild >
            <Button  variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-200">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" bg-white text-black">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
           
            
            
            <DropdownMenuItem
             onClick={() => {
              let confirmDelete = confirm(`you are about to delete ${payment.title}`)
              if(confirmDelete){
                delCurriculum(payment.id)
                toast("Deleted", {
                  className:"bg-blue-50"
                })
              }
              
             }}
            >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpdateModal data={payment} action={editAdminCurriculum} />
        </div>
      )
    },
  },
]





export type Message = {
  id: string;
  title: string;
  email: string;
  location: string;
  phone:string;
  info:string;
  name:string
}




export const MessageColumns: ColumnDef<Message>[]=[
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
   {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  
  {
    accessorKey: "info",
    header: "info",
    cell:({row})=> {
      const value = row.getValue<string>("info") || "error";

      return <div className="" >{value}</div>
    }
  },
  
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild >
            <Button  variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-200">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" bg-white text-black">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
           
            
            
            <DropdownMenuItem
             onClick={() => {
              let confirmDelete = confirm(`you are about to delete ${payment.title}`)
              if(confirmDelete){
                delMessage(payment.id)
                toast("Deleted", {
                  className:"bg-blue-50"
                })
              }
              
             }}
            >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpdateModal data={payment} action={editAdminMessage} />
        </div>
      )
    },
  },
]




export type Certificate = {
  id: string;
  studentName: string;
  certificateId: string;
  uuid: string;
  description: string;
  url:string;
}




export const CertificateColumns: ColumnDef<Certificate>[]=[
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
 
   {
    accessorKey: "studentName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
   {
    accessorKey: "id",
    header: "id",
    cell:({row})=> {
      const value = row.getValue<string>("id") || "error";

      return <div className="w-20 h-fit overflow-scroll line-clamp-6 border-b"  style={{scrollbarColor: "tansparent", scrollbarWidth:"none"}} >
        <p>{value}</p>
      </div>
    }
  },
 
  
  {
    accessorKey: "url",
    header: "info",
    cell:({row})=> {
      const value = row.getValue<string>("url") || "error";

      return <div className="w-40 line-clamp-6" >{value}</div>
    }
  },
   {
    accessorKey: "certificateId",
    header: "certificateId",
    cell:({row})=> {
      const value = row.getValue<string>("certificateId");

      return <div className="w-20 line-clamp-6" >{value}</div>
    }
  },
   {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-base font-semibold "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
     
 
      return (
        <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild >
            <Button  variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-200">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" bg-white text-black">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
           
            
            
            <DropdownMenuItem
             onClick={() => {
              let confirmDelete = confirm(`you are about to delete ${payment.studentName}`)
              if(confirmDelete){
                delMessage(payment.id)
                toast("Deleted", {
                  className:"bg-blue-50"
                })
              }
              
             }}
            >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpdateModal data={payment} action={editAdminCertificate} />
        </div>
      )
    },
  },
]
