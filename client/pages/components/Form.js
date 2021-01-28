import * as React from "react";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import styles from "../../styles/Form.module.css";
import simService from "../services/simServices";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      phone: "",
    };
    this.verify = this.verify.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  verify(e){
      e.preventDefault();
      this.setState({isLoading: true});
      const phone = this.state.phone;
      simService(phone);
  }

  render() {
    return (
      <form onSubmit={this.verify}>
        <Stack spacing={7} className={styles.form}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<PhoneIcon />} />
            <Input name="phone" value={this.state.phone} onChange={this.onChange} type="tel" disabled={this.state.isLoading} placeholder="Phone number" />{" "}
          </InputGroup>
          {!this.state.isLoading ?  <Button colorScheme="blue" type="submit" isFullWidth="true">
            Verify
          </Button> : ""}
          {this.state.isLoading ? <Button
            isLoading
            loadingText="Verifying..."
            colorScheme="teal"
            variant="outline"
          >
            Submit
          </Button> : ""}
        </Stack>
      </form>
    );
  }
}

Form.getInitialProps = async function(){
    const res = await simService();
    console.log(res);
}
export default Form;
