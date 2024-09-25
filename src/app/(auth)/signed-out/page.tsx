"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { pageTitleStyles } from "@/util/styles";

export default function SignedOutPage() {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="mx-auto max-w-[400px] space-y-6 py-24">
      <h1 className={pageTitleStyles}>Successfully Signed Out</h1>
      <p className="text-xl">
        You have been successfully signed out. You can now sign in to your
        account.
      </p>

      <Button asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </div>
  );
}
