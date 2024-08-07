import { Animated, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const DATA = [
    { id: '1', category: 'Fiction', name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: '2', category: 'Non-Fiction', name: 'Sapiens', author: 'Yuval Noah Harari' },
    { id: '3', category: 'Mystery', name: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson' },
    { id: '4', category: 'Science Fiction', name: 'Dune', author: 'Frank Herbert' },
    { id: '5', category: 'Fantasy', name: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { id: '6', category: 'Biography', name: 'The Diary of a Young Girl', author: 'Anne Frank' },
    { id: '7', category: 'Historical Fiction', name: 'The Book Thief', author: 'Markus Zusak' },
    { id: '8', category: 'Thriller', name: 'Gone Girl', author: 'Gillian Flynn' },
    { id: '9', category: 'Romance', name: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: '10', category: 'Adventure', name: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: '11', category: 'Self-Help', name: 'How to Win Friends and Influence People', author: 'Dale Carnegie' },
    { id: '12', category: 'Poetry', name: 'The Sun and Her Flowers', author: 'Rupi Kaur' },
    { id: '13', category: 'Horror', name: 'The Shining', author: 'Stephen King' },
    { id: '14', category: 'Science', name: 'A Brief History of Time', author: 'Stephen Hawking' },
    { id: '15', category: 'Philosophy', name: 'Meditations', author: 'Marcus Aurelius' },
    { id: '16', category: 'Art', name: 'The Story of Art', author: 'E.H. Gombrich' },
    { id: '17', category: 'Cooking', name: 'Joy of Cooking', author: 'Irma S. Rombauer' },
    { id: '18', category: 'Travel', name: 'Into the Wild', author: 'Jon Krakauer' },
    { id: '19', category: 'Children', name: 'Where the Wild Things Are', author: 'Maurice Sendak' },
    { id: '20', category: 'Comics', name: 'Watchmen', author: 'Alan Moore' },
];


const Bai3 = () => {

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 200], // Bạn có thể điều chỉnh giá trị này tùy thuộc vào kích thước cuộn
        outputRange: [400, 100],
        extrapolate: 'clamp',
    });

    const avatarOpacity = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const titleOpacity = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });


    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={{ color: 'black' }}>{item.category}</Text>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: 'black' }}>{item.author}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.header, { height: headerHeight }]}>
                <Animated.View style={{ opacity: avatarOpacity }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Welcome Chao Lao Lo</Text>
                </Animated.View>
                <Animated.View style={[{ marginTop: 100 }, { opacity: avatarOpacity }]}>
                    <Image source={require('./image/image.png')} style={styles.avatar} />
                </Animated.View>
                <Animated.View style={{ opacity: titleOpacity }}>
                    <Text style={styles.greetingText}>Chao Lao Lo!</Text>
                    <Text style={styles.quizText}>Ready for a quiz?</Text>
                </Animated.View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Text style={styles.tag}>Popular</Text>
                    <Text style={styles.tag}>Product Design</Text>
                    <Text style={styles.tag}>Deployment</Text>
                    <Text style={styles.tag}>People</Text>
                    <Text style={styles.tag}>Sport</Text>
                </ScrollView>
            </Animated.View>
            <Animated.FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListHeaderComponent={() => (
                    <View style={styles.listHeader}>
                        <Text style={styles.listHeaderText}>Popular Quizzes</Text>
                    </View>
                )}
                contentContainerStyle={styles.flatlistContainer}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            />
        </SafeAreaView>
    )
}

export default Bai3

const styles = StyleSheet.create({
    // container: {
    //     flex: 1, backgroundColor: 'white',
    // },
    // header: {
    //     width: '100%',
    //     height: 400,
    //     backgroundColor: 'lightblue',
    //     padding: 20
    // },
    // flatlistContainer: {
    //     padding: 20,
    //     backgroundColor: 'rgba(0,0,0,0.02)'
    // },

    // itemContainer: {
    //     backgroundColor: 'white',
    //     marginVertical: 5,
    //     borderRadius: 10,
    //     elevation: 2,
    //     shadowColor: 'black', padding: 10
    // }
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        backgroundColor: 'lightblue',
        padding: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    greetingText: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    },
    quizText: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    },
    tag: {
        marginHorizontal: 10,
        padding: 10,
        fontSize: 18,
        color: 'black',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 20,
    },
    flatlistContainer: {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
    itemContainer: {
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 10,
        elevation: 2,
        shadowColor: 'black',
        padding: 10,
        marginHorizontal: 10,
    },
    listHeader: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    listHeaderText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
    },
})



