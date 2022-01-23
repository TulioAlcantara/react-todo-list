import { CheckIcon } from '@chakra-ui/icons';
import {
    List,
    ListItem,
    Flex,
    Text,
    IconButton,
} from '@chakra-ui/react'

function TodoList({ tasks, onCompleteItem }) {

    return <>
        <List spacing={3}>
            {tasks.map((task) => {
                return <ListItem key={task.title} backgroundColor="gray.700" borderRadius={'5px'} p={'10px'}>
                    <Flex justify={"space-between"} align={'center'}>
                        <Text>{task.title}</Text>
                        <IconButton colorScheme={'green'} aria-label='Remove task' icon={<CheckIcon />} onClick={() => onCompleteItem(task.title)}></IconButton>
                    </Flex>
                </ListItem>
            })}

        </List>
    </>;
}

export default TodoList;
