import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'

function AppFormPicker({ items, name, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            {touched[name] && errors[name] && (
                <AppText fontSize={12} color={colors.danger}>
                    {errors[name]}
                </AppText>
            )}
        </>
    )
}

export default AppFormPicker
