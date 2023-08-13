import * as Rdx from '@radix-ui/themes';
import { cn } from '../../app/utils/cn';

interface RdxTableProps {
  children: React.ReactNode
  className?: string
}

function RdxTableRoot({ children, className }: RdxTableProps) {
  return (
    <Rdx.Table.Root className={cn(
      'table w-full text-left divide-y-4 p-2',
      className
    )}>
      {children}
    </Rdx.Table.Root>
  );
}

function RdxTableBody({ children, className }: RdxTableProps) {
  return (
    <Rdx.Table.Body className={cn(
      'table-row-group',
      className
    )}>
      {children}
    </Rdx.Table.Body>
  );
}

function RdxTableHeader({ children, className }: RdxTableProps) {
  return (
    <Rdx.Table.Header className={cn(
      'table-header-group',
      className
    )}>
      {children}
    </Rdx.Table.Header>
  );
}

function RdxTableRow({ children, className }: RdxTableProps) {
  return (
    <Rdx.Table.Row className={cn(
      'table-row',
      className
    )}>
      {children}
    </Rdx.Table.Row>
  );
}

function RdxRowHeaderCell({ children, className}: RdxTableProps) {
  return (
    <Rdx.Table.RowHeaderCell className={cn(
      'table-cell',
      className
    )}>
      {children}
    </Rdx.Table.RowHeaderCell>
  );
}

function RdxTableColumnHeaderCell({ children, className }: RdxTableProps) {
  return (
    <Rdx.Table.ColumnHeaderCell className={cn(
      'table-cell',
      className
    )}>
      {children}
    </Rdx.Table.ColumnHeaderCell>
  );
}

function RdxTableCell({ children, className }: RdxTableProps) {
  return (
    <Rdx.Table.Cell className={cn(
      'table-cell',
      className
    )}>
      {children}
    </Rdx.Table.Cell>
  );
}

export const RdxTable = {
  Root: RdxTableRoot,
  Body: RdxTableBody,
  Header: RdxTableHeader,
  Row: RdxTableRow,
  RowHeaderCell: RdxRowHeaderCell,
  ColumnHeaderCell: RdxTableColumnHeaderCell,
  Cell: RdxTableCell,
};
