
/**
 * FrameLayout Component
 *
 * This component serves as a default layout frame for wrapping around all other components
 * that require a consistent structure in terms of spacing, padding, and responsiveness.
 * to provide a uniform layout for the application's pages or views.
 *
 * **Props:**
 * - `children` (React.ReactNode): The child element is  a component that will be rendered within the frame layout.
 *
 */
const FrameLayout = ({children}: {
  children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen px-4 md:px-[7%] pt-[7%]">
      { children }
    </div>
  )
} 
export default FrameLayout