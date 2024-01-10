import logo from "../../images/logo.png"
import { arrowDropdownIcon, hamberMenu } from "../../icons"

export default function SidebarHeader({ toggleOpen }: { toggleOpen: any, }) {
    return (
        <header className="flex w-[192px] gap-[12px] items-center shrink-0 flex-nowrap relative">
            <img src={logo} alt="logo" width={39} height={39} className="shrink-0 bg-contain bg-no-repeat rounded-[4px]" />
            <div className="flex flex-col gap-[4px] justify-center items-start grow shrink-0 basis-0 flex-nowrap relative z-[946]">
                <span className="self-stretch shrink-0 basis-auto text-[15px] font-medium leading-[22px] text-[#fff] text-left whitespace-nowrap">
                    Nishyan
                </span>
                <span className="cursor-pointer self-stretch shrink-0 basis-auto text-[13px] font-normal opacity-[0.800000011920929] leading-[16px] text-[#fff] text-left underline whitespace-nowrap">
                    Visit store
                </span>
            </div>
            <img src={arrowDropdownIcon} alt="arrow" width={20} height={20} className="cursor-pointer shrink-0 bg-cover bg-no-repeat overflow-hidden" />
            <img src={hamberMenu} alt="menu" width={20} height={20} className="inline-block md:hidden" onClick={toggleOpen} />
        </header>
    )
}
