import {searchUsers} from '../../apis/search';

export const Search = () => {

    const handleSearch = () => {

    }
    
    return (
        <input type="search" placeholder="Search" className="control -text" onKeyUp={handleSearch}/>
    )
}