import Link from "next/link";

import { ArrowLeft, Edit, Key } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getUserDetailsUseCase } from "@/use-cases/users";

export default async function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const p = await params;
  const userId = parseInt(await p.id);
  const user = await getUserDetailsUseCase(userId);
  return (
    <div className="container mx-auto py-10">
      <Link
        href="/admin/users"
        className="mb-6 flex items-center text-sm text-muted-foreground hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Users
      </Link>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>View and manage user information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium">Name</Label>
              <p className="text-lg">{user.name}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">Username</Label>
              <p className="text-lg">{user.username}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">ID</Label>
              <p className="text-lg">{user.id}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">Role</Label>
              <p className="text-lg">{user.role}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href={`/admin/users/${user.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit User
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/admin/users/${user.id}/change-password`}>
              <Key className="mr-2 h-4 w-4" />
              Change Password
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
