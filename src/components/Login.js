import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const LoginForm = styled.form`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  height: 400px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const LoginTitle = styled.h2`
  font-size: 24px;
`;

const Label = styled.div`
  text-align: start;
`;

const InputField = styled.div`
  display: grid;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckboxContainer = styled.div`
  justify-content: space-between;
`;

const CheckboxCustom = styled.span`
  display: flex;
  width: 10px;
  height: 10px;
  border: 2px solid #000;
  border-radius: 3px;
`;
const CheckBoxItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckBoxItem2 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const A = styled.a`
text-decoration: none;
`
const Image = styled.img`
  width: 400px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Span = styled.div`
margin-top: 20px;
`

const Login = () => {
  return (
    <Container>
      <Image src="./image/login-img.jpg" alt="" />
      <LoginForm>
        <LoginTitle>Login</LoginTitle>
        <InputField>
          <Label>Login ID </Label>
          <Input type="text" placeholder="Username" />
          <Label>Password </Label>
          <Input type="password" placeholder="Password" />
          <CheckboxContainer>
            <CheckBoxItem>
              <Item>
                <CheckboxCustom />
                <span> Remember Me</span>
              </Item>
              
              <A href="/#">Change Password</A>
            </CheckBoxItem>
            <CheckBoxItem2>
              <CheckboxCustom />
              <span>
                Agree to <a href="/#">Term $ condition</a>{" "}
              </span>
            </CheckBoxItem2>
          </CheckboxContainer>
          <p>Forgot Password</p>
        </InputField>
        <Button type="submit">Log In</Button>
        <Span>
          Don't have an account <a href="/#">Register Here</a>
        </Span>
      </LoginForm>
    </Container>
  );
};

export default Login;
