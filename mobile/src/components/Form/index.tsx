import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { theme } from '../../theme';
import { styles } from './styles';
import { FeedbackType } from '../Widget'
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';

interface Props {
    feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image source={feedbackTypeInfo.image} style={styles.image} />

                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                style={styles.input}
                multiline
                placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo!"
                placeholderTextColor={theme.colors.text_secondary}>

            </TextInput>

            <View style={styles.footer}>
                <ScreenshotButton onTakeShot={() => {}} onRemoveShot={() => {}} screenshot=""/>
            </View>

        </View>
    );
};