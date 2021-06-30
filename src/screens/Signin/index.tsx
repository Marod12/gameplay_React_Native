import React from 'react';
import { Text, View, Image } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import illustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function Signin() {
    return (
        <View style={styles.container}>
            <Image 
                source={illustrationImg} 
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar com Discord"
                    activeOpacity={0.7}
                />
            </View>
        </View>
    );
}