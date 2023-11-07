import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("O e-mail é obrigatorio!"),
    password: z.string().min(4, "A senha deve conter no minimo 4 caracteres.")
})

export type LoginType = z.infer<typeof loginSchema>;