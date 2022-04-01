import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'

function ListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent && IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.info}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && (
                            <AppText style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    info: {
        marginLeft: 10,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        textTransform: 'capitalize',
    },
    subTitle: {
        fontSize: 14,
        color: colors.medium,
    },
})

export default ListItem
