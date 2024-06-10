import { useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const visibleContacts = contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()));
    
  
    return (
        <ul className={css.list}>
            {visibleContacts.map((contactItem) => (
                <li key={contactItem.id}>
                    <Contact contact={contactItem}/>
                </li>
            ))}
        </ul>
    )
}