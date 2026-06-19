import { useThemeStore } from '../../store/themeStore'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useLocation, useNavigate,Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react"

export function Header(){
   const { isDark,toggleMode } = useThemeStore()
   const location = useLocation();
   const navigate = useNavigate();
   const isCoinPage = location.pathname.includes("/coin/");

   return(
      <div className='flex pt-3 items-center gap-2 md:px-3'>
         {isCoinPage && <Button  variant="outline" size='sm' className="md:hidden" onClick={() => navigate(-1)} ><ArrowLeftIcon/></Button>}
         <div className='text-lg'>
            <Link to={'/'} className="font-semibold truncate">
               HOLDNote
            </Link>
         </div>
         <Switch onClick={toggleMode} checked={isDark} className= {`ml-auto ${isCoinPage ? 'hidden md:block' : ''}`}/>
      </div>
   )
}