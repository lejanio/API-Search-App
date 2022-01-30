import styled from 'styled-components';

type ImageProps = {
    height: string;
}

export const Image = styled.img<ImageProps>`
  height: ${({ height }: ImageProps) => height};
`;
