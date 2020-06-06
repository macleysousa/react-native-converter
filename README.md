# react-native-converter

[![npm](https://img.shields.io/npm/v/react-native-converter.svg)](https://www.npmjs.com/package/react-native-converter) 
[![license](https://img.shields.io/npm/l/react-native-material-menu.svg)](https://github.com/mxck/react-native-converter/blob/master/LICENSE)


## Install

Using yarn

```sh
yarn add react-native-converter
```

or using npm

```sh
npm install --save react-native-converter
```

## numberToString
```jsx
import * as converter from 'react-native-converter';

converter.numberToString(1000.5, 'N2'); //result 1.000,50
```

### Properties

value   | format            | description                            |
:------ | :---------------- | :------------------------------------- |
 number | N0                | return string  ex: 1.000               |
 number | N1                | return string  ex: 1.000,0             |
 number | N2                | return string  ex: 1.000,00            |
 number | N3                | return string  ex: 1.000,000           |
 number | N4                | return string  ex: 1.000,0000          |   

## dateToString
```jsx
import * as converter from 'react-native-converter';

converter.dateToString(new Date(), 't'); //result 13:00

converter.dateToString(new Date(), 'd','en-US'); //result 2020/01/02

converter.dateToString(new Date(), 'd','pt-BR'); //result 02/01/2020
```

### Properties

value   | format            | description                              |
:------ | :---------------- | :--------------------------------------- |
 Date   | t                 | return string  ex: `13:00`               |
 Date   | T                 | return string  ex: `13:00:00`            |
 Date   | d                 | return string  ex: `2020/01/02`          |
 Date   | g                 | return string  ex: `2020/01/02 13:30`    |
 Date   | G                 | return string  ex: `2020/01/02 13:30:12` | 
 Date   | M                 | return string  ex: `01 January`          | 
 Date   | M3                | return string  ex: `01 Jan`              | 

## License

MIT License. © Macley Sousa

[text component]: https://facebook.github.io/react-native/docs/text.html
[react-native-vector-icons]: https://github.com/oblador/react-native-vector-icons
[expo icons]: https://docs.expo.io/versions/latest/guides/icons/
