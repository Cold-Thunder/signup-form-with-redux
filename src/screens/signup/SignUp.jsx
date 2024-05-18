import { Formik, useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux'
import React from "react";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { addUser } from "./signupSlice";

const SignUp = () => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: ''
        },
        onSubmit: (values, { resetForm }) => {
            values.id = new Date().getTime()
            dispatch(addUser(values))
            resetForm({ values: '' })
        }
    })
    return (
        <SafeAreaView style={[styles.center, styles.mainSec]}>
            <View style={[styles.center, styles.formPlace]}>
                <View style={[styles.center, styles.formSec]}>
                    <Text style={styles.heading}>Sign Up</Text>
                    <View style={[styles.center, styles.form]}>
                        <Formik onSubmit={formik.handleSubmit}>
                            <View style={[styles.center, styles.formView]}>
                                <View style={[styles.center, styles.inSec]}>
                                    <TextInput style={styles.int} value={formik.values.name} onChangeText={formik.handleChange('name')} placeholder="name"></TextInput>
                                </View>
                                <View style={[styles.center, styles.inSec]}>
                                    <TextInput style={styles.int} value={formik.values.email} onChangeText={formik.handleChange('email')} placeholder="email"></TextInput>
                                </View>
                                <TouchableOpacity onPress={formik.handleSubmit} style={[styles.center, styles.btn]}>
                                    <Text style={styles.btnText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </Formik>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;
const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainSec: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    formPlace: {
        width: '100%',
        height: '40%',
    },
    formSec: {
        paddingVertical: 20,
        width: '90%',
        height: 250,
        backgroundColor: 'gray',
        borderRadius: 10,
        elevation: 3
    },
    heading: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    form: {
        width: '100%'
    },
    formView: {
        width: '100%'
    },
    inSec: {
        width: '100%',
    },
    int: {
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '90%',
        height: 50,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'skyblue',
        borderRadius: 10,
    },
    btn: {
        backgroundColor: 'green',
        width: 150,
        height: 45,
        borderRadius: 10,
        elevation: 3
    },
    btnText: {
        fontSize: 28,
        color: 'white'
    },
})