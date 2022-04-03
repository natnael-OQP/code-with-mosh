import { useFormikContext } from 'formik'

import AppButton from '../AppButton'

const AppFormButton = ({ title }) => {
    const { handleSubmit, isValid } = useFormikContext()
    return (
        <AppButton disabled={!isValid} title={title} onPress={handleSubmit} />
    )
}

export default AppFormButton
