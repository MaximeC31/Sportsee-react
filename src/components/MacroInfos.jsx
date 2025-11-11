const MacroInfos = ({ data, icon }) => {
	return (
		<article className={'dashboard__macro__infos'}>
			<img
				className={data.className}
				src={icon}
				alt={data.macroType}
			/>
			<div>
				<p>
					{data.quantity}
					{data.unit}
				</p>
				<p>{data.name}</p>
			</div>
		</article>
	);
};

export default MacroInfos;
