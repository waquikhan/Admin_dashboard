import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import "./BarChartBox.scss"

type Props ={
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
};

const BarChartBox = ( props : Props) => {
  return (

//  All data for Total Earned, Total visit cam from the ./data file and pass the props in the App.ts 
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={props.chartData}>
                    <Tooltip
                        contentStyle={{background:"#2e3447", borderRadius:"5px"}}
                        labelStyle={{display:"none"}}
                        cursor={{fill:"none"}}
                    />
                <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
             </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox
