import { useState, useEffect } from 'react';
import { getUserInfo } from '../utils/api.js';
import { mockedUserInfo } from '../utils/mocker.js';

export const useUserInfo = (id = '12') => {
	const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await getUserInfo(id);

				const dataFacade = {
					calories: {
						className: 'calories',
						name: 'Calories',
						quantity: data.keyData.calorieCount,
						unit: 'kCal',
					},

					proteines: {
						className: 'proteines',
						name: 'Protéines',
						quantity: data.keyData.proteinCount,
						unit: 'g',
					},

					glucides: {
						className: 'glucides',
						name: 'Glucides',
						quantity: data.keyData.carbohydrateCount,
						unit: 'g',
					},

					lipides: {
						className: 'lipides',
						name: 'Lipides',
						quantity: data.keyData.lipidCount,
						unit: 'g',
					},

					score: data?.todayScore || data?.score,

					firstname: data?.userInfos.firstName
				};

				setUserInfo(dataFacade);
			} catch (error) {
				console.error('Error fetching user info:', error);
				console.log('Utilisation des données mock pour user info');
				setUserInfo(mockedUserInfo);
			}
		};

		fetchData();
	}, [id]);

	return userInfo;
};
