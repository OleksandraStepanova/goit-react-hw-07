import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox"
import ContactForm from "./ContactForm/ContactForm"
import { useDispatch, useSelector } from "react-redux"
import { selectError, selectLoading } from "../redux/contactsSlice"
import { useEffect } from "react"
import { fetchContacts } from "../redux/contactsOps"
import Loader from "./Loader/Loader"

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  },
    [dispatch]
  )

  return (<div>
    <h1>Phonebook</h1>
    <ContactForm/>
    <SearchBox />
    {isLoading && <Loader />}
    {isError && <p>Error</p>}
    <ContactList/>
</div>) 
}

export default App
