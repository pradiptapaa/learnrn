import React, { useState, useReducer } from 'react'
import { View } from 'react-native';
import ColorCounter from '../component/ColorCounter';

const reducer = (state, action) => {
    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const COLOR_CHANGE = 30

const ColorScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    return (
        <View>
            <ColorCounter
                color={'red'}
                onIncrease={() => dispatch({ type: 'red', payload: COLOR_CHANGE })}
                onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_CHANGE })}
            />
            <ColorCounter
                color={'green'}
                onIncrease={() => dispatch({ type: 'green', payload: COLOR_CHANGE })}
                onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_CHANGE })}
            />
            <ColorCounter
                color={'blue'}
                onIncrease={() => dispatch({ type: 'blue', payload: COLOR_CHANGE })}
                onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_CHANGE })}
            />
            <View
                style={{
                    height: 100,
                    borderRadius: 8,
                    marginHorizontal: 10,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }} />
        </View>
    )

};

export default ColorScreenReducer;