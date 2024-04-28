import {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/loaders/Loader';

const AppRouter = () => {
	return (
			<Routes>
				{Object.values(routeConfig).map(({path, element}) => (
					<Route
						key={path}
						element={<Suspense fallback={<Loader />}><div className='page-wrapper'>{element}</div></Suspense>}
						path={path}
					/>
				))}
			</Routes>
	);
};

export default AppRouter;

