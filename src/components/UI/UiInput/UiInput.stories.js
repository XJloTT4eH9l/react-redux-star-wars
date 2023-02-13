import { useState } from "react";
import UiInput from "./UiInput";

export default {
    title: 'Ui-kit/UiInput',
    component: UiInput
};

const Template = (arg) => {
    const [value, setValue] = useState('');

    const handleInputChange = (value) => {
        setValue(value)
    }

    return (
        <UiInput 
            {...arg}
            value={value}
            handleInputChange={handleInputChange}
        />
    )
}

const props = {
    value: '',
    handleInputChange: () => console.log('Input changed'),
    placeholder: 'placeholder',
    classes: '',
}

export const Default = Template.bind({});

Default.args = {
    ...props
};