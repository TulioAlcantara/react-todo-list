import React from 'react';
import TodoList from './TodoList';
import NewItemInput from './NewItemInput';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';


const Body = () => {
    let toast = useToast()

    const [tasks, setTasks] = useState([{
        title: "Learn React"
    },
    {
        title: "Learn Chakra UI"
    },
    {
        title: "Learn Tailwind CSS"
    }
    ])

    const completeItem = (id) => {
        console.log(id);
        setTasks(tasks.filter(task => task.title !== id))
        toast({
            title: 'Task Completed',
            description: `${id} has been completed`,
            status: 'success',
            isClosable: true,
        })
    }

    const addItem = (title) => {
        setTasks([...tasks, { title }])
        toast({
            title: 'Task Added',
            description: `${title} has been added`,
            status: 'info',
            isClosable: true,
        })
    }

    return (<>
        <NewItemInput onAddItem={addItem}></NewItemInput>
        <TodoList tasks={tasks} onCompleteItem={completeItem}></TodoList>
    </>)
};

export default Body;
