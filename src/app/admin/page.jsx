import Image from 'next/image'
import React from 'react'
import { FlipWords } from "../../components/ui/flip-words";

// shadCN Form
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"

// Image
import loginBG from "../../assets/images/cafe/img_4.jpg"
import logo from "../../assets/images/logo_light.png"
import Link from 'next/link';
import Button from '@/components/common/button';

const Admin = () => {
    const words = ["passport", "identity", "responsibility", "key"];

    return (
        <div className='w-full relative'>

            <Image src={loginBG} alt='Background Cafe Image' className='fixed md:absolute inset-0 w-full h-screen object-cover' />
            <div className='relative flex md:items-center md:justify-center w-full h-screen'>
                <div className="container w-full h-fit mx-auto">
                    <div className='flex flex-row justify-center items-center w-full'>


                        <div className="hidden lg:block w-3/7 liquidGlass-wrapper relative -right-2">
                            <div className="liquidGlass-effect"></div>
                            <div className="liquidGlass-tint"></div>
                            <div className="liquidGlass-shine"></div>
                            <div className="flex flex-col items-center w-full px-6 py-18 z-3">
                                <Image src={logo} alt='Mail Logo' className='w-[120px] mb-5' />
                                <h1 className='text-5xl w-4/5 mb-12 text-center leading-tight font-bold text-white'>Crew Access Portal</h1>
                                <div className="flex w-3/5 flex-col opacity-80">
                                    <p className='text-2xl text-white'>
                                        Your credentials
                                    </p>
                                    <p className='text-2xl ml-auto text-white'>
                                        Your<FlipWords words={words} className="text-white" />
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="w-full md:w-3/5 lg:w-1/2 bg-white rounded-3xl z-10 relative lg:-left-2 p-6 md:p-12 lg:p-20 my-6 md:my-0">
                            <div className='mb-16'>
                                <h1 className='text-4xl text-blue-950 font-bold mb-2'>Ahoy, Captain! &#9875;</h1>
                                <p className='text-blue-950 text-lg font-medium'>Enter your credentials to login.</p>
                            </div>
                            <div className='flex flex-col gap-3 text-amber-900'>
                                <div className="w-full mb-1">
                                    <Label htmlFor="picture">User Type</Label>
                                    <Select>
                                        <SelectTrigger className="w-full border border-blue-900 py-5 rounded-md">
                                            <SelectValue placeholder="Select User Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-full mb-1">
                                    <Label htmlFor="picture">Email</Label>
                                    <Input type="email" placeholder="Enter Your Email Address" className="border-blue-900 py-5 rounded-md" />
                                </div>
                                <div className="w-full mb-1">
                                    <Label htmlFor="picture">Password</Label>
                                    <Input type="password" placeholder="Enter Your Password" className="border-blue-900 py-5 rounded-md" />
                                </div>
                                <div className="w-full flex flex-row justify-between mb-1">
                                    <Field orientation="horizontal">
                                        <Checkbox id="remember-me" defaultChecked />
                                        <FieldLabel htmlFor="remember-me" className="font-normal mb-0  w-fit" >Remember Me</FieldLabel>
                                    </Field>
                                    <Link href="#" className='w-fit whitespace-nowrap'>Forget Password?</Link>
                                </div>
                                <Button text="Login" radius='lg' size='lg' link='/admin/dashboard' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <svg style={{ display: "none" }}>
                <filter
                    id="glass-distortion"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.01 0.01"
                        numOctaves="1"
                        seed="5"
                        result="turbulence"
                    />
                    <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
                    <feSpecularLighting
                        in="softMap"
                        surfaceScale="5"
                        specularConstant="1"
                        specularExponent="100"
                        lightingColor="white"  // ✅ must be camelCase
                        result="specLight"
                    >
                        <fePointLight x="-200" y="-200" z="300" />
                    </feSpecularLighting>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="softMap"
                        scale="150"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>

        </div>
    )
}

export default Admin
