import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import AppText from '../AppText'
import colors from '../../config/colors'

function AppFormPicker({
    items,
    name,
    width,
    placeholder,
    numberOfColumns = 1,
    PickerItemComponent,
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <>
            <AppPicker
                width={width}
                items={items}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}
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
