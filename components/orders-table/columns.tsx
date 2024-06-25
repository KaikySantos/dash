"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { format } from "date-fns"
import { Button } from "../ui/button"
import { ColumnHeaderSortable } from "./column-header-sortable"

export interface Product {
  nome: string
  valor: number
}

export interface Client {
  nome: string
  email: string
  cpf: string
}

export interface Order {
  id: number
  data: string
  valorTotal: number
  produtos: Product[]
  cliente: Client
  status: string
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "cliente",
    header: ({ column }) => <ColumnHeaderSortable column={column} title="Cliente" />,
    accessorFn: (row) => row.cliente.nome,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <p className="">{row.original.cliente.nome}</p>
          <p className="text-muted-foreground">{row.original.cliente.email}</p>
          <p className="text-muted-foreground">{row.original.cliente.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}</p>
        </div>
      )
    },
  },
  {
    accessorKey: "produtos",
    header: "Produtos",
    cell: ({ row }) => {
      return (
        <div className="flex gap-8">
          {row.original.produtos.map(product => (
            <div key={row.original.id + product.nome}>
              <p>{product.nome}</p>
              <p className="text-muted-foreground">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.valor)}</p>
            </div>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <ColumnHeaderSortable column={column} title="Status" />,
  },
  {
    accessorKey: "data",
    header: ({ column }) => <ColumnHeaderSortable column={column} title="Data" />,
    cell: ({ row }) => {
      return (
        <span>
          {format(new Date(row.original.data), "dd/MM/yyyy")}
        </span>
      )
    }
  },
  {
    accessorKey: "valorTotal",
    header: ({ column }) => (
      <div className="text-right">
        <ColumnHeaderSortable column={column} title="Valor Total" />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <p className="text-md font-medium text-right">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.original.valorTotal)}</p>
      )
    }
  }
]
