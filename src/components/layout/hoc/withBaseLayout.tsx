import React, { ComponentType } from 'react';
import BaseLayout from "@/components/layout/base/baseLayout"

interface Props {
  //eslint-disable-next-line
  [key: string]: any;
}

// Higher-order component to wrap a component with BaseLayout
export const withBaseLayout = <P extends Props>(WrappedComponent: ComponentType<P>) => {
  const WithBaseLayout: React.FC<P> = (props) => (
    <BaseLayout>
      <WrappedComponent {...props} />
    </BaseLayout>
  );

  return WithBaseLayout;
};

export default withBaseLayout;
