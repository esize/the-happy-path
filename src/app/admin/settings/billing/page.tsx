import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function BillingSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Billing Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You are currently on the Pro plan</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Upgrade Plan</Button>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Credit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
        </RadioGroup>
      </div>
      <Button>Update Billing Information</Button>
    </div>
  );
}
