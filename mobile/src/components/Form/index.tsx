import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { api } from '../../libs/api';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';
import { ArrowLeft } from 'phosphor-react-native';
import { theme } from '../../theme';
import { styles } from './styles';
import { FeedbackType } from '../Widget'
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

interface Props {
    feedbackType: FeedbackType;
    onFeedbackCanceled: () => void;
    onFeedbackSend: () => void;
};

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSend }: Props) {

    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const [comment, setComment] = useState('');

    function handleScreenshot() {
        captureScreen({
            format: 'png',
            quality: 1
        }).then(uri => setScreenshot(uri)).catch(error => console.log(error));
    };

    function handleScreenshotRemove() {
        setScreenshot(null);
    };

    async function handleSendFeedback() {
        if (isSendingFeedback) {
            return;
        }

        setIsSendingFeedback(true);

        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'});

        try {
            await api.post('/feedbacks', {
                type: feedbackType,
                screenshot: `data:image/png;base64, ${screenshotBase64}`,
                comment
            });
            console.log(screenshot)
            onFeedbackSend();
        } catch (error) {
            console.log(error);
            setIsSendingFeedback(false);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCanceled}>
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
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setComment}>

            </TextInput>

            <View style={styles.footer}>
                <ScreenshotButton onTakeShot={handleScreenshot} onRemoveShot={handleScreenshotRemove} screenshot={screenshot} />

                <Button onPress={handleSendFeedback} isLoading={isSendingFeedback} />
            </View>

        </View>
    );
};