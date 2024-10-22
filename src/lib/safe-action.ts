import { createServerActionProcedure } from "zsa";

import { env } from "@/env";
import { assertAuthenticated } from "@/lib/session";
import { PublicError } from "@/use-cases/errors";

function shapeErrors({ err }: { err: unknown }) {
  if (err instanceof PublicError) {
    const isDev = env.NODE_ENV === "development";
    if (isDev) {
      console.error(err);
    }
    return {
      code: err.code ?? "ERROR",
      message: `${!isDev ? "" : "DEV ONLY ENABLED - "}${err.message}`,
    };
  } else {
    return {
      code: "ERROR",
      message: "Something went wrong",
    };
  }
}

export const authenticatedAction = createServerActionProcedure()
  .experimental_shapeError(shapeErrors)
  .handler(async () => {
    const user = await assertAuthenticated();
    return { user };
  });

export const unauthenticatedAction = createServerActionProcedure()
  .experimental_shapeError(shapeErrors)
  .handler(async () => {
    return { user: null };
  });
