import { cn } from "@/lib/utils"

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
    imgSrc : string
    dark? : boolean
}

const Phone = ({imgSrc, className, dark = false, ...props}: PhoneProps) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
        {...props}>
            <img src={dark ? '/phone-template-black-edges.png' : '/phone-template-white-edges.png'} className="pointer-events-none z-50 select-none" alt="phone template"/>

            <div className="absolute -z-10 inset-0">
                <img src={imgSrc} className="object-cover min-w-full min-h-full" alt="phone"/>
            </div>
        
        </div>
    )
}

export default Phone