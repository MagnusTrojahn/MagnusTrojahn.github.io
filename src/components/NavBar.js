import React, { useState } from 'react';
import { Anchor, Box, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import './Navbar.css'; // Add custom styles

const navLinks = [
  { link: '#about', label: 'About' },
  { link: '#projects', label: 'Projects' },
  { link: '#skills', label: 'Skills' },
  { link: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = navLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className="mainLink"
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className="navbar-header">
      <Container className="navbar-inner">
        
        <Box className="navbar-links" visibleFrom="sm">
          <Group justify="flex-end" className="nav-links">
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className="navbar-burger"
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}
