import { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import FormImage from './FormImage'

const ImageList = () => {
    const [imagesUris, setImagesUris] = useState([])
    console.log(imagesUris)

    const AddImage = (uri) => {
        setImagesUris([...imagesUris, uri])
    }

    const RemoveImage = (uri) => {
        setImagesUris(imagesUris.filter((image) => image !== uri))
    }

    return (
        <View style={styles.container}>
            {imagesUris?.map((image, i) => (
                <FormImage
                    key={i}
                    imagesUri={image}
                    onChangeImage={RemoveImage}
                />
            ))}
            <FormImage onChangeImage={AddImage} />
        </View>
    )
}

export default ImageList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})