// import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// const DATA = [
//     { id: '1', category: 'Fiction', name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//     { id: '2', category: 'Non-Fiction', name: 'Sapiens', author: 'Yuval Noah Harari' },
//     { id: '3', category: 'Mystery', name: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson' },
//     { id: '4', category: 'Science Fiction', name: 'Dune', author: 'Frank Herbert' },
//     { id: '5', category: 'Fantasy', name: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
//     { id: '6', category: 'Biography', name: 'The Diary of a Young Girl', author: 'Anne Frank' },
//     { id: '7', category: 'Historical Fiction', name: 'The Book Thief', author: 'Markus Zusak' },
//     { id: '8', category: 'Thriller', name: 'Gone Girl', author: 'Gillian Flynn' },
//     { id: '9', category: 'Romance', name: 'Pride and Prejudice', author: 'Jane Austen' },
//     { id: '10', category: 'Adventure', name: 'The Hobbit', author: 'J.R.R. Tolkien' },
//     { id: '11', category: 'Self-Help', name: 'How to Win Friends and Influence People', author: 'Dale Carnegie' },
//     { id: '12', category: 'Poetry', name: 'The Sun and Her Flowers', author: 'Rupi Kaur' },
//     { id: '13', category: 'Horror', name: 'The Shining', author: 'Stephen King' },
//     { id: '14', category: 'Science', name: 'A Brief History of Time', author: 'Stephen Hawking' },
//     { id: '15', category: 'Philosophy', name: 'Meditations', author: 'Marcus Aurelius' },
//     { id: '16', category: 'Art', name: 'The Story of Art', author: 'E.H. Gombrich' },
//     { id: '17', category: 'Cooking', name: 'Joy of Cooking', author: 'Irma S. Rombauer' },
//     { id: '18', category: 'Travel', name: 'Into the Wild', author: 'Jon Krakauer' },
//     { id: '19', category: 'Children', name: 'Where the Wild Things Are', author: 'Maurice Sendak' },
//     { id: '20', category: 'Comics', name: 'Watchmen', author: 'Alan Moore' },
// ];

// const Bai3 = () => {
//     const renderItem = ({ item }) => (
//         <View style={styles.itemContainer}>
//             <Text style={{ color: 'black' }}>{item.category}</Text>
//             <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
//             <Text style={{ color: 'black' }}>{item.author}</Text>
//         </View>
//     );

//     const ListHeaderComponent = () => (
//         <View>
//             <View style={styles.header}>
//                 <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Welcome Chao Lao Lo</Text>
//                 <View style={{ marginTop: 100 }}>
//                     <Image source={require('./image/image.png')} style={{ width: 80, height: 80, borderRadius: 20 }} />
//                     <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Chao Lao Lo!</Text>
//                     <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Ready for a quiz?</Text>
//                     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                         <Text style={styles.tag}>Popular</Text>
//                         <Text style={styles.tag}>Product Design</Text>
//                         <Text style={styles.tag}>Deployment</Text>
//                         <Text style={styles.tag}>People</Text>
//                         <Text style={styles.tag}>Sport</Text>
//                     </ScrollView>
//                 </View>
//             </View>
//             <View style={{ marginVertical: 10 ,marginHorizontal:10}}>
//                 <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Popular Quizes</Text>
//             </View>
//         </View>
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={DATA}
//                 keyExtractor={item => item.id}
//                 renderItem={renderItem}
//                 ListHeaderComponent={ListHeaderComponent}
//                 contentContainerStyle={styles.flatlistContainer}
//             />
//         </SafeAreaView>
//     );
// };

// export default Bai3;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     header: {
//         width: '100%',
//         height: 400,
//         backgroundColor: 'lightblue',
//         padding: 20,
//     },
//     flatlistContainer: {
//         // padding: 20,
//         backgroundColor: 'rgba(0,0,0,0.02)',
//     },
//     itemContainer: {
//         backgroundColor: 'white',
//         marginVertical: 5,
//         borderRadius: 10,
//         elevation: 2,
//         shadowColor: 'black',
//         padding: 10,
//         marginHorizontal:10
//     },
//     tag: {
//         marginHorizontal: 10,
//         padding: 10,
//         fontSize: 18,
//         color: 'black',
//         backgroundColor: 'rgba(0,0,0,0.1)',
//         borderRadius: 20,
//     },
// });
