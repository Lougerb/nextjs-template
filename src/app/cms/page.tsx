import ButtonLink from "@/components/button/ButtonLink";

export default function Page() {
    return (
        <>
            <div className="layout">
                <h1 className="text-[5rem] text-[#333] text-center block py-[5rem] font-bold">CMS Page</h1>

                <ul className="">
                    <ButtonLink className={''} text={'Blog'} href={'/cms/blog'} target={''}></ButtonLink>
                </ul>
            </div>
            
        </>
    );
}