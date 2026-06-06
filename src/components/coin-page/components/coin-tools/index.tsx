import { PNL } from "./pnl/index"
import { TaskScheduler } from "./todo/index";


export function CoinTools(){
    return(
        <div id="coin-tools">
            <div>
                <PNL/>
            </div>
            <div>
                <TaskScheduler/>
            </div>
        </div>
    )
}