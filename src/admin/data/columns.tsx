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
import { editAdminCourse, editAdminCurriculum, editAdminFaculty } from "@/services/actions"
import { delCurriculum, deleteCourse, deleteFaculty, delSemester } from "@/services/read"
import { toast } from "sonner"
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
        <UpdateModal data={payment} action={editAdminCourse} />
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
