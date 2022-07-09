import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { IUser } from "../../types/User";
import {
  Container,
  FormGroup,
  LogoContainer,
  Form,
  SignInContainer,
} from "../SignIn/style";
import { ErrorMessage } from "./style";

export function SignUpPage() {
  const { handleSignUp } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IUser>();

  const navigate = useNavigate();

  const handleSignUpSubmit = async (data: IUser) => {
    const { name, email, password } = data;
    const response = await handleSignUp(name, email, password);
    if (response !== undefined) {
      if (response === 403) {
        return setError("email", {
          type: "custom",
          message: "Email já cadastrado",
        });
      }
      navigate("/");
    }
  };

  return (
    <Container>
      <SignInContainer>
        <LogoContainer>
          <img src={Logo} alt="" />
          <h2>Cadastre-se. É grátis</h2>
        </LogoContainer>

        <Form onSubmit={handleSubmit(handleSignUpSubmit)}>
          <FormGroup isSignUp>
            <label>Nome:</label>
            <input
              type="text"
              {...register("name", { required: "Nome inválido." })}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </FormGroup>

          <FormGroup isSignUp>
            <label>Email:</label>
            <input
              type="text"
              {...register("email", { required: "Email inválido." })}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </FormGroup>

          <FormGroup isSignUp>
            <label>Password:</label>
            <input
              type="password"
              {...register("password", { required: "Senha inválida." })}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </FormGroup>

          <button>Cadastrar</button>
        </Form>
      </SignInContainer>
    </Container>
  );
}
