import dotenv from "dotenv"
import path from "path"
/* import {} from "payload" */

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

/* if our CMS is cached */
let cached = (global as any).payload


/* if our CMS is not cached! */
if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null
    }
}

/* interface Args {
    initOptions?:Partial<InitOptions>
}

export const getPayloadClient = async ({ initOptions }: Args) => {   
} */