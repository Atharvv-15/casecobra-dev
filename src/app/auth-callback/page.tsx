'use client'

import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getAuthStatus } from "./actions"
import { useRouter } from "next/navigation"
import { Loader } from "lucide-react"

const Page = () => {
    const [configId, setConfigId] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        console.log("Inside useEffect")
        const configurationId = sessionStorage.getItem('configurationId')
        if(configurationId){
            setConfigId(configurationId)
            console.log("configId", configurationId)
        }
    }, [])

    const { data } = useQuery({
        queryKey: ['auth-callback'],
        queryFn: async () => await getAuthStatus(),
        retry: true,
        retryDelay: 500,

    })

    if(data?.success) {
        if(configId) {
            sessionStorage.removeItem('configurationId')
            router.push(`/configure/preview?id=${configId}`)
        }else{
            router.push('/')
        }
    }

    return (
        <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <Loader className="w-8 h-8 animate-spin text-zinc-500"/>
                <h3 className="font-semibold text-xl">Logging you in...</h3>
                <p>You will be redirected automatically.</p>
            </div>
        </div>
    )

}   

export default Page