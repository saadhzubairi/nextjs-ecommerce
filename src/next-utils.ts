import next from "next"

const PORT = Number(process.env.PORT) || 3000

/*  */
export const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT
})

/* the handler has all the nextjs logic handled (in case we want to self-host the app) */
export const nextHandler = nextApp.getRequestHandler()
