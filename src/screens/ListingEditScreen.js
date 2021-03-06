import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'
import AppForm from '../components/forms/AppForm'
import AppFormButton from '../components/forms/AppFormButton'
import AppFormInput from '../components/forms/AppFormInput'
import AppFormPicker from '../components/forms/AppFormPicker'
import ImageList from '../components/ImageList'

import Screen from '../components/screen'
import UseLocation from '../hooks/useLocation'

import addListing from '../api/listing'

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, 'Please Select at lest one image.'),
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
})

const categories = [
    {
        backgroundColor: '#fc5c65',
        icon: 'floor-lamp',
        label: 'Furniture',
        value: 1,
    },
    {
        backgroundColor: '#fd9644',
        icon: 'car',
        label: 'Cars',
        value: 2,
    },
    {
        backgroundColor: '#fed330',
        icon: 'camera',
        label: 'Cameras',
        value: 3,
    },
    {
        backgroundColor: '#26de81',
        icon: 'cards',
        label: 'Games',
        value: 4,
    },
    {
        backgroundColor: '#2bcbba',
        icon: 'shoe-heel',
        label: 'Clothing',
        value: 5,
    },
    {
        backgroundColor: '#45aaf2',
        icon: 'basketball',
        label: 'Sports',
        value: 6,
    },
    {
        backgroundColor: '#4b7bec',
        icon: 'headphones',
        label: 'Movies & Music',
        value: 7,
    },
    {
        backgroundColor: '#a55eea',
        icon: 'book-open-variant',
        label: 'Books',
        value: 8,
    },
    {
        backgroundColor: '#778ca3',
        icon: 'application',
        label: 'Other',
        value: 9,
    },
]

function ListingEditScreen() {
    const { location, errorMsg } = UseLocation()

    const handelSubmit = async (listing) => {
        try {
            console.log(listing)
            await addListing({ ...listing, location })
            alert('Success')
        } catch (err) {
            alert("Could't save the listing")
        }
    }

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    images: [],
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                }}
                onSubmit={handelSubmit}
                validationSchema={validationSchema}
            >
                <ImageList />
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
                    numberOfColumns={3}
                    items={categories}
                    name="category"
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
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
