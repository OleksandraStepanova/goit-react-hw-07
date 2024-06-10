import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
  
    return (
        <ul className={css.list}>
            {contacts.map((contactItem) => (
                <li key={contactItem.id}>
                    <Contact contact={contactItem}/>
                </li>
            ))}
        </ul>
    )
}