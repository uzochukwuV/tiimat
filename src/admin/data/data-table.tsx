"use client";

import {
  SortingState,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
  HeaderGroup,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { CreateModal } from "../components/CreatModal";
import {  LucideDelete } from "lucide-react";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  create,
  deleteItems,
  optionInput,
  id
}: DataTableProps<TData, TValue> & {create?: any, deleteItems?:any, optionInput?:any, id?:any}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  return (
    <div className="px-6">
      <div className="rounded-md border">
        <Table color="#fff" className=" bg-white">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) =>{
            const dataItem = listToMap(headerGroup)
            const seleted = table.getSelectedRowModel().rows.map((data)=>data.original) || null

            
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  
                  
                  return (
                    <TableHead
                      key={header.id}
                      className=" text-base font-semibold py-2 text-[#0c0c0c]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                );
                })}
                <TableHead role="none" className=" flex absolute right-0 top-2 gap-4">
                  <CreateModal key={table.getHeaderGroups()[0].id} data={dataItem} action={create} optionInput={optionInput} id={id} />
                   {
                    Object.keys(rowSelection).length >0 &&  <Button className=" bg-red-700 hover:bg-red-900 text-white" onClick={(e)=>{
                      e.preventDefault()
                      deleteItems(seleted)|| null
                    }}> <LucideDelete /> </Button>
                   }
                </TableHead>
              </TableRow>
)})}
          </TableHeader>
          <TableBody color="#fff" className=" bg-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(`bg-white py-2`)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className=" text-base">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <Button
          variant="outline"
          size="sm"
          className=" text-black"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          className=" text-black"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

const listToMap = (headerGroup: HeaderGroup<any>) => {
  let itemList = headerGroup.headers.map((data) => data.id);
  let excludedList = [];
  for (var i of itemList) {
    if (i === "select" || i === "actions") {
      continue;
    } else {
      excludedList.push(i);
    }
  }
  
  let listMap = {};
  for (var item of excludedList) {
    listMap = {...listMap, [item]:""}
  }

  return listMap;
};
