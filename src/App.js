import React from 'react';
import {
  Container,
  Group,
  Button,
  Text,
  Title,
  Stack,
  Image,
  AppShell,
  Header,
  Footer,
  Anchor,
} from '@mantine/core';

function App() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Group position="apart">
            <Title order={3}>Magnus Trojahn</Title>
            <Group>
              <Anchor href="#projects">Projects</Anchor>
              <Anchor href="#about">About</Anchor>
              <Anchor href="#contact">Contact</Anchor>
            </Group>
          </Group>
        </Header>
      }
      footer={
        <Footer height={60} p="md">
          <Group position="apart">
            <Text size="sm">© 2025 Magnus Trojahn</Text>
            <Group spacing="xs">
              <Anchor href="https://github.com/magnustrojahn" target="_blank">GitHub</Anchor>
              <Anchor href="https://linkedin.com/in/magnustrojahn" target="_blank">LinkedIn</Anchor>
            </Group>
          </Group>
        </Footer>
      }
    >
      <Container>
        <Stack spacing="xl" align="center" justify="center" style={{ minHeight: '70vh' }}>
          <Title order={1}>Hi, I'm Magnus 👋</Title>
          <Text align="center" size="lg" maw={600}>
            I'm a passionate developer who loves building creative tech projects — from web apps to physical computing.
          </Text>
          <Button size="md" component="a" href="#projects">
            View My Work
          </Button>
          <Image
            src="https://source.unsplash.com/600x400/?technology,code"
            alt="Portfolio preview"
            radius="md"
            mt="xl"
          />
        </Stack>
      </Container>
    </AppShell>
  );
}

export default App;
