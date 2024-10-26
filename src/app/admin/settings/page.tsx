import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function GeneralSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">General Settings</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="app-name">Application Name</Label>
          <Input id="app-name" placeholder="My SaaS App" />
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable Notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
      </div>
      <Button>Save Changes</Button>
    </div>
  );
}
