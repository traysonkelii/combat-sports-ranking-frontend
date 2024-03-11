"use client";

import { mainColor } from "@/styles/Colors";
import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding: 1rem 3rem;
  position: relative;
`;

export const NavbarLinkWrapper = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.2s;
  margin-left: 2rem;
  color: white;
  &:last-child {
    background: ${mainColor};
    padding: 0.5rem 1rem;
    border-radius: 30px;
    &:hover {
      color: white;
    }
  }

  &:hover {
    color: ${mainColor};
  }
`;
