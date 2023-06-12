import Image from "next/image";

interface ProfilePicProps {
    src: string;
    alt: string;
    addClass?: string;
}

const ProfilePic: React.FC<ProfilePicProps> = ({
    src,
    alt,
    addClass
}) => {
    return (
        <div className={`h-10 w-10  border-2 border-black dark:border-white rounded-full overflow-hidden ${addClass}`}>
            <Image src={src} alt={alt} width={200} height={200} className="w-full h-full object-cover" />
        </div>
    );
}
 
export default ProfilePic;