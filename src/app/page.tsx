"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  CodeIcon,
  DatabaseIcon,
  LockIcon,
  PlugZapIcon,
  ShieldCheckIcon,
  SunIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-gray-900 text-gray-100">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div
          className={`absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px] ${!prefersReducedMotion ? "animate-pulse-slow" : ""}`}
        ></div>
        <div
          className={`absolute left-20 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 opacity-20 blur-[100px] ${!prefersReducedMotion ? "animate-pulse-slow" : ""}`}
        ></div>
      </div>

      <main className="relative z-10 flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div
                className={`flex flex-1 flex-col items-center space-y-4 lg:items-start ${!prefersReducedMotion ? "animate-fade-in-up-slow" : ""}`}
              >
                <Badge className="bg-fuchsia-600 text-sm text-white hover:bg-fuchsia-700 md:text-base">
                  Next.js 15 Starter Kit
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  The Happy Path for Modern Web Development
                </h1>
                <p className="max-w-[600px] text-lg text-gray-300 md:text-xl lg:max-w-[700px]">
                  Start your project with a complete Next.js solution. Built
                  with the latest technologies and best practices.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-fuchsia-600 font-bold text-white transition-colors duration-300 hover:bg-fuchsia-700"
                  >
                    <Link href="#get-started">Get Started</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-600 bg-transparent font-bold text-white transition-colors duration-300 hover:bg-gray-800"
                  >
                    <Link href="https://github.com/esize/the-happy-path">
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
              <div
                className={`relative hidden w-full max-w-[400px] lg:block lg:w-1/2 ${!prefersReducedMotion ? "animate-float-super-slow" : ""}`}
              >
                <div className="animate-pulse-slow absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 opacity-30 blur-xl"></div>
                <Image
                  src="/hero.jpeg"
                  alt="Web development illustration with laptop, code, and development tools"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
        >
          <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <h2 className="mb-12 bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
              What&apos;s Included in The Happy Path?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: CodeIcon,
                  title: "Next.js 15 App Router",
                  description:
                    "Built on the latest Next.js features for optimal performance",
                },
                {
                  icon: DatabaseIcon,
                  title: "Drizzle ORM & PostgreSQL",
                  description: "Efficient database operations with modern ORM",
                },
                {
                  icon: LockIcon,
                  title: "Custom Auth with Oslo",
                  description:
                    "Secure and flexible authentication system tailored to your needs",
                },
                {
                  icon: PlugZapIcon,
                  title: "Tailwind CSS & shadcn/ui",
                  description:
                    "Beautiful, responsive designs with minimal effort",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Role-Based Authorization",
                  description: "Granular control over user permissions",
                },
                {
                  icon: SunIcon,
                  title: "Light/Dark Mode",
                  description:
                    "Built-in theme support for better user experience",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border border-gray-700 bg-gray-800/50 p-6 text-center shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-fuchsia-500"
                >
                  <div className="mb-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 p-3">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
          id="get-started"
        >
          <div className="fill absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDgwMCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiPjxnIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgZmlsbD0ibm9uZSI+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjAiIGN5PSIwIiBmaWxsPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjcuNDQ3MzY4NDIxMDUyNjMyIiBjeD0iMjAwIiBjeT0iMCIgZmlsbD0iaHNsYSgwLCAwJSwgMTAwJSwgMS4wMCkiIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjQwMCIgY3k9IjAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSI2MDAiIGN5PSIwIiBmaWxsPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjcuNDQ3MzY4NDIxMDUyNjMyIiBjeD0iODAwIiBjeT0iMCIgZmlsbD0iaHNsYSgwLCAwJSwgMTAwJSwgMS4wMCkiIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjAiIGN5PSIyMDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSIyMDAiIGN5PSIyMDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSI0MDAiIGN5PSIyMDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSI2MDAiIGN5PSIyMDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSI4MDAiIGN5PSIyMDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSIwIiBjeT0iNDAwIiBmaWxsPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjcuNDQ3MzY4NDIxMDUyNjMyIiBjeD0iMjAwIiBjeT0iNDAwIiBmaWxsPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjcuNDQ3MzY4NDIxMDUyNjMyIiBjeD0iNDAwIiBjeT0iNDAwIiBmaWxsPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjcuNDQ3MzY4NDIxMDUyNjMyIiBjeD0iNjAwIiBjeT0iNDAwIiBmaWxsPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjcuNDQ3MzY4NDIxMDUyNjMyIiBjeD0iODAwIiBjeT0iNDAwIiBmaWxsPSJoc2xhKDAsIDAlLCAxMDAlLCAxLjAwKSIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjcuNDQ3MzY4NDIxMDUyNjMyIiBjeD0iMCIgY3k9IjYwMCIgZmlsbD0iaHNsYSgwLCAwJSwgMTAwJSwgMS4wMCkiIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjIwMCIgY3k9IjYwMCIgZmlsbD0iaHNsYSgwLCAwJSwgMTAwJSwgMS4wMCkiIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjQwMCIgY3k9IjYwMCIgZmlsbD0iaHNsYSgwLCAwJSwgMTAwJSwgMS4wMCkiIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjYwMCIgY3k9IjYwMCIgZmlsbD0iaHNsYSgwLCAwJSwgMTAwJSwgMS4wMCkiIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjgwMCIgY3k9IjYwMCIgZmlsbD0iaHNsYSgwLCAwJSwgMTAwJSwgMS4wMCkiIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI3LjQ0NzM2ODQyMTA1MjYzMiIgY3g9IjAiIGN5PSI4MDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSIyMDAiIGN5PSI4MDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSI0MDAiIGN5PSI4MDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSI2MDAiIGN5PSI4MDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNy40NDczNjg0MjEwNTI2MzIiIGN4PSI4MDAiIGN5PSI4MDAiIGZpbGw9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjwvZz48L3N2Zz4=')] bg-contain bg-repeat opacity-15"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="max-w-[900px] space-y-2">
                <h2 className="bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
                  Start Your Project Today
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Happy Path provides everything you need to build modern
                  web applications quickly and efficiently. Say goodbye to
                  configuration headaches and hello to rapid development.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 pt-6">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-fuchsia-600 to-sky-600 font-bold text-white shadow-lg transition-all duration-500 ease-in-out hover:from-fuchsia-700 hover:to-sky-700 hover:shadow-xl"
                  size="lg"
                >
                  <Link href="https://github.com/esize/the-happy-path">
                    Get The Happy Path on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </section>
      </main>
    </div>
  );
}
