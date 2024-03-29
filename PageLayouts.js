import React from 'react';
import RebelAlliance from './img/rebel_alliance.svg';
import XWing from './img/x-wing.svg';
import YWing from './img/y-wing.svg';
import BWing from './img/b-wing.svg';
import MillenniumFalcon from './img/millennium-falcon.svg';
import Appear from './components/Appear';

const Grid = ({ style, ...props }) => (
  <div
    {...props}
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridColumnGap: '0px',
      gridRowGap: '0px',
      width: '80vw',
      height: '50vh',
      ...style,
    }}
  />
);
const inlineFlex = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const SectionTop = ({ style, ...props }) => (
  <div
    {...props}
    style={{
      gridArea: '1 / 1 / 2 / 5',
      ...inlineFlex,
      ...style,
    }}
  />
);

const SectionLeft = ({ style, ...props }) => (
  <div
    {...props}
    style={{
      gridArea: '2 / 1 / 5 / 2',
      ...inlineFlex,
      ...style,
    }}
  />
);

const SectionRight = ({ style, ...props }) => (
  <div
    {...props}
    style={{
      gridArea: '2 / 2 / 5 / 5',
      ...inlineFlex,
      ...style,
    }}
  />
);

export function InitialPageLayout() {
  return (
    <Grid>
      <SectionLeft style={{ backgroundColor: 'silver' }}>
        <Appear>TEAM X</Appear>
      </SectionLeft>
      <SectionRight style={{ backgroundColor: 'silver', borderLeft: '2px solid white' }}>
        <Appear>TEAM Y (but not really)</Appear>
      </SectionRight>
      <SectionTop style={{ backgroundColor: 'silver', borderBottom: '2px solid white' }}>
        <Appear>???</Appear>
      </SectionTop>
    </Grid>
  );
}

export function AssignedPageLayout() {
  return (
    <Grid>
      <SectionLeft style={{ backgroundColor: 'lightpink', color: 'red' }}>
        <Appear>
          <XWing width="4rem" className="mx-auto" aria-hidden="true" />
        </Appear>
      </SectionLeft>
      <SectionRight style={{ backgroundColor: 'palegoldenrod', color: 'goldenrod' }}>
        <Appear>
          <YWing width="5rem" className="mx-auto" aria-hidden="true" />
        </Appear>
      </SectionRight>
      <SectionTop style={{ backgroundColor: 'lightblue', color: 'royalblue' }}>
        <Appear>
          <BWing width="3rem" className="" aria-hidden="true" />
        </Appear>
      </SectionTop>
    </Grid>
  );
}

export function ShipsPageLayout() {
  return (
    <div className="relative">
      <Grid>
        <SectionLeft
          style={{
            backgroundColor: 'lightpink',
            flexDirection: 'column',
            color: 'red',
          }}
        >
          <XWing width="4rem" className="mx-auto" aria-hidden="true" />
          <ul className="text-sm list list-disc">
            <li>fastest</li>
            <li>small impact</li>
          </ul>
        </SectionLeft>
        <SectionRight
          style={{
            backgroundColor: 'palegoldenrod',
            flexDirection: 'column',
            color: 'goldenrod',
          }}
        >
          <YWing width="5rem" className="mx-auto" aria-hidden="true" />
          <ul className="text-sm list list-disc">
            <li>fast</li>
            <li>stable</li>
          </ul>
        </SectionRight>
        <SectionTop
          style={{ backgroundColor: 'lightblue', color: 'royalblue' }}
        >
          <BWing width="3rem" className="" aria-hidden="true" />
          <ul className="text-sm list list-disc ml-4">
            <li>slow</li>
            <li>large impact</li>
          </ul>
        </SectionTop>
      </Grid>
    </div>
  );
}

export function HelperShipsLayout() {
  return (
    <div className="relative">
      <Grid>
        <SectionLeft
          style={{
            backgroundColor: 'lightpink',
            flexDirection: 'column',
            color: 'red',
          }}
        >
          <XWing width="4rem" className="mx-auto"/>
        </SectionLeft>
        <SectionRight
          style={{
            backgroundColor: 'palegoldenrod',
            flexDirection: 'column',
            color: 'goldenrod',
          }}
        >
          <YWing width="5rem" className="mx-auto"/>
          
        </SectionRight>
        <SectionTop
          style={{ backgroundColor: 'lightblue', color: 'royalblue' }}
        >
          <BWing width="3rem" className=""/>
        </SectionTop>
      </Grid>
      <Appear>
        <MillenniumFalcon
          color="dimgray"
          width="5rem"
          className="absolute bottom-0 right-0"
        />
      </Appear>
    </div>
  );
}