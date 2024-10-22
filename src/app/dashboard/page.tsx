import { PageHeader } from "@/components/page-header";
import { assertAuthenticated } from "@/lib/session";
import { cn } from "@/lib/utils";
import { getUserDisplayNameUseCase } from "@/use-cases/users";

export default async function DashboardPage() {
  const user = await assertAuthenticated();
  const name = await getUserDisplayNameUseCase(user.id!);
  return (
    <>
      <PageHeader>
        <h1 className={cn()}>Hello, {name}</h1>
      </PageHeader>

      <div className={cn("container mx-auto min-h-screen space-y-8 py-12")}>
        <div className="flex items-center justify-between">
          <h2 className={"text-2xl"}>Manage Your Organizations</h2>
        </div>
      </div>
    </>
  );
}
