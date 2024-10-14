import Link from "next/link"

export default function Folder1(){
    return (
        <>
            <h1 className="text-4xl">Folder 1</h1>
            <div>
            <Link href="/folder1/folder2"> Folder 2 </Link>


            </div>
            
        </>
    )
}