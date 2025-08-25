import z from "zod";
import { AuthSchema } from "../zod/AuthSchema";


export type AuthType  = z.infer<typeof AuthSchema> 
