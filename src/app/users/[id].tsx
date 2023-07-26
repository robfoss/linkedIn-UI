import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import userJson from '../../../assets/data/user'
import ExperienceListItem from '@/components/ExperienceListItem'
import { User } from '@/types'

const UserProfile = () => {
  const [user, setUser] = useState<User>(userJson)
  const {id} = useLocalSearchParams()
  const navigation = useNavigation()

  const onConnect = () => {
    console.warn('Connect')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.name,
    })
  }, [user.name])


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
     <View style={styles.header}>
        <Image source={{uri: user.backImage}} style={styles.backImage} />
        <View style={styles.headerContent}>
          <Image source={{uri: user.image}} style={styles.image} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={{color: 'gray'}}>{user.position}</Text>
          <Pressable style={styles.button} onPress={onConnect}>
            <Text style={styles.buttonText}>Connect</Text>
          </Pressable>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.paragraph}>{user.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {
            user.experience?.map((experience) => <ExperienceListItem key={experience.id} experience={experience}/>)
          }
          
        </View>
     </View>
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {

  },
  header: {
    backgroundColor: 'white',
    marginBottom: 5

  },
  backImage: {
    width: '100%',
    aspectRatio: 5/2,
    marginBottom: -60
  },
  headerContent: {
    padding: 10,
    paddingTop: 0
  },
  image: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#eee',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#171717',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10
  },
  buttonText: {
    color: '#eee',
    fontWeight: '600'
  },
  section: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5
  },
  paragraph: {
    lineHeight: 20,
   letterSpacing: 0.2
  }
})