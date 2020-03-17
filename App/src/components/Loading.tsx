import React from 'react';
import {
    Animated,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const COLORS = {
    yellow: '#FFC46B',
    pink: '#FF82C3',
    violet: '#8A00D4',
    magenta: '#D527B7',
};
const SQUARE_SIZE: number = 60;
const SQUARE_OFFSET: number = 90;
const VERTICAL: number = (height - SQUARE_SIZE) / 2;
const HORIZONTAL: number = (width - SQUARE_SIZE) / 2;
const TOGGLE_VALUE = new Animated.Value(0);

const Loading = () => {
    const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
        handleToggle();
    }, []);

    const handleToggle = () => {
        setToggle(!toggle);
        Animated.timing(TOGGLE_VALUE, {
            toValue: !toggle ? 1 : 0,
            duration: 6000,
        }).start();
    };

    const square1 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [
            VERTICAL,
            VERTICAL + SQUARE_OFFSET * 1.2,
            VERTICAL + SQUARE_OFFSET,
            VERTICAL,
            VERTICAL - SQUARE_OFFSET * 1.1,
            VERTICAL - SQUARE_OFFSET * 0.5,
        ],
    });

    const square2 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [
            HORIZONTAL,
            HORIZONTAL + SQUARE_OFFSET * 1.2,
            HORIZONTAL + SQUARE_OFFSET,
            HORIZONTAL,
            HORIZONTAL - SQUARE_OFFSET * 1.1,
            HORIZONTAL - SQUARE_OFFSET * 0.5,
        ],
    });

    const square3 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [
            VERTICAL,
            VERTICAL - SQUARE_OFFSET * 1.2,
            VERTICAL - SQUARE_OFFSET,
            VERTICAL,
            VERTICAL + SQUARE_OFFSET * 1.1,
            VERTICAL + SQUARE_OFFSET * 0.5,
        ],
    });

    const square4 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [
            HORIZONTAL,
            HORIZONTAL - SQUARE_OFFSET * 1.2,
            HORIZONTAL - SQUARE_OFFSET,
            HORIZONTAL,
            HORIZONTAL + SQUARE_OFFSET * 1.1,
            HORIZONTAL + SQUARE_OFFSET * 0.5,
        ],
    });

    const rotate = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['45deg', '1800deg', '45deg'],
    });
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleToggle()}>
                <Animated.View
                    style={StyleSheet.flatten([
                        styles.square,
                        styles.square1,
                        { top: square1, transform: [{ rotate }] },
                    ])}
                />
                <Animated.View
                    style={StyleSheet.flatten([
                        styles.square,
                        styles.square2,
                        { left: square2, transform: [{ rotate }] },
                    ])}
                />
                <Animated.View
                    style={StyleSheet.flatten([
                        styles.square,
                        styles.square3,
                        { top: square3, transform: [{ rotate }] },
                    ])}
                />
                <Animated.View
                    style={StyleSheet.flatten([
                        styles.square,
                        styles.square4,
                        { left: square4, transform: [{ rotate }] },
                    ])}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    square: {
        top: VERTICAL,
        left: HORIZONTAL,
        position: 'absolute',
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        borderRadius: 8,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 0.2,
    },
    square1: {
        backgroundColor: COLORS.yellow,
        shadowColor: COLORS.yellow,
        zIndex: 4,
    },
    square2: {
        backgroundColor: COLORS.pink,
        shadowColor: COLORS.pink,
        zIndex: 3,
    },
    square3: {
        backgroundColor: COLORS.violet,
        shadowColor: COLORS.violet,
        zIndex: 2,
    },
    square4: {
        backgroundColor: COLORS.magenta,
        shadowColor: COLORS.magenta,
        zIndex: 1,
    },
});
