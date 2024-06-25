import { Column } from "@tanstack/react-table";

import { Button } from "../ui/button";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

interface ColumnHeaderSortableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function ColumnHeaderSortable<TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderSortableProps<TData, TValue>) {
  function changeSorting() {
    if (column.getIsSorted() === "desc") {
      column.clearSorting()
    } else {
      column.toggleSorting(column.getIsSorted() === "asc")
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={changeSorting}
    >
      {title}
      
      {column.getIsSorted() === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : column.getIsSorted() === "desc" ? (
        <ArrowDown className="ml-2 h-4 w-4" />
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4" />
      )}
    </Button>
  )
}