import { createTRPCReact } from "@trpc/react-query"
import { AppRouter } from ".";

/* the generic contains the entirety of our backend */
export const trpc = createTRPCReact<AppRouter>({});
/* ^ now the front end knows the type of the backend! */