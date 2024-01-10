import SidebarHeader from "./SidebarHeader"
import SidebarFooter from "./SidebarFooter"
import { data } from "./SidebarData"


type SidebarProps = {
    open: boolean,
    toggleOpen: any,
}

export function Sidebar({ open, toggleOpen }: SidebarProps) {
    return (
        <div className={`${open ? 'flex' : 'hidden'} md:flex w-auto h-full flex-col items-start flex-nowrap fixed top-0 left-0 z-[100]`}>
            <div className='flex py-[16px] px-[10px] flex-col gap-[16px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#1e2640]'>
                <div className='flex w-full flex-col gap-[24px] items-center grow shrink-0 basis-0 flex-nowrap'>
                    <SidebarHeader toggleOpen={toggleOpen} />
                    <div className='flex w-full flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap'>
                        {
                            data.map((item, index) => {
                                const { name, icon, isActive } = item
                                return (
                                    <div key={index} className={`cursor-pointer ${isActive ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-inherit'} hover:bg-[rgba(255,255,255,0.1)] flex w-full py-[8px] px-[16px] gap-[12px] items-start shrink-0 flex-nowrap rounded-[4px]`}>
                                        <img src={icon} alt="name" width={20} height={20} className="shrink-0 bg-cover bg-no-repeat overflow-hidden" />
                                        <span className={`h-[20px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium ${isActive ? 'opacity-1' : 'opacity-[0.800000011920929]'} leading-[20px] text-[#fff] text-left whitespace-nowrap`}>
                                            {name}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <SidebarFooter />
            </div>
        </div >
    )
}