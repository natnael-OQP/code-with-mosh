import { useState, useRef } from 'react'

import { StyleSheet, ScrollView, View } from 'react-native'
import AppText from './AppText'

import FormImage from './FormImage'
import { useFormikContext } from 'formik'
import colors from '../config/colors'

const ImageList = () => {
    const { touched, values, errors, setFieldValue } = useFormikContext()
    const scrollView = useRef()

    const AddImage = (uri) => {
        setFieldValue('image', [...values.image, uri])
    }

    const RemoveImage = (uri) => {
        setFieldValue(
            'image',
            values.image.filter((image) => image !== uri)
        )
    }

    return (
        <View>
            <ScrollView
                horizontal={true}
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {values.image?.map((image, i) => (
                        <FormImage
                            key={i}
                            imagesUri={image}
                            onChangeImage={RemoveImage}
                            name="image"
                        />
                    ))}
                    <FormImage onChangeImage={AddImage} />
                    {touched.image && errors.image && (
                        <AppText
                            style={styles.text}
                            fontSize={12}
                            color={colors.danger}
                        >
                            {errors.image}
                        </AppText>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default ImageList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'relative',
        marginBottom: 6,
        height: 110,
    },
    text: {
        position: 'absolute',
        left: 0,
        bottom: -17,
    },
})
