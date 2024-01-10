import { searchIcon } from "../../icons"
export default function TableSearch() {
    return (
        <div className="w-[248px] relative items-center self-stretch shrink-0 flex-nowrap rounded-[6px] border-none">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img src={searchIcon} alt="search" width={14} height={14} className="shrink-0 bg-cover" />
            </div>
            <input type="text" id="simple-search" className="truncate w-full py-[10px] px-[16px] pl-9 gap-[8px] items-center self-stretch flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d9d9d9] shrink-0 basis-auto text-[14px] font-normal leading-[20px] text-[#999999] text-left whitespace-nowrap" placeholder="Search by order ID..." />
        </div>
    )
}
