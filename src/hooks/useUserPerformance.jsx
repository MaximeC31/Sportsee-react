import { useState, useEffect } from 'react';
import { getUserPerformance } from '../utils/api.js';
import { mockedUserPerformance } from '../utils/mocker.js';

const kindTemplate = {
	1: 'Cardio',
	2: 'Energie',
	3: 'Endurance',
	4: 'Force',
	5: 'Vitesse',
	6: 'Intensité',
};

const kindConverter = (kindEl) => {
	for (const pattern in kindTemplate) {
		if (Number(pattern) === kindEl) {
			return kindTemplate[pattern];
		}
	}
	return null;
};

const createFacadeObject = (entry) => {
	return {
		subject: kindConverter(entry.kind),
		value: entry.value,
	};
};

export const useUserPerformance = (id = '12') => {
	const [userPerformance, setUserPerformance] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await getUserPerformance(id);

				const transformedData = data.data.map((entry) => createFacadeObject(entry));
				setUserPerformance(transformedData);
			} catch (error) {
				console.error('Error fetching user performance:', error);
				console.log('Utilisation des données mock pour user performance');
				setUserPerformance(mockedUserPerformance);
			}
		};

		fetchData();
	}, [id]);

	return userPerformance;
};
