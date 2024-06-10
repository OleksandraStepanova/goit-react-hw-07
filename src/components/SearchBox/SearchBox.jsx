import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter} from '../../redux/filtersSlice';
import css from './SearchBox.module.css'

export default function SearchBox() {

    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();    
    const handleFilter = e => dispatch(changeFilter(e.target.value.trim()))        
    
    return (
        <>
            <h2>Find contact by name</h2>
            <input type="text" onChange ={handleFilter} value={filter} className={css.input} />
        </>
    )
}