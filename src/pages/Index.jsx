import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3">
          <VStack align="start" spacing={4}>
            <Text fontSize="3xl" fontWeight="bold">
              Latest News
            </Text>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="xl" fontWeight="bold">
                Article 1
              </Text>
              <Text>Summary of the latest news article 1...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="xl" fontWeight="bold">
                Article 2
              </Text>
              <Text>Summary of the latest news article 2...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="xl" fontWeight="bold">
                Article 3
              </Text>
              <Text>Summary of the latest news article 3...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" bg="gray.100" p={4} shadow="md" borderWidth="1px">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Trending
          </Text>
          <VStack align="start" spacing={4}>
            <Text>Trending Article 1</Text>
            <Text>Trending Article 2</Text>
            <Text>Trending Article 3</Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;