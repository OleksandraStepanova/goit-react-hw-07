import { HiPhone } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import css from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: {id, name, number } }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <div className={css.item}>
            <div className={css.wrapper}>
                <div className={css.info}>
                    <IoPerson/>
                    <p>{name}</p>
                </div>
                <div className={css.info}>
                    <HiPhone/>
                    <p>{number}</p>
                </div>
            </div>
            <button type="button" onClick={handleDelete}>Delete</button>
        </div>
    )
}