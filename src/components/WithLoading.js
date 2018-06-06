import React, { Component } from 'react';
import ListLoader from 'components/Loaders/ListLoader'

export default function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props })  {
    if (!isLoading) {
      return (<Component {...props} />);
    }
    else {
      return (<ListLoader />);
    }
  }
}

