import { Card, CardContent } from "@/components/ui/card";
import { assertAuthenticated } from "@/lib/session";

import { Nav } from "./nav";

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await assertAuthenticated();

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Settings</h1>
      <div className="flex flex-col gap-6 md:flex-row">
        <Card className="h-fit w-full md:sticky md:top-6 md:w-64">
          <CardContent className="p-4">
            <Nav />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="max-h-[calc(100vh-8rem)] overflow-y-auto p-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
