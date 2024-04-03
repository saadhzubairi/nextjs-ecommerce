import dotenv from "dotenv"
import path from "path"
import payload, { } from "payload"
import type { InitOptions } from "payload/config"

/* we are making a db client and also caching it here so we can use it all around our app */


dotenv.config({
    /* for the secure variables */
    path: path.resolve(__dirname, "../../.env")
})

/* if our CMS is cached. cached stores payload's state */
let cached = (global as any).payload

/* if our CMS is not cached! */
if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null
    }
}

interface Args {
    /* a typescript utility type is this partial thing */
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
    /* check for env */
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is missing')
    }

    /* if our client is cached then returned that cached version */
    if (cached.client) {
        return cached.client
    }

    /* if there's no cache, we initialize the cms and await a promise */
    if (!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {})
        })
    }

    /* if the promise is good then we set the client to whatever the promise gets */
    try {
        cached.client = await cached.promise
    } catch (e: unknown) {
        cached.promise = null
        throw e
    }

    /* and now we just return the entire cms cached! */
    return cached.client
}