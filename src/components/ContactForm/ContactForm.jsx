import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from './ContactForm.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";


export default function ContactForm() {
    const dispatch = useDispatch();
    
    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'To Short!').max(50, 'To Long!').required('Required!'),
        number: Yup.string().min(3, 'To Short!').max(50, 'To Long!').required('Required!')
    });

    const id = useId();
  
    const initialValues = {
            name: "",
            number: ""
    }
    function handleSubmit(values, actions) {
        dispatch(addContact(values));
        actions.resetForm();
    }
  
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
            <Form  className={css.form}>
                <label htmlFor={`${id}+name`}>Name</label>
                <Field className={css.input} type="text" name="name" id={`${id}+name`} />
                <ErrorMessage name="name" component="span" className={css.message}/>

                <label htmlFor={`${id}+number`}>Number</label>
                <Field className={css.input} type="text" name="number" id={`${id}+number`} />
                <ErrorMessage name="number" component="span" className={css.message}/>
                
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}