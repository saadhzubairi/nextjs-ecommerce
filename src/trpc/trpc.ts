/* this is wehre all the api endpoints */

import { initTRPC } from "@trpc/server";

const t = initTRPC.context().create()

export const router = t.router

/* something everyone can call */
export const publicProcedure = t.procedure