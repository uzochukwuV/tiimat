"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { CreateModel } from "../components/CreateModal"
import { editAdminCourse, editAdminFaculty } from "@/services/actions"
import { toast } from "sonner"

 
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Del
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Update</DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
        <CreateModel data={payment} action={editAdminFaculty} />
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
  price:string
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
              onClick={() => alert(payment.description)}
            >
              Create
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <CreateModel data={payment} action={editAdminCourse} />
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
      const value = row.getValue<string>("description").slice(0, 100);

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
              onClick={() => alert(payment.description)}
            >
              Create
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <CreateModel data={payment} action={editAdminCourse} />
        </div>
      )
    },
  },
]
