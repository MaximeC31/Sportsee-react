import { useState, useEffect } from 'react';
import { getUserActivity } from '../utils/api.js';
import { mockedUserActivity } from '../utils/mocker.js';

const formatActivityData = ({ sessions }) =>
	sessions.map((session) => ({
		day: new Date(session.day).getDate(),
		kilogram: session.kilogram,
		calories: session.calories,
	}));

export const useUserActivity = (id = '12') => {
	const [userActivity, setUserActivity] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await getUserActivity(id);

				const formattedData = formatActivityData(data);
				setUserActivity(formattedData);
			} catch (error) {
				console.error('Error fetching user activity:', error);
				console.log('Utilisation des données mock pour user activity');
				setUserActivity(mockedUserActivity);
			}
		};

		fetchData();
	}, [id]);

	return userActivity;
};
