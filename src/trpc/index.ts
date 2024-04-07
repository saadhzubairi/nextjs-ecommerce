/* this is the backend */

import { publicProcedure, router } from "./trpc";

/* this is our server, with all the api endpoints! */
export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 1
    })
})

export type AppRouter = typeof appRouter