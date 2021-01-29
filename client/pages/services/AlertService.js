import { createStandaloneToast } from "@chakra-ui/react"
  export const simToast = (title, description, status) => {
    const toast = createStandaloneToast();
    toast({
      position: "top",
      title: title,
      description: description,
      status: status,
      duration: 9000,
      isClosable: true,
      onCloseComplete: redirect()
    })
  }

  const redirect = ()  => {
    
  }