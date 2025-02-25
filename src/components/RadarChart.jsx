import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const RadarGraph = ({ data }) => {
	return (
		<ResponsiveContainer
			width='100%'
			height='100%'
		>
			<RadarChart
				data={data}
				margin={{ top: 0, right: 55, bottom: 0, left: 55 }}
			>
				<PolarGrid radialLines={false} />
				<PolarAngleAxis
					dataKey='subject'
					tick={{ fill: 'white', fontSize: 12 }}
				/>
				<Radar
					dataKey='value'
					stroke='red'
					fill='red'
					fillOpacity={0.75}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default RadarGraph;
