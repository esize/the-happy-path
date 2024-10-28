// import { Metadata } from "next";
// import Link from "next/link";
// import { PlusIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// export const metadata: Metadata = {
//   title: "Users",
//   description: "Manage users in your application",
// };
// export default function UsersPage() {
//   // const users = await listAllUsersUseCase();
//   return (
//     <div className="container mx-auto w-full py-10">
//       <div className="mb-6 flex w-full items-center justify-between">
//         <h1 className="text-3xl font-bold">Users</h1>
//         <Link href="/admin/users/new">
//           <Button>
//             <PlusIcon className="mr-2 h-4 w-4" /> New User
//           </Button>
//         </Link>
//       </div>
//       {/* <UsersTable data={users} /> */}
//     </div>
//   );
// }
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { listAllUsersUseCase } from "@/use-cases/users";

import { UsersTable } from "./users-table";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage users in your application",
};

export default async function UsersPage() {
  const data = await listAllUsersUseCase();
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users</h1>
        <Link href="/admin/users/new">
          <Button>New User</Button>
        </Link>
      </div>
      <UsersTable data={data} />
    </div>
  );
}
