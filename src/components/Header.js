import { Button, Container, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";


const Header = () => {
    return (<header>
            <Flex justify={"space-between"} my={"1rem"}>
                <Heading>React Todo List</Heading>
            </Flex>

    </header>);
};

export default Header