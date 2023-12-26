import { Link } from "react-router-dom"
import "./ChartBox.scss"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    pecentage: number;
    charData: object[];
};

//  All data for Users, Products, Revenue, Ratio came from the ./data file and pass the props in the App.ts 

const ChartBox = (props : Props) => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to="/products" style={{ color: props.color }}> View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.charData}>
                            <Tooltip
                                contentStyle={{ backgroundColor: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 30, y: 50 }}
                            />
                            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{color: props.pecentage<0 ? "tomato" : "limegreen"}}>{props.pecentage}%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox
