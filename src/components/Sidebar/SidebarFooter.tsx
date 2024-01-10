import { walletIcon } from "../../icons"

export default function SidebarFooter() {
    return (
        <div className="flex w-full py-[6px] px-[12px]flex-col gap-[10px] items-start shrink-0 flex-nowrap bg-[#353c53] rounded-[4px]">
            <div className="flex gap-[12px] items-center shrink-0 flex-nowrap">
                <div className="flex w-[36px] py-[6px] px-[6px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(255,255,255,0.1)] rounded-[4px]">
                    <img src={walletIcon} alt="wallet" width={24} height={24} className="shrink-0 bg-cover bg-no-repeat overflow-hidden" />
                </div>
                <div className="flex w-full flex-col gap-[2px] items-start shrink-0 flex-nowrap">
                    <span className="shrink-0 basis-auto text-[13px] font-normal opacity-[0.800000011920929] leading-[16px] text-[#fff] text-left whitespace-nowrap">
                        Available credits
                    </span>
                    <span className="shrink-0 basis-autotext-[16px] font-medium leading-[24px] text-[#fff] text-left whitespace-nowrap">
                        222.10
                    </span>
                </div>
            </div>
        </div>
    )
}
