import React from 'react';
import i18n from 'i18n-js';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { useModel } from '../../context/ModelContext';

const models = ["gpt-4o", "gpt-4.1"/* , "deepseek/deepseek-r1:free" */];

const ModelsScreen = () => {
    const { modelVersion, setModelVersion } = useModel();

    const handleSelectModel = (model: string) => {
        setModelVersion(model);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{i18n.t('selectModel')}</Text>
            <FlatList
                data={models}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.modelCard, item === modelVersion && styles.selectedModel]}
                        onPress={() => handleSelectModel(item)}
                    >
                        <Text style={styles.modelText}>{item}</Text>
                        {item === modelVersion && <FontAwesome name="check-circle" size={22} color="white" />}
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ModelsScreen;