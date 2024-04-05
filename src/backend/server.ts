import express from "express"
import { getPayloadClient } from "./get-payload"
import { nextApp, nextHandler } from "../next-utils"

const app = express()

const PORT = Number(process.env.PORT) || 3000

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