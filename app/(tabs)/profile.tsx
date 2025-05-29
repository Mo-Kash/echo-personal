import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import HexagonImageWithBorder from '../components/hexagonImage';

const profile = () => {

  const user = {
    userid: 'sophie89',
    profilePicUrl: images.profilepic, 
    username: '@sophie$89',
    displayName: 'Sophie Fortune',
    bio: `Gamer, dreamer, meme enthusiast. I run on caffeine and chaos. Fluent in sarcasm, bad puns, and Discord emojis. Here to vibe, chat, laugh, and pretend I’m productive.`,
    memberSince: 'May 21, 2020',
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      
      <SafeAreaView className="relative h-44">
        <Image
          source={images.profilebanner}
          className="absolute top-0 left-0 w-full h-full"
          resizeMode="cover"
        />
        <SafeAreaView className="absolute top-4 right-4 flex-row space-x-3">
          <SafeAreaView className="justify-center items-center rounded-full mt-4 bg-ygradient-1 p-2 overflow-hidden mr-2">
              <Image source={icons.homeicon} tintColor="#00000" className="size-4"/>
          </SafeAreaView>
          <SafeAreaView className="justify-center items-center rounded-full mt-4 bg-ygradient-1 p-2 overflow-hidden">
              <Image source={icons.settingsicon} tintColor="#00000" className="size-4"/>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>

      {/* <SafeAreaView className="hexagon">
        <Image source={images.profilepic} className='w-full h-full rounded-full'/>
      </SafeAreaView> */}
{/* 
      <SafeAreaView className="items-start -mt-12 ml-4 w-28 h-28">
          <HexagonImage imageSource={images.profilepic} size={100} borderWidth={6} />
      </SafeAreaView> */}

      <SafeAreaView className="items-start -mt-12 ml-4 w-[120px] h-[120px]">
        <HexagonImageWithBorder
          imageSource={images.profilepic}
          size={120} 
          borderWidth={2}
          gradientColors={['#A73EE7', '#00EBFF']}
        />
      </SafeAreaView>


      <SafeAreaView className="flex-col items-start justify-center mx-6 mt-6 p-6 space-y-2 bg-ygradient-1 rounded-2xl">
        <Text className="text-dark text-lg">{user.displayName}</Text>
        <Text className="text-light-100 text-base">{user.username}</Text>
        <SafeAreaView className="flex-row items-center justify-center space-x-5 mt-2">
          <TouchableOpacity className="bg-blue-900 px-4 py-1 rounded-md">
            <Text className="text-sm text-center text-white">Add Status</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-900 px-4 py-1 rounded-md">
            <Text className="text-sm text-center text-white">Edit Profile</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView className="bg-ygradient-1 mx-6 mt-6 p-4 rounded-2xl">
        <Text className='text-dark text-lg'>Bio</Text>
        <Text className="text-light-200 text-base">{user.bio}</Text>
      </SafeAreaView>

      <SafeAreaView className="bg-ygradient-1 mx-6 mt-4 p-3 rounded-2xl">
        <Text className="text-black">Echo Member Since</Text>
        <Text className="text-light-200 text-base">{user.memberSince}</Text>
      </SafeAreaView>

      {/* <SafeAreaView className="absolute bottom-0 left-0 right-0 bg-gray-900 flex-row justify-around items-center h-16 rounded-t-2xl">
        <Ionicons name="apps" size={24} color="white" />
        <MaterialIcons name="chat-bubble-outline" size={24} color="white" />
        <Ionicons name="call-outline" size={24} color="white" />
        <Ionicons name="settings-outline" size={24} color="white" />
      </SafeAreaView> */}
    </SafeAreaView>

  )
}

export default profile