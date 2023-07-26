import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Experience } from '@/types'

type ExperienceListItemProps = {
    experience: Experience
}

const ExperienceListItem = ({experience}: ExperienceListItemProps) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: experience.companyImage}} style={styles.image} />
        <View>
            <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyName}</Text>

        </View>
        
    </View>
  )
}

export default ExperienceListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray',
        alignItems: 'center',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        marginRight: 5
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
    },

})