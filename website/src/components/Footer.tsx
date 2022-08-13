import { Box, Spacer, Text } from "design-system";
import Container from "./Container";

const Footer = () => (
  <>
    <Spacer space={9} />
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingTop={7}
      backgroundColor="code"
    >
      <Container>
        <Text color="background">&copy; Samuel Kraft</Text>
      </Container>
      <Spacer space={9} />
      <Spacer space={9} />
    </Box>
  </>
);

export default Footer;
