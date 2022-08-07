import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { USER_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const commingFrom = location.state?.from?.pathname || "/"

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password })).then
        ((res) => {
          if (res.type === USER_LOGIN_SUCCESS) {
            navigate(commingFrom, { replace: true })
          }
        });
    }
  };

  return (
    <Container border="1px solid" mt="10" borderRadius="10">
      <Text fontSize="30" mt="3">
        Login
      </Text>
      <Box p="20px">
        <form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email address"
            value={email}
            type="email"
          />
          <br />
          <br />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            value={password}
            type="password"
          />
          <br />
          <br />
          <Button type="submit" variant="solid" colorScheme="red" > LOGIN</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
