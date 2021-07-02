import React from 'react';
import { Text, View } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    const { user } = useAuth();

    return (
       <View style={styles.container}>

            <Avatar 
                urlImage={ user.avatar === null 
                ? 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg' 
                : user.avatar } 
            />
            
           <View>
               <View style={styles.user}>
                   <Text style={styles.greeting}>
                       Olá,
                   </Text>

                   <Text style={styles.username}>
                       { user.firstName }
                   </Text>
               </View>

               <Text style={styles.message}>
                   Hoje é dia de vitória
               </Text>
           </View>

       </View> 
    )
}