import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, ReactElement, useMemo, useState } from "react";
import { ColumnDef, PaginationState, Updater } from "@tanstack/react-table";
import { ChangeEventHandler } from "react";
import { Icon } from "@iconify/react";
import { Pagination } from "@/components/atoms/pagination";

export type TDataTable<T extends Record<string, unknown>> = {
  data: T[];
  meta?: {
    total: number;
    perPage: number;
    page: number;
    prev: boolean;
    next: boolean;
  };
  columns: ColumnDef<T>[];
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
  setPagination?: (updater: Updater<PaginationState>) => void;
};

export const DataTable = <T extends Record<string, unknown>>(
  props: TDataTable<T>,
): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const memoizeColumns = useMemo(() => props.columns, [props.columns]);
  const memoizeData = useMemo(() => props.data, [props.data]);

  const table = useReactTable({
    data: memoizeData,
    columns: memoizeColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: () => {},
    manualSorting: false,
    manualPagination: true,
  });

  return (
    <Fragment>
      <input
        className="w-fit my-2 p-2 border-gray-100 border text-gray-400 text-sm focus:outline-none focus:ring-0 focus-visible:ring-0 bg-white placeholder-gray-400 rounded-lg"
        placeholder="Search"
        type="search"
      />
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: `${header.getSize()}px` }}
                    className="p-4 bg-green-500 text-white"
                  >
                    <div
                      {...{
                        className: "flex items-center gap-x-1",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <p className="block font-sans text-sm antialiased font-semibold leading-none">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </p>
                      )}
                      {{
                        asc: <Icon className="text-white" icon="lucide:sort-asc" />,
                        desc: <Icon className="text-white" icon="lucide:sort-desc" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4 border-b border-gray-100">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </Fragment>
  );
};
