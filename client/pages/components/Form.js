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
import simCheck from "../../services/simServices";
import { simToast} from "../../services/AlertService";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      phone: "",
      errors: "",
    };
    this.verify = this.verify.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  verify(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    const phone = this.state.phone;
    let sim = simCheck(phone)
      .then((res) => {
        if(res.success){
        const details = {};
        details.changeDate = new Date(res.last_sim_change_at).toDateString();
        details.status = res.status;
        details.simChange = (!res.no_sim_change) ? "No" : "Yes";

        simToast(
          details.status,
          `Last sim changed: ${details.changeDate}. Sim changed in the last 7 days: ${details.simChange}`,
          "success"
        );
        }
          const {errors} = res;
          simToast(errors.title, errors.detail, "error");
        //location.reload();
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.verify}>
          <Stack spacing={7} className={styles.form}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<PhoneIcon />} />
              <Input
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                type="tel"
                disabled={this.state.isLoading}
                placeholder="Phone number"
              />{" "}
            </InputGroup>
            {!this.state.isLoading ? (
              <Button
                colorScheme="blue"
                disabled={!this.state.phone}
                type="submit"
                isFullWidth="true"
              >
                Verify
              </Button>
            ) : (
              ""
            )}
            {this.state.isLoading ? (
              <Button
                isLoading
                loadingText="Verifying..."
                colorScheme="teal"
                variant="outline"
              >
                Submit
              </Button>
            ) : (
              ""
            )}
          </Stack>
        </form>
      </div>
    );
  }
}

export default Form;
