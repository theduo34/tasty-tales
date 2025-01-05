import Home from '@/components/shared/common/home';
import withBaseLayout from "@/components/layout/hoc/withBaseLayout";

const HomePage = () => {
  return(
   <div>
     <Home/>
   </div>
  )
}
export default withBaseLayout(HomePage);