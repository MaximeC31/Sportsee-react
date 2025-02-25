import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useUserInfo } from '../hooks/useUserInfo.jsx';
import { useUserActivity } from '../hooks/useUserActivity.jsx';
import { useUserAverageSessions } from '../hooks/useUserAverageSessions.jsx';
import { useUserPerformance } from '../hooks/useUserPerformance.jsx';
import { useIsOnline } from '../hooks/useIsOnline.jsx';

import BarChart from '../components/BarChart.jsx';
import LineChart from '../components/LineChart.jsx';
import RadarChart from '../components/RadarChart.jsx';
import RadialBar from '../components/RadialBar.jsx';
import MacroInfos from '../components/MacroInfos.jsx';
import { AlertModal } from '../components/AlertModal.jsx';

import flames from '../assets/flames.svg';
import meat from '../assets/meat.svg';
import apple from '../assets/apple.svg';
import burger from '../assets/burger.svg';

import {
	mockedUserInfo,
	mockedUserActivity,
	mockedUserAverageSessions,
	mockedUserPerformance,
} from '../utils/mocker.js';

const Home = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (id !== '12' && id !== '18') {
			navigate('/user/12');
		}
	}, [id, navigate]);

	let userInfo = useUserInfo(id);
	let userActivity = useUserActivity(id);
	let userAverageSessions = useUserAverageSessions(id);
	let userPerformance = useUserPerformance(id);

	const onlineState = useIsOnline();
	if (!onlineState) {
		userInfo = mockedUserInfo;
		userActivity = mockedUserActivity;
		userAverageSessions = mockedUserAverageSessions;
		userPerformance = mockedUserPerformance;
	}

	const apiState = userInfo && userActivity && userAverageSessions && userPerformance;
	if (apiState) {
		return (
			<>
				{!onlineState ? <AlertModal /> : null}
				<section className='greeting'>
					<h1>
						Bonjour <span className='greeting__name'>{userInfo.firstname}</span>
					</h1>
					<p className='greeting__message'>
						Félicitations ! Vous avez explosé vos objectifs hier 👏
					</p>
				</section>

				<section className='dashboard'>
					<div className='dashboard__metrics'>
						<div className='dashboard__metrics-container'>
							<div className='dashboard__metrics-header'>
								<h3 className='dashboard__metrics-title'>Activité quotidienne</h3>
								<div className='dashboard__metrics-legend'>
									<div className='dashboard__metrics-legend-item'>
										<div
											className='dashboard__metrics-legend-icon'
											style={{ background: 'black' }}
										></div>
										<p className='dashboard__metrics-legend-text'>Poids (kg)</p>
									</div>
									<div className='dashboard__metrics-legend-item'>
										<div
											className='dashboard__metrics-legend-icon'
											style={{ background: 'red' }}
										></div>
										<p className='dashboard__metrics-legend-text'>Calories brûlées (kCal)</p>
									</div>
								</div>
							</div>
							<BarChart data={userActivity} />
						</div>

						<div className='dashboard__metrics__average'>
							<div className='dashboard__metrics__average-session'>
								<h3 className='dashboard__metrics__average-title'>Durée moyenne des sessions</h3>
								<LineChart data={userAverageSessions} />
							</div>
							<div className='dashboard__metrics__average-performance'>
								<RadarChart data={userPerformance} />
							</div>
							<div className='dashboard__metrics__average-score'>
								<h3 className='dashboard__metrics__average-title'>Score</h3>
								<RadialBar data={userInfo} />
							</div>
						</div>
					</div>

					<div className='dashboard__macro'>
						<MacroInfos
							data={userInfo.calories}
							icon={flames}
							className='dashboard__macro-item'
						/>
						<MacroInfos
							data={userInfo.proteines}
							icon={meat}
							className='dashboard__macro-item'
						/>
						<MacroInfos
							data={userInfo.glucides}
							icon={apple}
							className='dashboard__macro-item'
						/>
						<MacroInfos
							data={userInfo.lipides}
							icon={burger}
							className='dashboard__macro-item'
						/>
					</div>
				</section>
			</>
		);
	}
};

export default Home;
