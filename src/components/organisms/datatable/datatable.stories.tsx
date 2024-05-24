import type { Meta, StoryObj } from "@storybook/react";

import { DataTable } from "./datatable";
import { Icon } from "@iconify/react/dist/iconify.js";

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  tags: ["autodocs"],
  args: {
    columns: [
      {
        accessorKey: "action",
        header: "Action",
        enableSorting: false,
        size: 20,
        maxSize: 20,
        cell: () => (
          <div className="flex gap-x-3">
            <Icon className="text-green-700" icon="mdi:eye" />
            <Icon className="text-green-700" icon="mdi:pencil" />
            <Icon className="text-red-700" icon="mdi:trash" />
          </div>
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 100,
      },
      {
        accessorKey: "job",
        header: "Job",
        size: 100,
      },
      {
        accessorKey: "salary",
        header: "Salary",
        size: 50,
      },
      {
        accessorKey: "age",
        header: "Age",
        size: 50,
      },
    ],
    data: [
      {
        name: "John",
        age: 30,
        job: "Software Engineer",
        salary: 50000,
      },
      {
        name: "Jane",
        age: 25,
        job: "Designer",
        salary: 40000,
      },
      {
        name: "Bob",
        age: 40,
        job: "Data Scientist",
        salary: 60000,
      },
    ],
  },
};

export default meta;

export const Primary: Story = {};

type Story = StoryObj<typeof DataTable>;
