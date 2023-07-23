import { StyleSheet, Text, View, ScrollView} from 'react-native'
import posts from '../../../assets/data/posts'
import React from 'react'
import PostListItem from '@/components/PostListItem'
import { useLocalSearchParams } from 'expo-router'

const PostDetailsScreen = () => {
  const {id} = useLocalSearchParams()
    const post = posts.find((post) => post.id === id) || posts[0]

    if (!post) return <Text>Post not found</Text>
  return (
   <ScrollView>
     <PostListItem post={post} />
   </ScrollView>
  )
}

export default PostDetailsScreen

const styles = StyleSheet.create({})