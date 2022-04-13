import LottieView from 'lottie-react-native'

const ActivityIndicator = () => {
    return (
        <LottieView
            loop
            autoPlay
            source={require('../assets/animations/loader.json')}
        />
    )
}

export default ActivityIndicator
