import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.100" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">Latest News</Text>
              <Text>Article 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">Article 2</Text>
              <Text>Article 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">Article 3</Text>
              <Text>Article 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.200" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">Trending</Text>
              <Text>Trending Article 1</Text>
              <Text>Trending Article 2</Text>
              <Text>Trending Article 3</Text>
            </Box>
            <Box p={4} bg="gray.200" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">Other Info</Text>
              <Text>Additional relevant information.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;