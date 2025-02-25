import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ payload }) => {
	if (payload.length) {
		const kilogram = payload.find((p) => p.dataKey === 'kilogram')?.value;
		const calories = payload.find((p) => p.dataKey === 'calories')?.value;

		return (
			<div
				style={{
					backgroundColor: 'red',
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
					padding: '16px'
				}}
			>
				<p>{`${kilogram} kg`}</p>
				<p>{`${calories} kcal`}</p>
			</div>
		);
	}
	return null;
};

const BarGraph = ({ data }) => {
	const minKilogram = Math.min(...data.map((d) => d.kilogram)) - 1;
	const maxKilogram = Math.max(...data.map((d) => d.kilogram)) + 1;

	return (
		<ResponsiveContainer
			width='100%'
			height={188}
		>
			<BarChart
				data={data}
				barGap={4}
				barSize={15}
				margin={{ top: 16}}
			>
				<CartesianGrid
					strokeDasharray='3'
					vertical={false}
				/>
				<XAxis dataKey='day' />
				<YAxis
					yAxisId='kilogram'
					orientation='right'
					domain={[minKilogram, maxKilogram]}
					tickCount={maxKilogram - minKilogram + 1}
					axisLine={false}
					interval={0}
				/>
				<YAxis
					yAxisId='calories'
					hide={true}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Bar
					yAxisId='kilogram'
					dataKey='kilogram'
					fill='black'
					name='Poids (kg)'
					radius={[10, 10, 0, 0]}
				/>
				<Bar
					yAxisId='calories'
					dataKey='calories'
					fill='red'
					name='Calories brûlées'
					radius={[10, 10, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default BarGraph;
