import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function IntroRedirect() {
  return <Redirect to={useBaseUrl('/')} />;
}
