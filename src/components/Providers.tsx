"use client"

import React, { Children, PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpc } from '@/trpc/client'
import { httpBatchLink } from '@trpc/client'

/* will alow us to use trpc throughout front end */

/* children will be passed here */
const Providers = ({ children }: PropsWithChildren) => {
    /* we'll use react query */
    const [querryClient] = useState(() => new QueryClient())

    /* making the trpc accessible on the frontend */
    const [trpcClient] = useState(() => trpc.createClient({

        links: [
            /* lets us batch all links for max performance */
            httpBatchLink({

                /* the url that our backend can be called from (in index.ts file) */
                url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,

                /* also fetches stuff as well. and wanna include credentials so all the cookies etc can pass as well
                basically so that it can work with express and next.js */
                fetch(url, options) {
                    return fetch(url, {
                        ...options,
                        credentials: "include"
                    })
                }
            })
        ]
    }))

    return (<trpc.Provider client={trpcClient} queryClient={querryClient}>
        <QueryClientProvider client={querryClient} >
            {children}
        </QueryClientProvider>
    </trpc.Provider>)
}

export default Providers