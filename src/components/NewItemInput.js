import {
    Input,
    InputGroup,
    InputRightElement,
    Button
} from '@chakra-ui/react'
import { useState } from 'react';


const NewItemInput = ({ onAddItem }) => {
    const [item, setItem] = useState('')
    const [isValid, setIsValid] = useState(true)

    const handleItemInputChange = (e) => {
        let inputText = e.target.value;
        setItem(inputText);
        if (inputText.length > 0) {
            setIsValid(true);
        }
    }

    const addItem = () => {
        if (item.length > 0) {
            setIsValid(true);
            setItem('');
            onAddItem(item);
            return;
        }

        setIsValid(false)
    }

    return <InputGroup size='md' mb={"1rem"}>
        <Input
            value={item}
            pr='4.5rem'
            placeholder='Enter new task'
            onChange={handleItemInputChange}
            errorBorderColor='crimson'
            isInvalid={!isValid}
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={addItem}>
                Add
            </Button>
        </InputRightElement>
    </InputGroup>;
};

export default NewItemInput;
