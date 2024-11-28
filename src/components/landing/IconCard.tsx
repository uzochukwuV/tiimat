
import { PropsWithChildren } from "react";

function IconCard(props:PropsWithChildren & {name:string}) {
    return (
        <>
        <div className="relative">
                        {/* Experienced faculty, modern facility, industrial partnership, student suppport service */}
                        <div className=" h-[130px] mb-12 m-4 rounded-xl flex flex-col gap-4 bg-zinc-50 p-4">
                            <div className=" flex gap-6 justify-start items-center">
                                <span className="">
                                
                                {props.children!}
                                </span>
                                <span className=" font-bold text-black">
                                    {props.name}
                                </span>
                            </div>
                            <div className=" text-[12px] ps-5 text-[#626266]">
                                <p>
                                    We offer you experienced and qualified tutors with qualifications and certificates from top induatries in their specialised fields
                                </p>
                            </div>
                        </div>
                    </div>
        </>
    )
}
export default IconCard;