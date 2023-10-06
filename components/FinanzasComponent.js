import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const FinanzasComponent = ({
    gastosTotales,
    gastosExtras,
    ingresos,
    categorias,
    mes,
    labor,
    total,
}) => {
    const tableData = [
        ['Gastos Totales', `$${gastosTotales}`],
        ['Gastos Extras', `$${gastosExtras}`],
        ['Ingresos', `$${ingresos}`],
        categorias ? ['Categorías', categorias.join(', ')] : ['No hay categorías disponibles'],
        ['Mes', mes],
        ['Labor', labor],
        ['Total', `$${total}`],
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen de Finanzas</Text>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Rows data={tableData} textStyle={styles.text} />
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        margin: 6,
    },
});

export default FinanzasComponent;
