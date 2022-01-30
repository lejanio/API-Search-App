import styled from 'styled-components';

type PaddedContainerProps = {
    padding: string;
    bg: string;
}

export const StyledMainSection = styled.div`
  display: grid;
  margin: 2.5em auto;
  border-radius: 5px;
`;

export const PaddedContainer = styled.div`
  margin: 0 0 2.5em 0;
  padding: ${({ padding }: PaddedContainerProps) => padding};
  background-color: ${({ bg }: PaddedContainerProps) => bg};
`;

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 1.5rem;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

export const GridItemContainer = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr 8rem 4rem;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 25em;
  box-shadow: rgba(16, 16, 16, 0.36) 0 2px 8px 0;;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: rgba(253, 145, 145, 249) -1px 1px 16px;
    transform: scale(0.98);
  }
`;

export const GridItemHeading = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.2em;
  padding: 0.5em 1em 0.5em 0.75em;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const GridItemImageContainer = styled.div`
  display: flex;
  height: 22em;
  padding: 1em;
  border-top: 0.25rem solid floralwhite;
  border-bottom: 0.25rem solid floralwhite;
`;

export const GridItemImage = styled.img`
  height: 100%;
  width: 100%;
  transition: transform 0.3s;
  object-fit: contain;
`;

export const GridItemDescription = styled.p`
  display: flex;
  font-size: 0.65rem;
  padding: 0.325em 0.65em 0.325em 0.65em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const GridItemPrice = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.65em 0.65em 0.325em 0.65em;
  border-top: 0.25rem solid floralwhite;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
