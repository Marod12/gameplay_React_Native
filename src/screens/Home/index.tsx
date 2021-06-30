import React from 'react';
import { Text, View, Image } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles } from './styles';
import { Profile } from '../../components/Profile';

export function Home() {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            
        </View>
    )
}