import express from "express"
import { getPayloadClient } from "./get-payload"
import { nextApp, nextHandler } from "../next-utils"
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from '../trpc/index'

const app = express()

const PORT = Number(process.env.PORT) || 3000

/* creating our context so we can use it in our next.js app */
const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
    /* returns req and res as they are */
    req, res
})

const start = async () => {
    /* Gonna start the CMS (provided by payload) */
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                /* where the admin dashboard shall live (we're just logging the url) */
                cms.logger.info(`[>] Admin URL: ${cms.getAdminURL()}`)
            },
        },
    })


    /* middleware to route all requests to trpc */
    app.use('/api/trpc', trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext
    }))

    /* whatever req res we get for express, we can just fwd it to nextjs */
    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
        payload.logger.info("[+] Next.js started.")
    })

    app.listen(PORT, async () => {
        payload.logger.info(`[>] Next.js App URL ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })

}

start()