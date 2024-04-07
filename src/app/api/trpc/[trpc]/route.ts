import { appRouter } from "@/trpc"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

/* this func recieves the next.js request */
const handler = (req: Request) => {
  /* whatever the reqeust is, we will pass it onto this handler */
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter, /* essentially our literal backend */
    createContext: () => ({}),
  })
}

/* for both post and get reqeusts, this file will handle everything */
export { handler as GET, handler as POST }