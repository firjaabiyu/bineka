import AutoScrollImages from "./auto-move-image";

export function GaleriKarya() {
    return (
        <div className="w-full flex flex-col gap-10 items-center py-10 overflow-x-hidden bg-[#FAFAFA]">
            <div className="flex flex-col gap-2 items-center">
                <p className="text-black text-2xl font-medium">Galeri Karya Indonesia</p>
            </div>

            <AutoScrollImages />
        </div>
    )
}