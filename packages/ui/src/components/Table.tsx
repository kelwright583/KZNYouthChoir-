import React from 'react'
import { cn } from '../utils/cn'

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="overflow-x-auto">
        <table
          ref={ref}
          className={cn('w-full border-collapse', className)}
          {...props}
        >
          {children}
        </table>
      </div>
    )
  }
)

Table.displayName = 'Table'

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('bg-neutral-50 border-b border-neutral-200', className)}
    {...props}
  />
))

TableHeader.displayName = 'TableHeader'

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('divide-y divide-neutral-200', className)} {...props} />
))

TableBody.displayName = 'TableBody'

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'hover:bg-neutral-50 transition-colors',
      className
    )}
    {...props}
  />
))

TableRow.displayName = 'TableRow'

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider',
      className
    )}
    {...props}
  />
))

TableHead.displayName = 'TableHead'

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('px-6 py-4 text-sm text-neutral-900', className)}
    {...props}
  />
))

TableCell.displayName = 'TableCell'

