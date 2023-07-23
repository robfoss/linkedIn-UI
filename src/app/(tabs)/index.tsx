import { StyleSheet } from 'react-native';
import { Text, View } from '../../../src/components/Themed';
import PostListItem from '@/components/PostListItem';
import posts from '../../../assets/data/posts'  ;




export default function TabOneScreen() {
  const firstPost = posts[0];
  return (
    <View style={styles.container}>
     <PostListItem post={firstPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
});
