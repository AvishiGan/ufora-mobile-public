import { View, Text } from 'react-native'
import React from 'react'
import PostCard from '../../components/Post/PostCard'

const Post_section = () => {
  return (
    <View>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </View>
  )
}

export default Post_section