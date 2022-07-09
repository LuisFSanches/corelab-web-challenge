import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { IUser } from "../../types/User";
import {
  Container,
  FormGroup,
  LogoContainer,
  SignUpInformationContainer,
  Form,
  SignInContainer,
  ErrorMessage,
} from "./style";

export function SignInPage() {
  const { handleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IUser>();

  const navigate = useNavigate();

  const handleLoginSubmit = async (data: IUser) => {
    const { email, password } = data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await handleLogin(email, password);

    const erros = [400, 403, 404];

    if (response !== undefined) {
      if (erros.includes(response.response.status)) {
        setError("password", {
          type: "custom",
          message: "Email ou senha invalidos.",
        });
      } else {
        navigate("/");
      }
    }
  };

  return (
    <Container>
      <SignInContainer>
        <LogoContainer>
          <img src={Logo} alt="" />
          <h2>Acesse sua conta</h2>
        </LogoContainer>

        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <FormGroup isSignUp={false}>
            <label>Email:</label>
            <input
              type="text"
              {...register("email", { required: "Email ou senha invalidos." })}
            />
          </FormGroup>

          <FormGroup isSignUp={false}>
            <label>Password:</label>
            <input
              type="password"
              {...register("password", {
                required: "Email ou senha invalidos.",
              })}
            />
          </FormGroup>

          <button>Entrar</button>
          <ErrorMessage>
            {errors.email?.message || errors.password?.message}
          </ErrorMessage>
        </Form>

        <SignUpInformationContainer>
          <Link to="/cadastro">
            <span>Ainda nao tem conta? Cadastre-se</span>
          </Link>
        </SignUpInformationContainer>
      </SignInContainer>
    </Container>
  );
}
