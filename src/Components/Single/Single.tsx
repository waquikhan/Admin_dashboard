import { Tooltip, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import "./Single.scss"

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart ?:{
    dataKey: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string } [];
};


// Pass the Props and fethch the data feon the user and product and in that file data fetch from the ./data .file

const Single = (props: Props) => {

  return (
    <div className="single">
      <div className="view">
        {/* --- This is For the Details ---------  */}
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]} :</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />

        {/* ---- This is for Charts --------- */}
        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKey.map(dataKey => (
                  <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* --------- This is for Activities ---------  */}
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities &&<ul>
          {props.activities.map(activity =>(
            <li key={activity.text}>
            <div>
              <p>{activity.text}</p>
              <time>{activity.time}</time>
            </div>
          </li>
          ))}
        </ul>}
      </div>
    </div>
  )
}

export default Single
