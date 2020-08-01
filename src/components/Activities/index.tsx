import React from "react";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Text,
  Title,
  Sublime,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  DateLabel,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../assets/avatar.png";

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Text>
          <Title style={{ fontWeight: "bold" }}>Atividades</Title>
          <Sublime>
            <Title
              style={{
                color: "#10c86e",
                textDecorationLine: "underline",
              }}
            >
              Teste
            </Title>
            <Title>&nbsp;&nbsp;Minhas</Title>
          </Sublime>
        </Text>

        <Card>
          <CardHeader>
            <Avatar source={avatar} />
            <Description>
              <Bold>Você</Bold> pagou a <Bold>@KindSloth</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <Username>Guilherme</Username>
          </CardBody>

          <CardFooter>
            <Details>
              <Value>R$ 10,00</Value>

              <Divider />

              <Feather name="lock" color="#FFF" />
              <DateLabel>há 1 mês</DateLabel>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#fff"
                />
                <OptionLabel>0</OptionLabel>
                <AntDesign name="hearto" size={14} color="#fff" />
                <OptionLabel>0</OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>
      </Header>
    </Container>
  );
};

export default Activities;
