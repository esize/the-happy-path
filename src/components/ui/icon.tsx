"use client";
import { type LucideProps, icons } from "lucide-react";
import { memo } from "react";

export type IconComponentName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: string; // because this is coming from the CMS
}



export function DynamicIcon({ name, ...props }: IconProps) {
  // we need to convert kebab-case to PascalCase because we formerly relied on
  // lucide-react/dynamicIconImports and the icon names are what are stored in the CMS.
  const kebabToPascal = (str: string) =>
    str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  // 👮‍♀️ guard
  function isValidIconComponent(
    componentName: string,
  ): componentName is IconComponentName {
    return componentName in icons;
  }

  const componentName = kebabToPascal(name);

  // // ensure what is in the CMS is a valid icon component
  if (!isValidIconComponent(componentName)) {
    return null;
  }

  // lucide-react/dynamicIconImports makes makes NextJS development server very slow
  // https://github.com/lucide-icons/lucide/issues/1576
  const Icon = memo(icons[componentName]);
  return <Icon {...props} />;
}