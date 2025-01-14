'use client';
import Button from "@/components/Button/Button";
import DefaultButton from "@/components/DefaultButton/DefaultButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";


const Register = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const router = useRouter()
    const handleRegister = (data) =>{
        const userInfo = {
            name:data.name,
            email: data.email,
            password: data.password
        }
        console.log(userInfo)
        fetch('/api/register', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(userRes =>{
            if(userRes?.acknowledged){
                reset();
                router.push('/login')
            }
        })
    }
  return (
    <div className="p-8 md:p-16 flex flex-col space-y-4">
      <Link
        href={"/"}
        className="text-4xl text-purple-800 font-semibold hover:bg-white p-4 hover:rounded-md w-full md:w-1/6"
      >
        Resumake
      </Link>
      <div className="flex flex-col md:flex-row space-x-4">
        <div className="w-full md:w-1/2 rounded-xl">
          <Image
            alt="register-image"
            src={
              "https://images.pexels.com/photos/2451622/pexels-photo-2451622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="w-full rounded-xl"
            width={1080}
            height={720}
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8 p-8">
          <h2 className="text-3xl font-thin text-purple-800 text-center -mt-8">
            Register
          </h2>
          <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800 text-sm">Name</label>
              <input
                type="text"
                name="name"
                className="border border-purple-800 rounded-md px-4 py-2 text-purple-800 bg-purple-200"
                placeholder="Enter your name"
                {...register('name', {
                    required:{
                        value:true,
                        message: 'Name is Required'
                    }
                })}
              />
              {errors.name && <p className="text-red-500 bg-red-200 rounded-md p-1">{errors.name.message}</p>
                            }
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800 text-sm">Email</label>
              <input
                type="email"
                name="email"
                className="border border-purple-800 rounded-md px-4 py-2 text-purple-800 bg-purple-200"
                placeholder="Enter your email"
                {...register('email', {
                    required:{
                        value:true,
                        message: 'Email is Required'
                    }
                })}
              />
              {errors.email && <p className="text-red-500 bg-red-200 rounded-md p-1">{errors.email.message}</p>
                            }
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800 text-sm">Password</label>
              <input
                type="password"
                name="password"
                className="border border-purple-800 rounded-md px-4 py-2 text-purple-800 bg-purple-200"
                placeholder="Create your password"
                {...register('password', {
                    required:{
                        value: true,
                        message: 'Password is required'
                    },
                    minLength:{
                        value: 6,
                        message: 'Password must be 6 characters long'
                    }
                })}
              />
              {errors.password && <p className="text-red-500 bg-red-200 rounded-md p-1">{errors.password.message}</p>
                            }
            </div>
            <Link
              href={"/register"}
              className="text-sm hover:underline text-purple-800"
            >
              Already have an account?
            </Link>
            <DefaultButton btnType={"type"}>Register</DefaultButton>
          </form>
          <Button
            style={
              "px-4 py-2 bg-white text-black rounded-md block border border-slate-300 block w-full font-semibold"
            }
          >
            Login with <span className="text-blue-500">Google</span>
          </Button>

          <p className="mt-8 text-slate-600">
            By creating an account, you agree to our Terms of Service. We do not
            sell your personal data. To learn more about how we collect, use,
            share and protect it please read our Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
