import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import AppForm from '../components/forms/AppForm'
import AppFormButton from '../components/forms/AppFormButton'
import AppFormInput from '../components/forms/AppFormInput'
import AppFormPicker from '../components/forms/AppFormPicker'

import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
})

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Camera', value: 3 },
]

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormInput
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormInput
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width="50%"
                />
                <AppFormInput
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <AppFormButton title="Post" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
export default ListingEditScreen
