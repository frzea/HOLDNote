import { useThemeStore } from '../../store/themeStore'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useLocation, useNavigate } from "react-router-dom";

export function Header(){
   const { isDark,toggleMode } = useThemeStore()
   const location = useLocation();
   const navigate = useNavigate();
   const isCoinPage = location.pathname.includes("/coin/");

   return(
      <div className='flex pt-3 items-center gap-2'>
         {isCoinPage && <Button className="md:hidden" onClick={() => navigate(-1)} >{"<-"}</Button>}
         <div>HOLDNote</div>
         <Switch onClick={toggleMode} checked={isDark} className= {`ml-auto ${isCoinPage ? 'hidden md:block' : ''}`}/>
      </div>
   )
}