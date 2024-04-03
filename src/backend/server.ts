import express from "express"
import { getPayloadClient } from "./get-payload"
import { nextApp, nextHandler } from "@/next-utils"

const app = express()

const PORT = Number(process.env.PORT) || 3000

const start = async () => {
    /* Gonna start the CMS (provided by payload) */
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                /* this is where the admin dahsboard will live. and we're just logging it*/
                cms.logger.info(`Admin URL ${cms.getAdminURL}`)
            }
        }
    })


    /* whatever req res we get for express, we can just fwd it to nextjs */
    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
        payload.logger.info("[+] NEXT.JS STARTED.")
    })

    app.listen(PORT, async () => {
        payload.logger.info(`[>] NEXT.JS APP URL ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })

}

start()