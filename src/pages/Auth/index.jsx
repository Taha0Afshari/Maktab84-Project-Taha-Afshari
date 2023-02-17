import { Button, Textfield } from "@/components";
import { Container } from '@/layout/';
import { signupService } from '@/api';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {toast} from "react-toastify"
import { useState } from "react";

const signupSchema = yup.object({
    email : yup.string().email().required(),
    password : yup.string().required(),
    repeatpassword: yup.string().required()

}).required();


export const Authscreen = () => {

    const[loading , setloading]= useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode :"onchange",
        resolver: yupResolver(signupSchema),
 
    });
console.log(errors)
    const handleSignupUser =async (data) => {
        setloading(true)
        try{
        const sig = await signupService(data)
        console.log(sig)
        setloading(false)
    }
    catch(err){
        toast.error(error.message);
        setloading(false)
        console.log(err)
    }
}
    return (

        <Container onSubmit={handleSubmit(handleSignupUser)} component="form">
            <Textfield label="Email" placeholder="email@gmail.com" 
            error={errors.email?.message}
           validation={{...register("email")}}
           />
            <Textfield label="password" placeholder="password" 
                error={errors.password?.message}
                validation={{...register("password") }}
            />
            <Textfield label="repeatpassword" placeholder="repeatpassword" 
                error={errors.repeatpassword?.message}
            validation={{...register("repeatpassword")}}
              />
            <Button loading={loading} className="" secondary>sign up</Button>
        </Container>

    );
}
