import { INSTANCE } from "@/api"

export const signupService = (data) => {
    return INSTANCE.post("/signup", data)
}

export const signinService = (data) => {
    return INSTANCE.post("/signin", data)
}                  
