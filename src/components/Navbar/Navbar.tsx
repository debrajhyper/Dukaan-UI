import { hamberMenu, helpIcon, searchIcon, iconMenu1Icon, iconMenu2Icon } from "../../icons"

export function Navbar({ toggleOpen }: { toggleOpen: any }) {
    return (
        <div className='flex w-full h-[64px] py-[12px] px-[32px] gap-[16px] items-center flex-nowrap bg-[#fff] border-solid border-b border-b-[#d9d9d9] top-0 left-[224px]'>
            <div className='flex gap-[16px] items-center grow shrink-0 basis-0 flex-nowrap'>
                <img src={hamberMenu} alt="menu" width={20} height={20} className="inline-block md:hidden" onClick={toggleOpen} />
                <div className='flex items-center shrink-0 flex-nowrap overflow-hidden'>
                    <span className="shrink-0 basis-auto text-[15px] font-normal leading-[22px] text-[#1a181e] text-left whitespace-nowrap">
                        Payments
                    </span>
                </div>
                <div className='cursor-help flex gap-[6px] items-center shrink-0 flex-nowrap'>
                    <img src={helpIcon} alt="help" width={14} height={14} className='shrink-0 bg-cover bg-no-repeat overflow-hidden' />
                    <span className="shrink-0 basis-auto text-[12px] font-normal leading-[16px] text-[#4c4c4c] text-left whitespace-nowrap">
                        How it works
                    </span>
                </div>
            </div>
            <div className="hidden md:flex lg:w-[400px] md:w-[200px] relative items-center self-stretch shrink-0 flex-nowrap rounded-[6px] border-none">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img src={searchIcon} alt="search" width={16} height={16} className="shrink-0 bg-[length:100%_100%] bg-no-repeat overflow-hidden" />
                </div>
                <input type="text" id="simple-search" className="truncate w-full py-[9px] px-[16px] pl-9 gap-[8px] items-center self-stretch flex-nowrap bg-[#f2f2f2] rounded-[6px] border-none shrink-0 basis-auto text-[15px] font-normal leading-[22px] text-[#7f7f7f] text-left whitespace-nowrap" placeholder="Search features, tutorials, etc." required />
            </div>
            <div className='flex gap-[8px] justify-end items-start grow shrink-0 basis-0 flex-nowrap'>
                <div className='flex w-[92px] gap-[12px] items-start shrink-0 flex-nowrap'>
                    <img src={iconMenu2Icon} alt="icon-menu1" width={40} height={40} className="cursor-pointer shrink-0 bg-cover bg-no-repeat overflow-hidden" />
                    <img src={iconMenu1Icon} alt="icon-menu2" width={40} height={40} className="cursor-pointer shrink-0 bg-cover bg-no-repeat overflow-hidden" />
                </div>
            </div>
        </div>
    )
}
