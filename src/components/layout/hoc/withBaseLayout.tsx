import React, { ComponentType } from 'react';
import BaseLayout from "@/components/layout/base/baseLayout"

/**
 * withBaseLayout Higher-Order Component (HOC)
 *
 * This higher-order component wraps a given component with the BaseLayout. It is used to
 * apply a consistent layout structure to any page or component without manually adding
 * the BaseLayout component to each page.
 *
 * The `withBaseLayout` HOC allows components to inherit the BaseLayout's structure (e.g.,
 * sticky header, responsive footer) while maintaining the ability to customize the content of
 * the page being wrapped.
 *
 * Usage:
 * - To apply BaseLayout to any component, wrap it with `withBaseLayout`. The wrapped component
 *   will inherit the layout structure.
 *
 * Example:
 *
 * ```tsx
 * import { withBaseLayout } from "@/components/layout/base/withBaseLayout";
 *
 * const SomePage = () => {
 *   return <div>Page content</div>;
 * };
 *
 * export default withBaseLayout(SomePage);
 * ```
 *
 * Props:
 * - WrappedComponent (ComponentType<P>): The component that will be wrapped and rendered
 *   inside the BaseLayout.
 *
 * Returns:
 * - A new component (`WithBaseLayout`) that renders the wrapped component inside the
 *   BaseLayout.
 */

interface Props {
  //eslint-disable-next-line
  [key: string]: any;
}

export const withBaseLayout = <P extends Props>(WrappedComponent: ComponentType<P>) => {
  const WithBaseLayout: React.FC<P> = (props) => (
    <BaseLayout>
      <WrappedComponent {...props} />
    </BaseLayout>
  );

  return WithBaseLayout;
};

export default withBaseLayout;
