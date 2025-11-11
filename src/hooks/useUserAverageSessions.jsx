import { useState, useEffect } from 'react';
import { getUserAverageSessions } from '../utils/api.js';
import { mockedUserAverageSessions } from '../utils/mocker.js';

const formatData = ({ sessions }) => {
	const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
	const formattedSessions = sessions.map((session) => ({
		name: days[session.day - 1],
		sessionLength: session.sessionLength,
	}));

	return [...formattedSessions];
};

export const useUserAverageSessions = (id = '12') => {
	const [userAverageSessions, setUserAverageSessions] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await getUserAverageSessions(id);

				const formattedData = formatData(data);
				setUserAverageSessions(formattedData);
			} catch (error) {
				console.error('Error fetching average sessions:', error);
				console.log('Utilisation des données mock pour average sessions');
				setUserAverageSessions(mockedUserAverageSessions);
			}
		};

		fetchData();
	}, [id]);

	return userAverageSessions;
};
