import { Formik } from 'formik'

const AppForm = ({ children, initialValues, validationSchema, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    )
}

export default AppForm
