import { images } from '@/constants/images';
import React from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';

const chat = () => {

    const chats = [
        {
            id: 1,
            name: 'RITA',
            icon: images.profilepic,
            recentText: 'What\'s up?'
        },
        {
            id: 2,
            name: 'RITA',
            icon: images.profilepic,
            recentText: 'What\'s up?'
        },
        {
            id: 3,
            name: 'RITA',
            icon: images.profilepic,
            recentText: 'What\'s up?'
        },
        {
            id: 4,
            name: 'RITA',
            icon: images.profilepic,
            recentText: 'What\'s up?'
        },
        {
            id: 5,
            name: 'RITA',
            icon: images.profilepic,
            recentText: 'What\'s up?'
        },
        {
            id: 6,
            name: 'RITA',
            icon: images.profilepic,
            recentText: 'What\'s up?'
        },
        {
            id: 7,
            name: 'RITA',
            icon: images.profilepic,
            recentText: 'What\'s up?'
        }
    ];


  return (
    <SafeAreaView className='flex-1'>
        <SafeAreaView className="relative h-44">
            <Image
            source={images.chatbanner}
            className="absolute top-0 left-0 w-full h-full"
            resizeMode="cover"
            />
            <Text className="absolute top-16 left-10 text-white text-3xl font-bold z-10">
            Messages
            </Text>
        </SafeAreaView>
        <SafeAreaView
            className="flex-1 bg-dark pt-5"
            style={{
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                overflow: 'hidden',
                marginTop: -60,
            }}
        >
            <FlatList
            data={chats}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 100,
            }}
            renderItem={({ item: chat, index }) => (
                <TouchableOpacity
                    className="flex-row items-center px-4 py-5"
                    style={{marginBottom: index === chats.length - 1 ? 0 : 12,}}
                    onPress={() => {}}
                >
                    <Image
                        source={chat.icon}
                        className="w-14 h-14 rounded-full"
                        resizeMode="cover"
                    />
                    <SafeAreaView className="ml-4 flex-1">
                        <Text
                        className="text-white font-semibold text-base"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        >
                        {chat.name}
                        </Text>
                        <Text
                        className="text-gray-500 text-sm"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        >
                        {chat.recentText}
                        </Text>
                    </SafeAreaView>
                </TouchableOpacity>
            )}
            />
        </SafeAreaView>
    </SafeAreaView>
  )
}

export default chat