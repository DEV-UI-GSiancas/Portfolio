import './index.scss';
import src from '../../../assets/avatar.png';

interface AvatarProps {
    url: string | undefined;
    className?: string;
}

export const Avatar = ({url , className} : AvatarProps) => {
    const source = url ? url : src;

    return (
        <span 
            className={`avatar ${className ? className : ''}`} 
            style={{backgroundImage: `url(${source})`}} 
        /> 
    )
}