import { useFormikContext } from 'formik'
import colors from '../../config/colors'
import AppText from '../AppText'
import AppTextInput from '../AppTextInput'

const AppFormInput = ({ name, width, ...other }) => {
    const { touched, values, errors, handleChange } = useFormikContext()
    return (
        <>
            <AppTextInput
                width={width}
                value={values[name]}
                onBlur={handleChange(name)}
                onChangeText={handleChange(name)}
                {...other}
            />
            {touched[name] && errors[name] && (
                <AppText fontSize={12} color={colors.danger}>
                    {errors[name]}
                </AppText>
            )}
        </>
    )
}

export default AppFormInput
