import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-6 p-6 text-gray-500 text-center text-[13px]">
            Made by Aman Gupta (Roll No : 22bcs012)  & Honey Rajput (Roll No : 22bcs047 )&nbsp; •&nbsp; 
            {<Link href='https://github.com/jansm04/dav' target="_blank">
                <div className="text-sky-700 inline"> Github </div>
            </Link>}
        </div>
    )
}

export default Footer;