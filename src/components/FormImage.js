import { useEffect } from 'react'
import {
    Alert,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Image,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useFormikContext } from 'formik'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'
import AppText from './AppText'

const FormImage = ({ name, imagesUri, onChangeImage }) => {
    const { touched, values, errors, setFieldValue } = useFormikContext()

    useEffect(() => {
        const getPermissions = async () => {
            const { granted } =
                await ImagePicker.requestCameraPermissionsAsync()
            !granted && alert('You need to enable permission  ')
        }
        getPermissions()
    }, [])

    const selectImage = async () => {
        try {
            const { cancelled, uri } =
                await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.5,
                })
            if (!cancelled) {
                onChangeImage(uri)
                // setFieldValue(name, imagesUri)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const HandelDelete = () => {
        // web
        onChangeImage(imagesUri)
        //    mobile
        // Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        //     { text: 'Yes', onPress: () => onChangeImage(null) },
        //     { text: 'No' },
        // ])
    }

    return (
        <>
            {}
            <TouchableWithoutFeedback
                onPress={imagesUri ? HandelDelete : selectImage}
            >
                <View style={styles.container}>
                    {imagesUri ? (
                        <Image
                            source={{ uri: imagesUri }}
                            style={styles.image}
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name="camera"
                            size={45}
                            color={colors.medium}
                        />
                    )}
                    {touched[name] && errors[name] && (
                        <AppText fontSize={12} color={colors.danger}>
                            {errors[name]}
                        </AppText>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default FormImage

const styles = StyleSheet.create({
    container: {
        width: 95,
        height: 100,
        borderRadius: 19,
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
})
