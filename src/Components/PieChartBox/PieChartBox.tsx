import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import "./PieChartBox.scss"


const data = [
    { name: "mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Table", value: 200, color: "#FF8042" },
];
const PieChartBox = () => {
    return (
        <div className="pieChartBox">
            <h1>Leads by sources</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart >
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "10px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={100}
                            outerRadius={120}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map(item=>(
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor:item.color}}/>
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox
