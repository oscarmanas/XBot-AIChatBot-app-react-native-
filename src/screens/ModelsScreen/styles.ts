import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
    },
    backButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modelCard: {
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modelText: {
        fontSize: 16,
        color: 'white',
    },
    selectedModel: {
        borderColor: '#F0433A',
        borderWidth: 2,
    },
});