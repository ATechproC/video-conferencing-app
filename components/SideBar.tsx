"use client";

import { assets, sideBarLinks } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function SideBar() {
    
    const pathName = usePathname();
    const router  = useRouter();

    return (
        <div className="fixed bg-[#1C1F2E] w-[200px] pt-20">
            <div
            onClick={() => router.push("/")}
            >
                <div>
                    <Image src={assets.yoomLogo} alt="" width={100} height={100} />
                </div>
            </div>
            <div className="flex flex-col items-center h-screen gap-3 text-white ">
                {sideBarLinks.map(({ rout, label, icon }, index) => {
                    const isActive = pathName === rout || pathName.startsWith(label);

                    return (
                        <div
                            onClick={() => router.push(rout)}
                            key={index}
                            className={` ${isActive ? "bg-[#0E78F9]" : null
                                } flex h-[35px] items-center justify-between w-[90%] rounded-md`}
                        >
                            <div className="relative left-2">
                                <Image src={icon} alt={label} width={15} height={15} />
                            </div>
                            <p className="flex-1 text-center"> {label} </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SideBar;
