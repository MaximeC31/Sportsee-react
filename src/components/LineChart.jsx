import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const formatSessions = (sessions) => {
	return [{ name: '', sessionLength: 30 }, ...sessions, { name: '', sessionLength: 30 }];
};

const CustomTooltip = ({ payload }) => {
	if (payload.length) {
		return (
			<div
				className='custom-tooltip'
				style={{ padding: '16px', backgroundColor: 'white' }}
			>
				<p>{`${payload[0].value} min`}</p>
			</div>
		);
	}
	return null;
};

const LineGraph = ({ data }) => {
	const formattedSessions = formatSessions(data);

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'
		>
			<LineChart
				data={formattedSessions}
				margin={{ right: -16, left: -16, bottom: 16 }}
			>
				<XAxis
					dataKey='name'
					axisLine={false}
					tickLine={false}
					tick={{ fill: 'white', fontSize: 14 }}
					padding={{ left: 0, right: 0 }}
				/>
				<YAxis
					hide={true}
					domain={['dataMin - 8', 'dataMax + 8']}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Line
					type='monotone'
					dataKey='sessionLength'
					stroke='white'
					dot={false}
					strokeWidth={2}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineGraph;
