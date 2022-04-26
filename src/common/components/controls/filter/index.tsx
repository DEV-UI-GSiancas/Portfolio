import Select from 'react-select';
import Catgs from '../../../../json/categories.json';
import './index.scss';

export const Filter = () => {

    const options = Object.keys(Catgs.categories).map((key) => {
        return {value: key, label: (Catgs.categories as any)[key]}
    });

    options.unshift({value: '0', label: 'All'});

    return (
        <div className='filter-category'>
            <Select 
                isClearable={true}
                isSearchable={true}
                isMulti={true}
                options={options} 
                defaultValue={options[0]}
            />
        </div>
    );
}