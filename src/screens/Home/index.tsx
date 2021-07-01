import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        { 
            id: '1', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '30/06 às 21:00h',
            description: 'É hora do show...'
        },
        { 
            id: '2', 
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '30/06 às 21:00h',
            description: 'É hora do show...'
        } 
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    } 

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    } 

    return (
        <Background>
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>

                <View>
                    <CategorySelect 
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />
                </View>

                <View style={styles.content}>
                    <ListHeader 
                        title="Partidas agendadas"
                        subtitle="Total 6"
                    />

                    <FlatList 
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment 
                                data={item}
                                onPress={() => handleAppointmentDetails()}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Background>
    )
}