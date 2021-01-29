import * as React from "react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from "@chakra-ui/react";
import {
    Heading,
    Link,
    Text
  } from "@chakra-ui/react";

const AlertComponent = ({props}) => {
    return (
      <Alert status="info" variant="solid">
        <AlertIcon />
        {props.simDetails && props.simDetails.map((item, index) => 
            <Box flex="1" key={index}>
            <AlertTitle>{item.status}</AlertTitle>
            <AlertDescription display="block">
              <Text>Sim change: {item.no_sim_change}</Text>
              <Text>Las sim change: {item.last_sim_change_at.toLocaleString()}</Text>
              Your application has been received. We will review your application
              and respond within the next 48 hours.
            </AlertDescription>
          </Box>
        )}
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
}

export default AlertComponent;
