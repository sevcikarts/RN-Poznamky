import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';

export default function ReviewForm({addReview}) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '',}}
        onSubmit={(values) => addReview(values)}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Nadpis poznámky...'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.inputDetail}
              multiline
              placeholder='Detail poznámky...'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            
            
            <Button  color='tomato' title="Uložit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}